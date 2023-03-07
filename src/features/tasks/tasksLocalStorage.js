const localStorageKay = "tasks";

export const saveTasksInLocalStorage = tasks =>
    localStorage.setItem(localStorageKay, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKay)) || [];