import { Button, Pane, Heading, FilePicker, Dialog } from "evergreen-ui";
import { openFile } from "../../service/read-file";
import { useState, useEffect } from "react";
import { Storage } from "../../context/storage";
import { Link } from "react-router-dom";

export const Main = () => {
  const [state, setState] = useState({ welcome: "Github: Perriex" });
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    Storage.set(JSON.stringify(state));
  }, [state]);

  return (
    <Pane
      backgroundColor="transparent"
      paddingX={6}
      paddingY={12}
      borderRadius={12}
      width={"100%"}
    >
      <Heading marginY={8} size={600}>
        Upload JSON.
      </Heading>
      <FilePicker
        width={250}
        onChange={(files: any) => openFile(files, setState)}
        placeholder="Select the file here!"
      />
      <Button
        margin={16}
        appearance="primary"
        intent={
          JSON.stringify(state) ===
          JSON.stringify({ welcome: "Github: Perriex" })
            ? "danger"
            : "success"
        }
        fontSize={16}
        onClick={() => setIsShown(true)}
      >
        View
      </Button>
      <Link to="/form">
        <Button
          margin={16}
          disabled={
            JSON.stringify(state) ===
            JSON.stringify({ welcome: "Github: Perriex" })
          }
          appearance={"primary"}
          fontSize={16}
        >
          Complete
        </Button>
      </Link>
      <Dialog
        isShown={isShown}
        title="View"
        onCloseComplete={() => setIsShown(false)}
        hasFooter={false}
      >
        <Heading size={300} color={"black"}>
          <pre>{`${JSON.stringify(state, null, 2)}`}</pre>
        </Heading>{" "}
      </Dialog>
    </Pane>
  );
};
