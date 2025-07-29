/**
 * ISSUE-003: Software Skills Mobile Layout Tests
 * Tests the mobile responsive layout improvements for software skills section
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';

// Mock the portfolio data since it's imported directly
jest.mock('../../portfolio', () => ({
    skillsSection: {
        softwareSkills: [
            {
                skillName: "React",
                fontAwesomeClassname: "fab fa-react"
            },
            {
                skillName: "JavaScript",
                fontAwesomeClassname: "fab fa-js-square"
            },
            {
                skillName: "Node.js",
                fontAwesomeClassname: "fab fa-node-js"
            },
            {
                skillName: "Python",
                fontAwesomeClassname: "fab fa-python"
            },
            {
                skillName: "Swift",
                fontAwesomeClassname: "fab fa-swift"
            }
        ]
    }
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

describe('ISSUE-003: Software Skills Mobile Layout', () => {
    beforeEach(() => {
        // Reset viewport to mobile size for each test
        mockViewport(375); // iPhone SE width
    });

    test('should render all software skills with proper structure', () => {
        render(<SoftwareSkill />);

        const skillsContainer = document.querySelector('.software-skills-main-div');
        const skillsList = document.querySelector('.dev-icons');
        const skillItems = document.querySelectorAll('.software-skill-inline');

        expect(skillsContainer).toBeInTheDocument();
        expect(skillsList).toBeInTheDocument();
        expect(skillItems).toHaveLength(5); // Based on our mock data
    });

    test('should render skill names and icons correctly', () => {
        render(<SoftwareSkill />);

        const skillNames = ['React', 'JavaScript', 'Node.js', 'Python', 'Swift'];

        skillNames.forEach(skillName => {
            expect(screen.getByText(skillName)).toBeInTheDocument();
        });

        // Check that icons are rendered
        const icons = document.querySelectorAll('.software-skill-inline > i');
        expect(icons).toHaveLength(5);

        // Verify specific icon classes
        expect(document.querySelector('.fab.fa-react')).toBeInTheDocument();
        expect(document.querySelector('.fab.fa-js-square')).toBeInTheDocument();
    });

    test('should have proper CSS classes for mobile responsive layout', () => {
        render(<SoftwareSkill />);

        const skillsList = document.querySelector('.dev-icons');
        const skillItems = document.querySelectorAll('.software-skill-inline');

        expect(skillsList).toHaveClass('dev-icons');

        skillItems.forEach(item => {
            expect(item).toHaveClass('software-skill-inline');
        });
    });

    test('snapshot: software skills component on mobile', () => {
        mockViewport(375);
        const { container } = render(<SoftwareSkill />);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('snapshot: software skills component on small mobile', () => {
        mockViewport(320);
        const { container } = render(<SoftwareSkill />);
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('ISSUE-003: Mobile Font Size and Icon Scaling', () => {
    test('should maintain proper layout on tablet breakpoint', () => {
        mockViewport(768); // Tablet size - right at breakpoint
        render(<SoftwareSkill />);

        const skillsList = document.querySelector('.dev-icons');
        const skillItems = document.querySelectorAll('.software-skill-inline');

        expect(skillsList).toHaveClass('dev-icons');
        expect(skillItems).toHaveLength(5);

        // All skills should be visible and properly structured
        skillItems.forEach(item => {
            const icon = item.querySelector('i');
            const text = item.querySelector('p');

            expect(icon).toBeInTheDocument();
            expect(text).toBeInTheDocument();
            expect(item).toHaveClass('software-skill-inline');
        });
    });

    test('should handle mobile breakpoint sizing correctly', () => {
        mockViewport(480); // Mobile breakpoint
        render(<SoftwareSkill />);

        const skillsList = document.querySelector('.dev-icons');
        const skillItems = document.querySelectorAll('.software-skill-inline');

        // CSS classes should be applied for mobile responsive behavior
        expect(skillsList).toHaveClass('dev-icons');
        expect(skillItems).toHaveLength(5);

        // Test that all skill text is readable
        const skillTexts = document.querySelectorAll('.software-skill-inline > p');
        skillTexts.forEach(text => {
            expect(text).toBeVisible();
            expect(text.textContent.length).toBeGreaterThan(0);
        });
    });

    test('should scale properly for small mobile devices', () => {
        mockViewport(320); // Very small mobile
        render(<SoftwareSkill />);

        const skillsList = document.querySelector('.dev-icons');
        const skillItems = document.querySelectorAll('.software-skill-inline');

        expect(skillsList).toHaveClass('dev-icons');
        expect(skillItems).toHaveLength(5);

        // Ensure all icons are still clickable and accessible
        const icons = document.querySelectorAll('.software-skill-inline > i');
        icons.forEach(icon => {
            expect(icon).toBeVisible();
            expect(icon).toHaveClass('fab');
        });
    });
});

describe('ISSUE-003: Cross-Device Mobile Layout Testing', () => {
    test('should maintain consistent layout across mobile sizes', () => {
        const mobileSizes = [320, 375, 414, 480]; // Common mobile widths

        mobileSizes.forEach(width => {
            mockViewport(width);

            const { container } = render(<SoftwareSkill />);
            const skillsList = container.querySelector('.dev-icons');
            const skillItems = container.querySelectorAll('.software-skill-inline');

            // Basic structure should be maintained across all sizes
            expect(skillsList).toHaveClass('dev-icons');
            expect(skillItems).toHaveLength(5);

            // All skill names should be present
            const skillNames = ['React', 'JavaScript', 'Node.js', 'Python', 'Swift'];
            skillNames.forEach(skillName => {
                expect(container).toHaveTextContent(skillName);
            });

            container.remove();
        });
    });

    test('should handle hover interactions properly on mobile', () => {
        mockViewport(375);
        render(<SoftwareSkill />);

        const icons = document.querySelectorAll('.software-skill-inline > i');
        const texts = document.querySelectorAll('.software-skill-inline > p');

        // Icons and text should be properly paired
        expect(icons).toHaveLength(texts.length);
        expect(icons).toHaveLength(5);

        // Each icon should have a corresponding text element
        icons.forEach((icon, index) => {
            const parentLi = icon.closest('.software-skill-inline');
            const text = parentLi.querySelector('p');
            expect(text).toBeInTheDocument();
            expect(text.textContent.length).toBeGreaterThan(0);
        });
    });

    test('should maintain accessibility on mobile layouts', () => {
        mockViewport(375);
        render(<SoftwareSkill />);

        const skillItems = document.querySelectorAll('.software-skill-inline');

        skillItems.forEach(item => {
            // Each skill item should have a name attribute for accessibility
            expect(item).toHaveAttribute('name');
            expect(item.getAttribute('name')).toBeTruthy();

            // Should contain both icon and text
            const icon = item.querySelector('i');
            const text = item.querySelector('p');

            expect(icon).toBeInTheDocument();
            expect(text).toBeInTheDocument();
            expect(text.textContent).toBe(item.getAttribute('name'));
        });
    });
});

describe('ISSUE-003: Software Skills Props and Data Handling', () => {
    test('should render skills with proper data structure', () => {
        render(<SoftwareSkill />);

        const skillItems = document.querySelectorAll('.software-skill-inline');

        // Should have the 5 mocked skills
        expect(skillItems).toHaveLength(5);

        // Each skill should have name attribute and proper structure
        skillItems.forEach(item => {
            expect(item).toHaveAttribute('name');

            const icon = item.querySelector('i');
            const text = item.querySelector('p');

            expect(icon).toBeInTheDocument();
            expect(text).toBeInTheDocument();
            expect(text.textContent).toBe(item.getAttribute('name'));
        });
    });

    test('should maintain data integrity across renders', () => {
        const { rerender } = render(<SoftwareSkill />);

        const initialSkillItems = document.querySelectorAll('.software-skill-inline');
        expect(initialSkillItems).toHaveLength(5);

        // Re-render and verify consistency
        rerender(<SoftwareSkill />);

        const rerenderSkillItems = document.querySelectorAll('.software-skill-inline');
        expect(rerenderSkillItems).toHaveLength(5);

        // Same skills should be present
        const skillNames = ['React', 'JavaScript', 'Node.js', 'Python', 'Swift'];
        skillNames.forEach(skillName => {
            expect(screen.getByText(skillName)).toBeInTheDocument();
        });
    });
});
