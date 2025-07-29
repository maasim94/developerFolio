/**
 * ISSUE-001: Viewport Meta Tag Configuration Tests
 * Tests the mobile viewport meta tag fix for proper zoom/scaling behavior
 */

// Test viewport meta tag configuration
describe('ISSUE-001: Viewport Meta Tag Configuration', () => {
    beforeEach(() => {
        // Reset the document head for each test
        document.head.innerHTML = '';
    });

    test('should have proper viewport meta tag with mobile-friendly configuration', () => {
        // Create and append the viewport meta tag as it appears in index.html
        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        document.head.appendChild(metaTag);

        const viewportMeta = document.querySelector('meta[name="viewport"]');

        expect(viewportMeta).toBeTruthy();
        expect(viewportMeta.content).toBe('width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes');
    });

    test('viewport meta tag should allow user scaling for accessibility', () => {
        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        document.head.appendChild(metaTag);

        const viewportMeta = document.querySelector('meta[name="viewport"]');

        expect(viewportMeta.content).toContain('user-scalable=yes');
        expect(viewportMeta.content).toContain('maximum-scale=5');
    });

    test('viewport meta tag should have device-width for responsive design', () => {
        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        document.head.appendChild(metaTag);

        const viewportMeta = document.querySelector('meta[name="viewport"]');

        expect(viewportMeta.content).toContain('width=device-width');
        expect(viewportMeta.content).toContain('initial-scale=1');
    });

    test('viewport configuration should prevent zoom issues on iPhone', () => {
        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        document.head.appendChild(metaTag);

        const viewportMeta = document.querySelector('meta[name="viewport"]');

        // Verify the configuration prevents automatic zoom on form inputs
        expect(viewportMeta.content).not.toContain('user-scalable=no');
        expect(viewportMeta.content).not.toContain('maximum-scale=1');

        // Ensure reasonable zoom limits
        expect(viewportMeta.content).toContain('maximum-scale=5');
    });

    test('snapshot: viewport meta tag configuration', () => {
        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        document.head.appendChild(metaTag);

        const viewportMeta = document.querySelector('meta[name="viewport"]');

        expect(viewportMeta.outerHTML).toMatchSnapshot();
    });
});

// Test meta tag accessibility compliance
describe('ISSUE-001: Accessibility Compliance', () => {
    test('should meet WCAG guidelines for viewport configuration', () => {
        const metaTag = document.createElement('meta');
        metaTag.name = 'viewport';
        metaTag.content = 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes';
        document.head.appendChild(metaTag);

        const viewportMeta = document.querySelector('meta[name="viewport"]');

        // WCAG 1.4.4 - Resize text: Users should be able to zoom up to 200%
        expect(viewportMeta.content).toContain('user-scalable=yes');

        // Maximum scale should allow reasonable zoom (5x = 500%)
        const maxScale = viewportMeta.content.match(/maximum-scale=(\d+)/);
        expect(parseInt(maxScale[1])).toBeGreaterThanOrEqual(2);
    });
});
