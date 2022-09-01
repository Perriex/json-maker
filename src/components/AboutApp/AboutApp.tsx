import { Pane, Heading, Button } from "evergreen-ui";
export const AboutApp = () => {
  return (
    <Pane
      backgroundColor="transparent"
      paddingX={6}
      paddingY={12}
      borderRadius={12}
      width={"100%"}
    >
      <Heading marginY={8} size={600}>
        Hey! I am glad you are here.
      </Heading>
      <Heading marginY={8} size={400}>
        This web was developed by Parna Asadi.
      </Heading>
      <Heading marginY={8} size={400}>
        The purpose was to create an easy json form ui for none skilled people.
      </Heading>
      <Heading marginY={8} size={400}>
        Hope this app saves your time {" ;)"}
      </Heading>
      <a href="" target={"_blank"}>
        <Button appearance="primary" intent="info" padding={5}>
          Give 🌟
        </Button>
      </a>
    </Pane>
  );
};
