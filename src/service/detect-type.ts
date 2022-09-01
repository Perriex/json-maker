export enum DataType {
  Number = 1,
  String,
  Array,
  Object,
  DateTime,
  Boolean,
  Dropdown,
  Multiselect,
  Undefined,
}

export const detectType = (value: any) => {
  const type = typeof value;
  switch (type) {
    case "number":
      return DataType.Number;
    case "string":
      return (isValidDate(value) && DataType.DateTime) || DataType.String;
    case "boolean":
      return DataType.Boolean;
    case "object":
      if (value.dropdown) {
        return DataType.Dropdown;
      }
      if (value.multiselect) {
        return DataType.Multiselect;
      }
      return (
        (value instanceof Date && DataType.DateTime) ||
        (Array.isArray(value) && DataType.Array) ||
        DataType.Object
      );
    default:
      return DataType.Undefined;
  }
};

function isValidDate(value: Date | string | number) {
  const dateWrapper = new Date(value);
  return !isNaN(dateWrapper.getDate());
}
