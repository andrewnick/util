export const widthResize = (callback) => {
  let lastWindowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    let windowWidth =  window.innerWidth;
    if (lastWindowWidth !== windowWidth) {
      callback();
      lastWindowWidth = windowWidth;
    }
  });
};


export class Breakpoint {
  constructor() {
    this.beforeBreakpoint = true;
  }

  checkBreakpoint (breakpoint, beforeCallback, afterCallback) {
    if (breakpoint < window.innerWidth) {
      if (this.beforeBreakpoint) {
        if (afterCallback !== null) {
          afterCallback();
        }
        this.beforeBreakpoint = false;
      }
    } else {
      if (!this.beforeBreakpoint) {
        if (beforeCallback !== null) {
          beforeCallback();
        }
        this.beforeBreakpoint = true;
      }
    }
  }
};
