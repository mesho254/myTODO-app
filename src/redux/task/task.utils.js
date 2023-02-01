export const addItem = (items, itemToAdd) => {
  return { ...items, itemToAdd };
};
export const removeItem = (items, itemToRemove) => {
  //check if item already exists in items
  const itemExists = items.find((item) => item === itemToRemove);

  //default filter out the item
  if (itemExists) {
    items.filter((item) => item !== itemToRemove);
  }
  return items;
};
