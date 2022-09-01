import { Item } from "../interface/FormItem";
import { DataType, detectType } from "./detect-type";
import { onDownload } from "./download-json";

export function submit(form: object) {
  var complete = {};

  Object.entries(form).map(([key, value]) => {
    var schema = complete;
    const pList = key.split(".");
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = pList[i];
      if (!schema[elem]) schema[elem] = {};
      schema = schema[elem];
    }

    schema[pList[len - 1]] = value;
  });

  onDownload(complete, null);
}

export const travel = (obj: object, parent: string | null): Array<Item> => {
  return Object.entries(obj).map(([key, value]) => {
    let temp = value;
    const path = parent ? parent + "." + key : key;
    if (detectType(value) === DataType.Object) {
      temp = travel(value, path);
    }
    return {
      label: key.replace(".", "_"),
      defaultValue: temp,
      type: detectType(value),
      path: path,
    };
  });
};
