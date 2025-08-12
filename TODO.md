# Roadmap System 7 – Portfolio

Priority order I’ll implement next (you can reorder anytime):

## Phase 1 (done or in progress)
- Chicago-like font integration across UI.
- System 7 window chrome (1px borders, centered title, small close/zoom boxes, grow box).
- Global keyboard shortcuts: Cmd+W (close), Cmd+M (shade), Cmd+1/2/3 (open About/Projects/Contact).

## Phase 2 (next)
- Classic scrollbars (WebKit + Firefox approximation).
- Menubar fidelity: About This Mac, Control Panels (SFX toggle), Chooser, Sleep (disabled + error SFX).
- Extra SFX: Empty Trash, move items, error modal sequence.

## Phase 3
- Desktop Arrange/Clean Up: snap-to-grid, arrange by name; positions persisted in localStorage.
- Marquee selection and rename (Desktop and Projects window).
- Boot “Happy Mac” splash on first visit (respects reduced motion).

## Phase 4
- 1-bit monochrome optional mode (CSS filter/Canvas dither for images and thumbnails).
- Accessibility: ARIA roles for menus/windows, focus management, keyboard nav in grids.
- SEO/Perf: manifest, sitemap, og:image, Lighthouse checks.

## Notes
- All motion and SFX continue to respect prefers-reduced-motion and the SFX toggle.
- Window manager API: window.__windowManager.setVisible(id, visible), emits `window-visibility-change`.
