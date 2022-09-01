import { Heading, Pane, Text } from "evergreen-ui";
export const Example = () => {
  return (
    <Pane>
      <Heading size={400}>Example for supported types</Heading>

      <Pane
        background="Types"
        padding={5}
        height={"20vh"}
        overflowY="scroll"
        boxShadow="-1px 6px 1px -3px #f8f8f8"
      >
        <Text textAlign="left">
          <pre>
            {JSON.stringify(
              {
                title: "example of supported types",
                number: 0,
                string: "",
                boolean: false,
                array: [],
                date: "2022/09/09",
                dropdown: { dropdown: [1, 2, 3] },
                multiselect: { multiselect: [1, 2, 3] },
                object: {
                  item1: 0,
                  item2: "",
                  item3: [],
                  item4: {
                    itemInner: 0,
                    itemOuter: "",
                  },
                },
                arrayOfObject: [{ item1: "" }],
              },
              null,
              2
            )}
          </pre>
        </Text>
      </Pane>
      <Heading size={400}>Example for simple form</Heading>

      <Pane
        background="Form"
        padding={5}
        height={"20vh"}
        overflowY="scroll"
        boxShadow="-1px 6px 1px -3px #f8f8f8"
      >
        <Text textAlign="left">
          <pre>
            {JSON.stringify(
              {
                name: "",
                lastName: "",
                age: 0,
                address: "",
                gender: { dropdown: ["male", "female"] },
              },
              null,
              2
            )}
          </pre>
        </Text>
      </Pane>
      <Heading size={400}>Example for nested form</Heading>

      <Pane
        background="Nested"
        padding={5}
        height={"20vh"}
        overflowY="scroll"
        boxShadow="-1px 6px 1px -3px #f8f8f8"
      >
        <Text textAlign="left">
          <pre>
            {JSON.stringify(
              {
                object: {
                  item4: {
                    itemInner: 0,
                    itemOuter: "",
                  },
                  "hardText:D": {
                    level1: {
                      "l1-num": 0,
                      level2: {
                        l2: "",
                        text: true,
                      },
                    },
                  },
                },
              },
              null,
              2
            )}
          </pre>
        </Text>
      </Pane>
      <Heading size={400}>Example for array types</Heading>

      <Pane
        background="Arrays"
        padding={5}
        height={"20vh"}
        overflowY="scroll"
        boxShadow="-1px 6px 1px -3px #f8f8f8"
      >
        <Text textAlign="left">
          <pre>
            {JSON.stringify(
              {
                title: "example of array",
                array1: [0],
                array2: [""],
                array3: [true],
                array4: [[""]],
                array5: ["2022/06/08"],
                arrayOfObject: [
                  {
                    item1: "",
                    item2: 1,
                    item3: true,
                    item4: { dropdown: [1, 2, 3] },
                  },
                ],
              },
              null,
              2
            )}
          </pre>
        </Text>
      </Pane>
    </Pane>
  );
};
