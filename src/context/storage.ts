const key = "JSON";
export const Storage = {
  get: () => localStorage.getItem(key) || "data invalid",
  set: (data: string) => localStorage.setItem(key, data),
};
const key2 = "NAME";

export const NameStorage = {
  get: () => localStorage.getItem(key2) || "data invalid",
  set: (data: string) => localStorage.setItem(key2, data),
};
