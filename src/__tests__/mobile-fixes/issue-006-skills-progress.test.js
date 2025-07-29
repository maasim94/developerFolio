/**
 * ISSUE-006: Skills Progress Mobile Layout Tests
 * Tests the responsive layout improvements for the skills progress section
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StackProgress from '../../containers/skillProgress/skillProgress';

// Mock the portfolio data
jest.mock('../../portfolio', () => ({
    illustration: {
        animated: false
    },
    techStack: {
        viewSkillBars: true,
        experience: [
            {
                Stack: "React",
                progressPercentage: "85%"
            },
            {
                Stack: "JavaScript",
                progressPercentage: "90%"
            },
            {
                Stack: "Node.js",
                progressPercentage: "75%"
            },
            {
                Stack: "Python",
                progressPercentage: "70%"
            }
        ]
    }
}));

// Mock react-reveal
jest.mock('react-reveal', () => ({
    Fade: ({ children }) => <div data-testid="fade-container">{children}</div>
}));

// Mock DisplayLottie component
jest.mock('../../components/displayLottie/DisplayLottie', () => {
    return function DisplayLottie({ animationData }) {
        return <div data-testid="lottie-animation">Lottie Animation</div>;
    };
});

// Mock Build animation
jest.mock('../../assets/lottie/build', () => ({
    default: { /* mock animation data */ }
}));

// Helper function to simulate different screen sizes
const mockViewport = (width) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });

    // Trigger resize event
    window.dispatchEvent(new Event('resize'));
};

describe('ISSUE-006: Skills Progress Mobile Layout', () => {
    beforeEach(() => {
        // Reset viewport to mobile size for each test
        mockViewport(375); // iPhone SE width
    });

    test('should render skills progress with proper structure', () => {
        render(<StackProgress />);

        const skillsContainer = document.querySelector('.skills-container');
        const skillsBar = document.querySelector('.skills-bar');
        const skillsImage = document.querySelector('.skills-image');
        const skillsHeading = screen.getByText('Proficiency');

        expect(skillsContainer).toBeInTheDocument();
        expect(skillsBar).toBeInTheDocument();
        expect(skillsImage).toBeInTheDocument();
        expect(skillsHeading).toBeInTheDocument();
    });

    test('should render all skill bars with correct data', () => {
        render(<StackProgress />);

        const skillElements = document.querySelectorAll('.skill');
        expect(skillElements).toHaveLength(4); // Based on our mock data

        // Check skill names
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('Node.js')).toBeInTheDocument();
        expect(screen.getByText('Python')).toBeInTheDocument();

        // Check progress bars exist
        const progressBars = document.querySelectorAll('.meter > span');
        expect(progressBars).toHaveLength(4);
    });

    test('should apply correct progress percentages', () => {
        render(<StackProgress />);

        const progressBars = document.querySelectorAll('.meter > span');

        // Check that progress bars have the correct width styles
        expect(progressBars[0]).toHaveStyle('width: 85%'); // React
        expect(progressBars[1]).toHaveStyle('width: 90%'); // JavaScript
        expect(progressBars[2]).toHaveStyle('width: 75%'); // Node.js
        expect(progressBars[3]).toHaveStyle('width: 70%'); // Python
    });

    test('should render static image when animation is disabled', () => {
        render(<StackProgress />);

        const image = document.querySelector('.skills-image img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('alt', 'Skills');
    });

    test('should have proper CSS classes for mobile responsive layout', () => {
        render(<StackProgress />);

        const skillsContainer = document.querySelector('.skills-container');
        const skillsBar = document.querySelector('.skills-bar');
        const skillsImage = document.querySelector('.skills-image');

        expect(skillsContainer).toHaveClass('skills-container');
        expect(skillsBar).toHaveClass('skills-bar');
        expect(skillsImage).toHaveClass('skills-image');
    });

    test('snapshot: skills progress component on mobile', () => {
        mockViewport(320);
        const { container } = render(<StackProgress />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('snapshot: skills progress component on tablet', () => {
        mockViewport(768);
        const { container } = render(<StackProgress />);
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('ISSUE-006: Mobile Image Scaling and Layout', () => {
    test('should maintain proper image structure on mobile', () => {
        mockViewport(375); // Mobile size
        render(<StackProgress />);

        const skillsImage = document.querySelector('.skills-image');
        const image = skillsImage.querySelector('img');

        expect(skillsImage).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('alt', 'Skills');
    });

    test('should handle tablet breakpoint correctly', () => {
        mockViewport(768); // Tablet size
        render(<StackProgress />);

        const skillsContainer = document.querySelector('.skills-container');
        const skillsBar = document.querySelector('.skills-bar');
        const skillsImage = document.querySelector('.skills-image');

        expect(skillsContainer).toBeInTheDocument();
        expect(skillsBar).toBeInTheDocument();
        expect(skillsImage).toBeInTheDocument();

        // CSS classes should be applied for responsive behavior
        expect(skillsContainer).toHaveClass('skills-container');
        expect(skillsImage).toHaveClass('skills-image');
    });

    test('should scale properly for large tablet breakpoint', () => {
        mockViewport(1200); // Large tablet/small desktop
        render(<StackProgress />);

        const skillsContainer = document.querySelector('.skills-container');
        const skillElements = document.querySelectorAll('.skill');

        expect(skillsContainer).toBeInTheDocument();
        expect(skillElements).toHaveLength(4);

        // All progress bars should still be functional
        const progressBars = document.querySelectorAll('.meter > span');
        expect(progressBars).toHaveLength(4);
    });

    test('should maintain image quality across screen sizes', () => {
        const screenSizes = [320, 375, 414, 768, 1024];

        screenSizes.forEach(width => {
            mockViewport(width);

            const { container } = render(<StackProgress />);
            const image = container.querySelector('.skills-image img');

            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('alt', 'Skills');

            container.remove();
        });
    });
});

describe('ISSUE-006: Skills Progress Responsive Behavior', () => {
    test('should maintain consistent layout across mobile sizes', () => {
        const mobileSizes = [320, 375, 414, 480]; // Common mobile widths

        mobileSizes.forEach(width => {
            mockViewport(width);

            const { container } = render(<StackProgress />);
            const skillsContainer = container.querySelector('.skills-container');
            const skillElements = container.querySelectorAll('.skill');

            // Basic structure should be maintained across all sizes
            expect(skillsContainer).toHaveClass('skills-container');
            expect(skillElements).toHaveLength(4);

            // All skill names should be present
            const skillNames = ['React', 'JavaScript', 'Node.js', 'Python'];
            skillNames.forEach(skillName => {
                expect(container).toHaveTextContent(skillName);
            });

            container.remove();
        });
    });

    test('should handle progress bar rendering correctly on mobile', () => {
        mockViewport(375);
        render(<StackProgress />);

        const meters = document.querySelectorAll('.meter');
        const spans = document.querySelectorAll('.meter > span');

        // Each skill should have a meter and span
        expect(meters).toHaveLength(4);
        expect(spans).toHaveLength(4);

        // Each span should have a width style
        spans.forEach(span => {
            expect(span.style.width).toBeTruthy();
            expect(span.style.width).toMatch(/\d+%/);
        });
    });

    test('should maintain accessibility on mobile layouts', () => {
        mockViewport(375);
        render(<StackProgress />);

        const heading = screen.getByText('Proficiency');
        const skillNames = ['React', 'JavaScript', 'Node.js', 'Python'];

        // Heading should be accessible
        expect(heading).toBeInTheDocument();
        expect(heading.tagName).toBe('H1');

        // All skill names should be accessible
        skillNames.forEach(skillName => {
            const skillElement = screen.getByText(skillName);
            expect(skillElement).toBeInTheDocument();
            expect(skillElement.tagName).toBe('P');
        });

        // Image should have alt text
        const image = document.querySelector('.skills-image img');
        expect(image).toHaveAttribute('alt', 'Skills');
    });

    test('should handle orientation changes properly', () => {
        const { rerender } = render(<StackProgress />);

        // Portrait mobile
        mockViewport(375);
        rerender(<StackProgress />);

        let skillsContainer = document.querySelector('.skills-container');
        expect(skillsContainer).toBeInTheDocument();

        // Landscape mobile
        mockViewport(667);
        rerender(<StackProgress />);

        skillsContainer = document.querySelector('.skills-container');
        expect(skillsContainer).toBeInTheDocument();

        // Structure should remain consistent
        const skillElements = document.querySelectorAll('.skill');
        expect(skillElements).toHaveLength(4);
    });
});

describe('ISSUE-006: Skills Progress Component Configuration', () => {
    test('should render with proper techStack configuration', () => {
        render(<StackProgress />);

        const skillsContainer = document.querySelector('.skills-container');
        const heading = screen.getByText('Proficiency');
        const skillElements = document.querySelectorAll('.skill');

        expect(skillsContainer).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(skillElements).toHaveLength(4); // Based on our mock data
    });

    test('should render with Fade animation wrapper', () => {
        render(<StackProgress />);

        const fadeContainer = screen.getByTestId('fade-container');
        expect(fadeContainer).toBeInTheDocument();

        // Skills container should be inside the fade wrapper
        const skillsContainer = document.querySelector('.skills-container');
        expect(fadeContainer).toContainElement(skillsContainer);
    });

    test('should maintain data integrity for progress percentages', () => {
        render(<StackProgress />);

        const progressBars = document.querySelectorAll('.meter > span');
        const expectedPercentages = ['85%', '90%', '75%', '70%'];

        progressBars.forEach((bar, index) => {
            expect(bar.style.width).toBe(expectedPercentages[index]);
        });
    });

    test('should render progress bars with proper styling', () => {
        render(<StackProgress />);

        const meters = document.querySelectorAll('.meter');
        const spans = document.querySelectorAll('.meter > span');

        // Each skill should have proper meter structure
        expect(meters).toHaveLength(4);
        expect(spans).toHaveLength(4);

        // Each span should have a valid width percentage
        spans.forEach(span => {
            expect(span.style.width).toBeTruthy();
            expect(span.style.width).toMatch(/^\d+%$/);
        });
    });

    test('should maintain component structure integrity', () => {
        render(<StackProgress />);

        const skillsContainer = document.querySelector('.skills-container');
        const skillsBar = document.querySelector('.skills-bar');
        const skillsImage = document.querySelector('.skills-image');

        // Check parent-child relationships
        expect(skillsContainer).toContainElement(skillsBar);
        expect(skillsContainer).toContainElement(skillsImage);

        // Check that all skills are inside skills-bar
        const skillElements = document.querySelectorAll('.skill');
        skillElements.forEach(skill => {
            expect(skillsBar).toContainElement(skill);
        });
    });
});
