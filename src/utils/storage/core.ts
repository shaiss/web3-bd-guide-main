
/**
 * Core utility functions for working with local storage
 */

// Storage keys
export const EVALUATIONS_KEY = 'web3_evaluations';
export const THRESHOLDS_KEY = 'web3_thresholds';
export const APPEARANCE_KEY = 'web3_appearance';
export const TEMPLATES_KEY = 'web3_templates';

/**
 * Generic function to save data to local storage
 */
export const saveToStorage = <T>(key: string, data: T): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving to local storage (${key}):`, error);
    return false;
  }
};

/**
 * Generic function to get data from local storage
 */
export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  } catch (error) {
    console.error(`Error reading from local storage (${key}):`, error);
    return defaultValue;
  }
};

/**
 * Format byte size to human-readable format
 */
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Calculate storage usage statistics
 */
export const calculateStorageSize = (): { 
  evaluationsSize: number; 
  thresholdsSize: number;
  appearanceSize: number;
  templatesSize: number;
  totalSize: number;
  totalSizeFormatted: string;
  percentUsed: number;
  breakdown: Record<string, number>;
} => {
  try {
    const evaluations = localStorage.getItem(EVALUATIONS_KEY) || '';
    const thresholds = localStorage.getItem(THRESHOLDS_KEY) || '';
    const appearance = localStorage.getItem(APPEARANCE_KEY) || '';
    const templates = localStorage.getItem(TEMPLATES_KEY) || '';
    
    const evaluationsSize = new Blob([evaluations]).size;
    const thresholdsSize = new Blob([thresholds]).size;
    const appearanceSize = new Blob([appearance]).size;
    const templatesSize = new Blob([templates]).size;
    
    const totalSize = evaluationsSize + thresholdsSize + appearanceSize + templatesSize;
    
    // Create breakdown object
    const breakdown: Record<string, number> = {
      'Evaluations': evaluationsSize,
      'Thresholds': thresholdsSize,
      'Appearance': appearanceSize,
      'Templates': templatesSize
    };
    
    // Format total size for display
    let totalSizeFormatted = '';
    if (totalSize < 1024) {
      totalSizeFormatted = `${totalSize} B`;
    } else if (totalSize < 1024 * 1024) {
      totalSizeFormatted = `${(totalSize / 1024).toFixed(1)} KB`;
    } else {
      totalSizeFormatted = `${(totalSize / (1024 * 1024)).toFixed(1)} MB`;
    }
    
    // Calculate percentage of typical browser local storage (assuming 5MB)
    const percentUsed = (totalSize / (5 * 1024 * 1024)) * 100;
    
    return {
      evaluationsSize,
      thresholdsSize,
      appearanceSize,
      templatesSize,
      totalSize,
      totalSizeFormatted,
      percentUsed: Math.min(percentUsed, 100), // Cap at 100%
      breakdown
    };
  } catch (error) {
    console.error('Error calculating storage size:', error);
    return {
      evaluationsSize: 0,
      thresholdsSize: 0,
      appearanceSize: 0,
      templatesSize: 0,
      totalSize: 0,
      totalSizeFormatted: '0 B',
      percentUsed: 0,
      breakdown: {}
    };
  }
};
