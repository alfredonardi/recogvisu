import { useState, useCallback } from 'react';

interface DynamicItem {
  [key: string]: any;
}

export const useDynamicList = (initialItems: DynamicItem[] = []) => {
  const [items, setItems] = useState<DynamicItem[]>(initialItems);

  const addItem = useCallback((item: DynamicItem = {}) => {
    setItems(prevItems => [...prevItems, item]);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  }, []);

  const updateItem = useCallback((index: number, field: string, value: any) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], [field]: value };
      return newItems;
    });
  }, []);

  return {
    items,
    addItem,
    removeItem,
    updateItem
  };
};