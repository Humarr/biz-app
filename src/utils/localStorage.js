// utils/localStorage.js
export const localStorageUtils = {
    getClickCount: () => {
      if (typeof window === 'undefined') return 0;
      return parseInt(localStorage.getItem('buttonClickCount') || '0');
    },
    
    setClickCount: (count) => {
      if (typeof window === 'undefined') return;
      localStorage.setItem('buttonClickCount', count.toString());
    },
    
    incrementClickCount: () => {
      if (typeof window === 'undefined') return 0;
      const currentCount = localStorageUtils.getClickCount();
      const newCount = currentCount + 1;
      localStorageUtils.setClickCount(newCount);
      return newCount;
    }
  };