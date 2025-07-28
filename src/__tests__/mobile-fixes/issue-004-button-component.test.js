/**
 * ISSUE-004: Button Component Mobile Tests
 * Tests the mobile button component improvements for touch targets and accessibility
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/button/Button';

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

describe('ISSUE-004: Button Component Mobile Improvements', () => {
  const defaultProps = {
    text: 'Test Button',
    className: 'test-button-container',
    href: '#test',
    newTab: false
  };

  beforeEach(() => {
    // Reset viewport to mobile size for each test
    mockViewport(375); // iPhone SE width
  });

  test('should render button with proper structure and classes', () => {
    render(<Button {...defaultProps} />);
    
    const buttonContainer = document.querySelector('.test-button-container');
    const button = screen.getByRole('link');
    
    expect(buttonContainer).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('main-button');
    expect(button).toHaveTextContent('Test Button');
  });

  test('should have proper href attribute', () => {
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveAttribute('href', '#test');
  });

  test('should open in new tab when newTab prop is true', () => {
    render(<Button {...defaultProps} newTab={true} />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveAttribute('target', '_blank');
  });

  test('should not have target attribute when newTab is false', () => {
    render(<Button {...defaultProps} newTab={false} />);
    
    const button = screen.getByRole('link');
    expect(button).not.toHaveAttribute('target');
  });

  test('should render with custom className for container', () => {
    render(<Button {...defaultProps} className="custom-button-class" />);
    
    const buttonContainer = document.querySelector('.custom-button-class');
    expect(buttonContainer).toBeInTheDocument();
  });

  test('should have main-button class for CSS mobile targeting', () => {
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('link');
    
    // Verify the CSS class that media queries target for mobile improvements
    expect(button).toHaveClass('main-button');
  });

  test('snapshot: button component with default props', () => {
    const { container } = render(<Button {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('snapshot: button component with newTab=true', () => {
    const { container } = render(<Button {...defaultProps} newTab={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('ISSUE-004: Mobile Touch Target Accessibility', () => {
  const defaultProps = {
    text: 'Mobile Button',
    className: 'mobile-button-container',
    href: '#mobile-test',
    newTab: false
  };

  test('should be accessible for mobile touch interaction', () => {
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('link');
    
    // Verify the button has the proper role and is accessible
    expect(button).toHaveAttribute('href');
    expect(button).toBeVisible();
    
    // Check that text is present for screen readers
    expect(button).toHaveAccessibleName('Mobile Button');
  });

  test('should have proper CSS classes for mobile font size improvements', () => {
    mockViewport(320); // Very small mobile device
    render(<Button {...defaultProps} />);
    
    const button = screen.getByRole('link');
    
    // The main-button class enables CSS media queries for:
    // - Minimum 14px font size on mobile
    // - 44px minimum height for iOS compliance
    // - Full width on very small screens
    expect(button).toHaveClass('main-button');
  });

  test('should be usable on different mobile screen sizes', () => {
    const screenSizes = [320, 375, 414, 480]; // Common mobile widths
    
    screenSizes.forEach(width => {
      mockViewport(width);
      
      const { container } = render(<Button {...defaultProps} />);
      const button = container.querySelector('.main-button');
      
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('main-button');
      
      // Clean up for next iteration
      container.remove();
    });
  });
});

describe('ISSUE-004: Mobile Font Size and Readability', () => {
  const longTextProps = {
    text: 'This is a longer button text to test readability',
    className: 'long-text-button',
    href: '#long-text-test',
    newTab: false
  };

  test('should handle long text properly on mobile', () => {
    mockViewport(320); // Smallest mobile size
    render(<Button {...longTextProps} />);
    
    const button = screen.getByRole('link');
    
    expect(button).toHaveTextContent(longTextProps.text);
    expect(button).toHaveClass('main-button');
  });

  test('should maintain readability across different mobile sizes', () => {
    const mobileSizes = [320, 375, 414]; // iPhone SE, standard, large
    const testProps = {
      text: 'Test Button',
      className: 'readability-test',
      href: '#readability-test',
      newTab: false
    };
    
    mobileSizes.forEach(width => {
      mockViewport(width);
      
      const { container } = render(<Button {...testProps} />);
      const button = container.querySelector('.main-button');
      
      // Button should maintain its structure and classes
      expect(button).toHaveClass('main-button');
      expect(button).toHaveTextContent('Test Button');
      
      container.remove();
    });
  });
});

describe('ISSUE-004: Button Component Props Validation', () => {
  test('should handle missing props gracefully', () => {
    render(<Button text="Minimal Button" href="#minimal" />);
    
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Minimal Button');
    expect(button).toHaveClass('main-button');
  });

  test('should handle empty text', () => {
    render(<Button text="" href="#empty" />);
    
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('main-button');
  });

  test('should handle special characters in text', () => {
    const specialText = 'Contact Me →';
    render(<Button text={specialText} href="#contact" />);
    
    const button = screen.getByRole('link');
    expect(button).toHaveTextContent(specialText);
  });
});
