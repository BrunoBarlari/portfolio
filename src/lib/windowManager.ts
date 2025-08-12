// filepath: /Users/brunobarlari/Dev/portfolio/src/lib/windowManager.ts
// Simple global window visibility manager
// Stores visibility flags and exposes helpers used by windows and the dock.

export type WindowVisibilityMap = Record<string, boolean>;

class WindowManager {
  private visibility: WindowVisibilityMap = {};

  register(id: string, visible: boolean = true) {
    this.visibility[id] = visible;
    this.emitChange(id, visible);
  }

  setVisible(id: string, visible: boolean) {
    this.visibility[id] = visible;
    this.emitChange(id, visible);
  }

  isVisible(id: string): boolean {
    return !!this.visibility[id];
  }

  toggle(id: string) {
    const v = !this.isVisible(id);
    this.setVisible(id, v);
  }

  private emitChange(id: string, visible: boolean) {
    try {
      const ev = new CustomEvent("window-visibility-change", {
        detail: { id, visible },
      });
      window.dispatchEvent(ev);
    } catch {}
  }
}

// Expose a singleton on window for scripts to use easily from Astro components
// and keep type safety in TS files that import it.
export function getWindowManager(): WindowManager {
  // @ts-ignore
  if (!window.__windowManager) {
    // @ts-ignore
    window.__windowManager = new WindowManager();
  }
  // @ts-ignore
  return window.__windowManager as WindowManager;
}

// Also export a safe accessor for non-DOM contexts (SSR), returning no-op object
export function getSafeWindowManager(): Partial<WindowManager> {
  try {
    // will throw if window is not defined
    // @ts-ignore
    return getWindowManager();
  } catch {
    return {
      register() {},
      setVisible() {},
      isVisible() { return true; },
      toggle() {},
    } as Partial<WindowManager>;
  }
}
