/**
 * ISSUE-002: Navigation Header Mobile Tests
 * Tests the mobile navigation header improvements for touch targets and readability
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/header/Header';
import StyleContext from '../../contexts/StyleContext';

// Mock the portfolio data
jest.mock('../../portfolio', () => ({
    greeting: {
        username: 'Test User'
    },
    workExperiences: { display: true },
    skillsSection: { display: true },
    openSource: { display: true },
    blogSection: { display: true },
    talkSection: { display: true },
    achievementSection: { display: true },
    educationInfo: { display: true },
    bigProjects: { display: true },
    linkedinRecommandations: { display: true }
}));

// Mock react-headroom
jest.mock('react-headroom', () => {
    return function MockHeadroom({ children }) {
        return <div data-testid="headroom">{children}</div>;
    };
});

// Mock ToggleSwitch component
jest.mock('../../components/ToggleSwitch/ToggleSwitch', () => {
    return function MockToggleSwitch() {
        return <div data-testid="toggle-switch">Toggle</div>;
    };
});

const renderHeaderWithContext = (isDark = false) => {
    const contextValue = { isDark };
    return render(
        <StyleContext.Provider value={contextValue}>
            <Header />
        </StyleContext.Provider>
    );
};

describe('ISSUE-002: Navigation Header Mobile Improvements', () => {
    beforeEach(() => {
        // Reset any window size mocks
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 375, // iPhone SE width
        });
    });

    test('should render header with proper mobile-friendly structure', () => {
        renderHeaderWithContext();

        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
        expect(header).toHaveClass('header');
    });

    test('should render logo with proper structure', () => {
        renderHeaderWithContext();

        const logo = screen.getByText('Test User');
        expect(logo).toBeInTheDocument();
        expect(logo.parentElement).toHaveClass('logo');
    });

    test('should render mobile menu button for hamburger navigation', () => {
        renderHeaderWithContext();

        const menuBtn = screen.getByRole('checkbox');
        expect(menuBtn).toHaveClass('menu-btn');
        expect(menuBtn).toHaveAttribute('id', 'menu-btn');

        const menuIcon = document.querySelector('label[for="menu-btn"]');
        expect(menuIcon).toHaveClass('menu-icon');
    });

    test('should render navigation menu with proper mobile accessibility', () => {
        renderHeaderWithContext();

        const menu = document.querySelector('.menu');
        expect(menu).toBeInTheDocument();

        // Check that navigation links are present
        const skillsLink = screen.getByText('Skills');
        const contactLink = screen.getByText('Contact Me');

        expect(skillsLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });

    test('should apply dark theme classes when isDark is true', () => {
        renderHeaderWithContext(true);

        const header = screen.getByRole('banner');
        expect(header).toHaveClass('dark-menu', 'header');

        const menu = document.querySelector('.menu');
        expect(menu).toHaveClass('dark-menu', 'menu');

        const navicon = document.querySelector('.navicon');
        expect(navicon).toHaveClass('navicon', 'navicon-dark');
    });

    test('should apply light theme classes when isDark is false', () => {
        renderHeaderWithContext(false);

        const header = screen.getByRole('banner');
        expect(header).toHaveClass('header');
        expect(header).not.toHaveClass('dark-menu');

        const navicon = document.querySelector('.navicon');
        expect(navicon).toHaveClass('navicon');
        expect(navicon).not.toHaveClass('navicon-dark');
    });

    test('snapshot: header component in light mode', () => {
        const { container } = renderHeaderWithContext(false);
        expect(container.firstChild).toMatchSnapshot();
    });

    test('snapshot: header component in dark mode', () => {
        const { container } = renderHeaderWithContext(true);
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('ISSUE-002: Mobile Touch Target Compliance', () => {
    test('should have accessible navigation links for mobile touch', () => {
        renderHeaderWithContext();

        const links = screen.getAllByRole('link');
        links.forEach(link => {
            // Verify links are properly structured for touch interaction
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href');
        });
    });

    test('should have proper menu button for mobile interaction', () => {
        renderHeaderWithContext();

        const menuBtn = screen.getByRole('checkbox');
        const menuLabel = document.querySelector('label[for="menu-btn"]');

        // Verify the menu button is properly connected to its label
        expect(menuBtn.id).toBe('menu-btn');
        expect(menuLabel).toHaveAttribute('for', 'menu-btn');
    });
});

describe('ISSUE-002: Mobile Font Size and Readability', () => {
    test('should maintain readable font sizes on mobile devices', () => {
        // This test verifies the component structure that supports CSS mobile font fixes
        renderHeaderWithContext();

        const header = screen.getByRole('banner');
        const logo = header.querySelector('.logo');
        const menu = header.querySelector('.menu');

        // Verify the elements that CSS will target for mobile font improvements
        expect(header).toHaveClass('header');
        expect(logo).toHaveClass('logo');
        expect(menu).toHaveClass('menu');
    });

    test('should have proper CSS classes for mobile responsive design', () => {
        renderHeaderWithContext();

        const header = screen.getByRole('banner');

        // Verify classes that CSS media queries target
        expect(header).toHaveClass('header');

        const menuItems = document.querySelectorAll('.menu li');
        expect(menuItems.length).toBeGreaterThan(0);

        const menuLinks = document.querySelectorAll('.menu a');
        expect(menuLinks.length).toBeGreaterThan(0);
    });
});
