declare global {
    interface Window {
      console: {
        log: (...args: any[]) => void;
      };
      Function: FunctionConstructor;
    }
  }
  
  export {};