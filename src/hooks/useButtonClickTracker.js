// hooks/useButtonClickTracker.js
import { useState, useEffect } from 'react';
import { localStorageUtils } from '../utils/localStorage';

export const useButtonClickTracker = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Initialize count from localStorage when component mounts
    setClickCount(localStorageUtils.getClickCount());
  }, []);

  const handleButtonClick = () => {
    const newCount = localStorageUtils.incrementClickCount();
    setClickCount(newCount);
    console.log(`Button clicked ${newCount} times`);
    
    // You can also send this data to an analytics service here
    // trackButtonClick(newCount);
    
    return newCount;
  };

  return { clickCount, handleButtonClick };
};