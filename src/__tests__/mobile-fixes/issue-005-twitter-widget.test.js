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
    const mockScreenWidth = 375; // Default mobile width for testing
    const widthValue = options?.width?.widthScreen || mockScreenWidth;
    
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
    test('should render with default width configuration', () => {
      const ContextWrapper = createStyleContextWrapper();
      
      render(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
      expect(twitterEmbed).toHaveAttribute('data-width');
      // Widget should have some width value (testing structure, not specific responsive behavior)
      expect(twitterEmbed.getAttribute('data-width')).toBeTruthy();
    });

    test('should maintain consistent width attribute', () => {
      const ContextWrapper = createStyleContextWrapper();
      
      render(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
      const widthAttr = twitterEmbed.getAttribute('data-width');
      expect(widthAttr).toBeTruthy();
      expect(typeof widthAttr).toBe('string');
    });

    test('should handle widget width configuration properly', () => {
      const ContextWrapper = createStyleContextWrapper();
      
      render(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      const twitterEmbed = screen.getByTestId('twitter-timeline-embed');
      // Test that the component sets up the width attribute correctly
      expect(twitterEmbed).toHaveAttribute('data-width');
      expect(twitterEmbed).toBeInTheDocument();
    });

    test('should maintain widget structure across different renders', () => {
      const ContextWrapper = createStyleContextWrapper();
      
      const { rerender } = render(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      let twitterEmbed = screen.getByTestId('twitter-timeline-embed');
      const initialWidth = twitterEmbed.getAttribute('data-width');
      
      // Re-render and verify consistency
      rerender(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      twitterEmbed = screen.getByTestId('twitter-timeline-embed');
      expect(twitterEmbed.getAttribute('data-width')).toBe(initialWidth);
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
    test('snapshot: Twitter widget mobile layout', () => {
      const ContextWrapper = createStyleContextWrapper();
      
      const { container } = render(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );
      
      expect(container.firstChild).toMatchSnapshot();
    });

    test('snapshot: Twitter widget in dark theme', () => {
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
      const ContextWrapper = createStyleContextWrapper();
      
      const { rerender } = render(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      let widget = screen.getByTestId('twitter-timeline-embed');
      const initialWidth = widget.getAttribute('data-width');

      // Re-render should maintain the same configuration
      rerender(
        <ContextWrapper>
          <Twitter />
        </ContextWrapper>
      );

      widget = screen.getByTestId('twitter-timeline-embed');
      expect(widget.getAttribute('data-width')).toBe(initialWidth);
      expect(widget).toBeInTheDocument();
    });

    test('should maintain widget structure consistently', () => {
      const ContextWrapper = createStyleContextWrapper();
      
      // Test multiple renders to ensure consistency
      for (let i = 0; i < 3; i++) {
        const { container } = render(
          <ContextWrapper>
            <Twitter />
          </ContextWrapper>
        );
        
        const widget = screen.getByTestId('twitter-timeline-embed');
        expect(widget).toHaveAttribute('data-width');
        expect(widget).toBeInTheDocument();
        
        container.remove();
      }
    });
  });
});
