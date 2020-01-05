export const saveLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error();
  }
};

export const getLocalStorage = key => {
  try {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  } catch (err) {
    throw new Error();
  }
};
