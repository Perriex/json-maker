import { Heading, Pane, Text } from "evergreen-ui";

export const Website = () => {
  const websites = [
    { label: "ProbStat", link: "https://github.com/OpenBookshelf/ProbStat" },
  ];
  return (
    <Pane>
      <Heading size={600}>Websites made with this App.</Heading>
      {websites.map((item, id) => (
        <a key={id} href={item.link} target="_blank" rel="noreferrer">
          🌟<Text>{item.label}</Text>
        </a>
      ))}
    </Pane>
  );
};
