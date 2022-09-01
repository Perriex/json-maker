import { Button, Pane, Heading, StatusIndicator } from "evergreen-ui";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <Pane
      backgroundColor="transparent"
      paddingX={6}
      paddingY={12}
      borderRadius={12}
      width={"100%"}

    >
      <Heading size={900} is={"h1"}>
        This is ezJSON!
      </Heading>
      <Heading size={800} margin={10}>
        How to use?
      </Heading>
      <Pane display={"flex"} flexDirection={"column"} margin={12}>
        <StatusIndicator fontWeight={"bold"} color="success">
          Uplod a json file
        </StatusIndicator>
        <StatusIndicator fontWeight={"bold"} color="warning">
          Complete generated form.
        </StatusIndicator>
        <StatusIndicator fontWeight={"bold"} color="danger">
          Download desired format
        </StatusIndicator>
      </Pane>
      <Link to="/upload">
        <Button margin={16} appearance="primary" fontSize={16}>
          start
        </Button>
      </Link>
    </Pane>
  );
};
