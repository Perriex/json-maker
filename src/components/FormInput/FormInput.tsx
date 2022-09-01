import {
  Button,
  Heading,
  Pane,
  SelectMenu,
  StatusIndicator,
  Switch,
  TextareaField,
  TextInputField,
} from "evergreen-ui";
import { DataType, detectType } from "../../service/detect-type";
import { FormLayout, FormContext } from "../Form/Form";
import { useState, useEffect, useContext } from "react";
import { Item } from "../../interface/FormItem";
import { travel } from "../../service/form-generator";

export const FormInput = (item: Item) => {
  if (item.type === DataType.Number) {
    return NumberInput;
  }
  if (item.type === DataType.String) {
    return StringInput;
  }
  if (item.type === DataType.DateTime) {
    return DateTimeInput;
  }
  if (item.type === DataType.Boolean) {
    return BooleanInput;
  }
  if (item.type === DataType.Object) {
    return ObjectInput;
  }
  if (item.type === DataType.Array) {
    return ArrayInput;
  }
  if (item.type === DataType.Dropdown) {
    return DropDownInput;
  }
  if (item.type === DataType.Multiselect) {
    return MultiSelectInput;
  }
  return Default;
};

const Default = () => (
  <Heading size={300}>This type is not supported yet.</Heading>
);

const ObjectInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  return (
    <FormLayout
      data={item.defaultValue}
      title={item.label}
      alterSetter={alterSetter}
    />
  );
};

const ArrayInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const [state, setState] = useState<Array<any>>([]);
  const [object, setObject] = useState({});
  const [type, setType] = useState(DataType.Undefined);
  const [value, setValue] = useState(item.defaultValue[0]);
  const formContext = useContext(FormContext);

  useEffect(() => {
    const value = item.defaultValue[0];
    setType(detectType(value));
  }, [item]);

  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);

  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <Heading size={400}>{item.label}</Heading>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        {type === DataType.Object ? (
          <FormLayout
            data={travel(item.defaultValue[0], item.path)}
            title={item.label}
            alterSetter={(e, i) => setObject({ ...object, [i]: e })}
          />
        ) : (
          inputs(value, setValue)[type]
        )}
        <Button
          appearance="primary"
          intent="danger"
          width={"100px"}
          marginY={9}
          onClick={() => {
            if (type === DataType.Object) setState([...state, object]);
            else setState([...state, value]);
            setValue(item.defaultValue[0]);
            setObject({});
          }}
        >
          add to list
        </Button>
        {state.map((i, key) => (
          <StatusIndicator key={key}>
            {JSON.stringify(i)}{" "}
            <Button
              onClick={() => {
                state.splice(key, 1);
                setState(state);
              }}
            >
              delete
            </Button>
          </StatusIndicator>
        ))}
      </Pane>

      {LittleP("This is a Array field.")}
      <Button onClick={() => setState([])}>Reset</Button>
    </Pane>
  );
};

const BooleanInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const formContext = useContext(FormContext);
  const [state, setState] = useState(item.defaultValue);
  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <Heading size={400}>{item.label}</Heading>
      <Switch
        margin={5}
        checked={state}
        defaultChecked={item.defaultValue}
        onChange={(e) => setState(e.target.checked)}
      />
      {LittleP("This is a boolean field.")}
    </Pane>
  );
};

const NumberInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const formContext = useContext(FormContext);
  const [state, setState] = useState(item.defaultValue);
  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <TextInputField
        type="number"
        width={"100%"}
        marginBottom={2}
        textAlign="left"
        label={item.label}
        value={state}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState(Number(e.target.value));
        }}
      />
      {LittleP("This is a number field.")}

      <Button onClick={() => setState(0)}>Reset</Button>
    </Pane>
  );
};

const StringInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const formContext = useContext(FormContext);
  const [state, setState] = useState(item.defaultValue);
  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <TextareaField
        isInvalid={true}
        width={"100%"}
        textAlign="left"
        label={item.label}
        placeholder="type hey ..."
        value={state}
        onChange={(e: any) => setState(e.target.value)}
      />
      {LittleP("This is a string field.")}

      <Button onClick={() => setState("")}>Reset</Button>
    </Pane>
  );
};

const DateTimeInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const [state, setState] = useState(item.defaultValue);
  const formContext = useContext(FormContext);
  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <Heading size={400}>{item.label}</Heading>
      <input
        defaultValue={state}
        type={"datetime-local"}
        value={state}
        onChange={(e: any) => setState(e.target.value)}
      />
      {LittleP("This is a dateTime field.")}
      <Button onClick={() => setState("")}>Reset</Button>
    </Pane>
  );
};

const DropDownInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const formContext = useContext(FormContext);
  const [state, setState] = useState([]);
  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <Heading size={400} marginBottom={5}>
        {item.label}
      </Heading>
      <SelectMenu
        title="Select name"
        options={item.defaultValue.dropdown.map((label: string) => ({
          label,
          value: label,
        }))}
        selected={state}
        hasFilter={false}
        hasTitle={false}
        onSelect={(e: any) => setState(e.value)}
      >
        <Button style={{ margin: 5, textAlign: "left" }}>
          {state || "Select name..."}
        </Button>
      </SelectMenu>
      {LittleP("This is a dropdown field.")}
      <Button onClick={() => setState([])}>Reset</Button>
    </Pane>
  );
};

const MultiSelectInput = (
  item: Item,
  alterSetter?: (arg0: any, arg2: string) => void
) => {
  const formContext = useContext(FormContext);
  const [state, setState] = useState<Array<any>>([]);
  useEffect(() => {
    if (alterSetter) alterSetter(state, item.label);
    else formContext?.set(item.path, state);
  }, [state]);
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width={"100%"}
      textAlign="left"
      justifyContent={"space-between"}
      marginY={5}
    >
      <Heading size={400} marginBottom={5}>
        {item.label}
      </Heading>
      <SelectMenu
        isMultiSelect
        title={item.label}
        options={item.defaultValue.multiselect.map((label: string) => ({
          label,
          value: label,
        }))}
        onSelect={(e) => {
          const index = state?.findIndex((object: any) => {
            return object?.label === e?.label;
          });

          if (Array.isArray(state)) {
            if (index >= 0) {
              setState(state.filter((_item: any, i: any) => i !== index));
            } else {
              setState([...state, e]);
            }
          } else {
            setState([e]);
          }
        }}
      >
        <Button>{"Select multiple..."}</Button>
      </SelectMenu>
      {LittleP("This is a multiselect field.")}
      {LittleP(
        "Selected:" +
          (state.length > 0
            ? state.map((i: any) => i.label).join(", ")
            : "nothing")
      )}
      <Button onClick={() => setState([])}>Reset</Button>
    </Pane>
  );
};

const LittleP = (text: string) => {
  return (
    <p
      className="ub-fnt-fam_b77syt ub-color_696f8c ub-mt_6px ub-mb_0px ub-fnt-sze_12px ub-f-wght_400 ub-ln-ht_18px ub-ltr-spc_0 ub-box-szg_border-box"
      id="TextareaField-6__hint"
    >
      {text}
    </p>
  );
};

const inputs = (value: any, setValue: any) => [
  null,
  <div key={"Number"}>
    <TextInputField
      hint={"Number"}
      width={"100%"}
      value={value}
      textAlign="left"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
      }}
    />
  </div>,
  <div key={"String"}>
    <TextareaField
      hint={"String"}
      width={"100%"}
      value={value}
      textAlign="left"
      placeholder="type hey ..."
      onChange={(e: any) => setValue(e.target.value)}
    />
  </div>,
  <div key={"Array"}>
    <Default />
  </div>,
  <div key={"Object"}>
    <Default />
  </div>,
  <div key={"DateTime"}>
    <input
      value={value}
      type={"datetime-local"}
      style={{ width: "100%", margin: 5 }}
      onChange={(e: any) => setValue(e.target.value)}
    />
  </div>,
  <div key={"Boolean"}>
    <Switch
      margin={5}
      checked={value}
      onChange={(e) => setValue(e.target.checked)}
    />
  </div>,
  <div key={"Dropdown"}>
    <Default />
  </div>,
  <div key={"Multiselect"}>
    <Default />
  </div>,
  <div key={"Undefined"}>
    <Default />
  </div>,
];
