export const addToStorage = (storageName, val) => {
    localStorage.setItem(storageName, JSON.stringify(val));
};

export const getFromStorage = (storageName) => {
    const stored = localStorage.getItem(storageName) || '';

    if (!stored) {
        return '';
    }

    return JSON.parse(stored);
};

