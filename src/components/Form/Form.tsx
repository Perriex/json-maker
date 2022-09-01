import { Pane, Heading, TabNavigation, Button } from "evergreen-ui";
import { useState, useEffect, createContext } from "react";
import { NameStorage, Storage } from "../../context/storage";
import { submit, travel } from "../../service/form-generator.js";
import { FormInput } from "../FormInput/FormInput";
import { AppContextInterface } from "../../interface/FormContext";
import { Item } from "../../interface/FormItem";

export const FormContext = createContext<AppContextInterface | null>(null);

export const Form = () => {
  const [data, setData] = useState<Item[]>([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    const entry = JSON.parse(Storage.get());
    setData(travel(entry, null));
  }, []);

  function set(path: string, value: any) {
    setForm({ ...form, [path]: value });
  }

  return (
    <FormContext.Provider value={{ set }}>
      <SubmitHeader submit={() => submit(form)} />
      <Pane
        backgroundColor="transparent"
        paddingX={10}
        paddingY={12}
        borderRadius={12}
        maxHeight={"85vh"}
        width={"85vw"}
        overflow={"auto"}
      >
        <FormLayout data={data} title={NameStorage.get()} />
      </Pane>
    </FormContext.Provider>
  );
};

export const FormLayout = (props: {
  title: string;
  data: Item[];
  alterSetter?: (arg0: any, arg2: string) => void;
}) => {
  function get_random_color() {
    var r = function () {
      return Math.floor(Math.random() * 256);
    };
    return "rgba(" + r() + "," + r() + "," + r() + ",.2)";
  }
  return (
    <Pane backgroundColor={get_random_color()} padding="2px">
      <Heading size={600}>{props.title ?? ""}</Heading>
      {props.data.map((item: Item, index: number) => (
        <div
          key={index}
          style={{
            padding: 2,
            boxShadow: "-1px 6px 1px -3px #f8f8f8",
          }}
        >
          {FormInput(item)(item, props.alterSetter)}
        </div>
      ))}
    </Pane>
  );
};

export const SubmitHeader = (props: any) => {
  return (
    <TabNavigation
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Button
        appearance="primary"
        intent="info"
        width="100%"
        onClick={props.submit}
      >
        Submit
      </Button>
    </TabNavigation>
  );
};
