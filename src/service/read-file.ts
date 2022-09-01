import { NameStorage } from "../context/storage";

export function openFile(files: any[], action: (...args: any[]) => void) {
  const reader = new FileReader();
  NameStorage.set(files[0].name);
  reader.onload = (e) => onReaderLoad(e, action);
  reader.readAsText(files[0]);
}

export function onReaderLoad(event: any, action: (...args: any[]) => void) {
  const obj = JSON.parse(event.target.result);
  action(obj);
}
