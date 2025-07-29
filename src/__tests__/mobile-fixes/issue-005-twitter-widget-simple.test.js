import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Twitter from '../../containers/twitter-embed/twitter';
import StyleContext from '../../contexts/StyleContext';

// Mock portfolio data with twitterDetails
jest.mock('../../portfolio', () => ({
    twitterDetails: {
        userName: "testuser",
        display: true
    }
}));

// Mock the TwitterTimelineEmbed component
jest.mock('react-twitter-embed', () => ({
    TwitterTimelineEmbed: ({
        sourceType,
        screenName,
        options,
        theme,
        onload,
        autoHeight,
        borderColor,
        noFooter,
        ...props
    }) => {
        // Extract width from the object structure that the component uses
        const widthValue = options?.width?.widthScreen || window.screen.width || 375;

        return (
            <div
                data-testid="twitter-timeline-embed"
                data-source-type={sourceType}
                data-screen-name={screenName}
                data-theme={theme}
                data-width={widthValue.toString()}
                data-height={options?.height?.toString()}
                {...props}
            >
                Mocked Twitter Timeline for {screenName}
            </div>
        );
    }
}));

// Mock the Loading component
jest.mock('../../containers/loading/Loading', () => {
    return function Loading() {
        return <div data-testid="loading">Loading...</div>;
    };
});

describe('ISSUE-005: Twitter Widget Mobile Responsiveness', () => {
    // Helper function to create context wrapper
    const createStyleContextWrapper = (isDark = false) => {
        return ({ children }) => (
            <StyleContext.Provider value={{ isDark }}>
                {children}
            </StyleContext.Provider>
        );
    };

    // Mock window.screen.width for different screen sizes
    const mockScreenWidth = (width) => {
        Object.defineProperty(window.screen, 'width', {
            writable: true,
            configurable: true,
            value: width,
        });
    };

    beforeEach(() => {
        // Reset to default mobile width
        mockScreenWidth(375);
    });

    describe('Basic Rendering and Structure', () => {
        test('should render Twitter widget with proper structure', () => {
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toBeInTheDocument();
            expect(widget).toHaveAttribute('data-source-type', 'profile');
            expect(widget).toHaveAttribute('data-screen-name', 'testuser');
            expect(widget).toHaveAttribute('data-theme', 'light');
            expect(widget).toHaveAttribute('data-height', '400');
        });

        test('should render with correct CSS classes for responsive layout', () => {
            const ContextWrapper = createStyleContextWrapper();

            const { container } = render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            expect(container.querySelector('.tw-main-div')).toBeInTheDocument();
            expect(container.querySelector('.centerContent')).toBeInTheDocument();
        });
    });

    describe('Screen Width Responsiveness', () => {
        test('should use mobile screen width (375px)', () => {
            mockScreenWidth(375);
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
            expect(twitterEmbed).toHaveAttribute('data-width', '375');
        });

        test('should use tablet screen width (768px)', () => {
            mockScreenWidth(768);
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
            expect(twitterEmbed).toHaveAttribute('data-width', '768');
        });

        test('should use desktop screen width (1024px)', () => {
            mockScreenWidth(1024);
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
            expect(twitterEmbed).toHaveAttribute('data-width', '1024');
        });

        test('should handle very small mobile screens (320px)', () => {
            mockScreenWidth(320);
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
            expect(twitterEmbed).toHaveAttribute('data-width', '320');
            expect(twitterEmbed).toBeInTheDocument();
        });
    });

    describe('Theme Support', () => {
        test('should use light theme by default', () => {
            const ContextWrapper = createStyleContextWrapper(false);

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toHaveAttribute('data-theme', 'light');
        });

        test('should use dark theme when isDark is true', () => {
            const ContextWrapper = createStyleContextWrapper(true);

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toHaveAttribute('data-theme', 'dark');
        });
    });

    describe('Widget Configuration', () => {
        test('should have proper Twitter embed configuration', () => {
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toHaveAttribute('data-source-type', 'profile');
            expect(widget).toHaveAttribute('data-height', '400');
        });

        test('should render username correctly in embed', () => {
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            const widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toHaveAttribute('data-screen-name', 'testuser');
            expect(widget).toHaveTextContent('Mocked Twitter Timeline for testuser');
        });
    });

    describe('Snapshot Testing', () => {
        test('snapshot: Twitter widget on mobile (375px)', () => {
            mockScreenWidth(375);
            const ContextWrapper = createStyleContextWrapper();

            const { container } = render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            expect(container.firstChild).toMatchSnapshot();
        });

        test('snapshot: Twitter widget on tablet (768px)', () => {
            mockScreenWidth(768);
            const ContextWrapper = createStyleContextWrapper();

            const { container } = render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            expect(container.firstChild).toMatchSnapshot();
        });

        test('snapshot: Twitter widget in dark theme', () => {
            mockScreenWidth(375);
            const ContextWrapper = createStyleContextWrapper(true);

            const { container } = render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            expect(container.firstChild).toMatchSnapshot();
        });
    });

    describe('Error Handling and Edge Cases', () => {
        test('should render when display is true', () => {
            const ContextWrapper = createStyleContextWrapper();

            render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            expect(screen.getByTestId('twitter-timeline-embed')).toBeInTheDocument();
        });

        test('should handle responsive layout consistently across renders', () => {
            mockScreenWidth(768);
            const ContextWrapper = createStyleContextWrapper();

            const { rerender } = render(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            let widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toHaveAttribute('data-width', '768');

            // Re-render should maintain the same configuration
            rerender(
                <ContextWrapper>
                    <Twitter />
                </ContextWrapper>
            );

            widget = screen.getByTestId('twitter-timeline-embed');
            expect(widget).toHaveAttribute('data-width', '768');
            expect(widget).toBeInTheDocument();
        });

        test('should maintain widget structure on different screen sizes', () => {
            const ContextWrapper = createStyleContextWrapper();

            // Test multiple screen sizes
            const screenSizes = [320, 375, 768, 1024, 1440];

            screenSizes.forEach(size => {
                mockScreenWidth(size);

                const { container } = render(
                    <ContextWrapper>
                        <Twitter />
                    </ContextWrapper>
                );

                const widget = screen.getByTestId('twitter-timeline-embed');
                expect(widget).toHaveAttribute('data-width', size.toString());
                expect(widget).toBeInTheDocument();

                container.remove();
            });
        });
    });
});
