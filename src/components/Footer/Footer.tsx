import { Tab, TabNavigation } from "evergreen-ui";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [index, setIndex] = useState("");
  const location = useLocation();
  useEffect(() => {
    setIndex(location.pathname);
  }, [location]);

  return (
    <TabNavigation
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {[
        { label: "Home", link: "/" },
        { label: "Upload", link: "/json-maker/upload" },
        { label: "Download", link: "/json-maker/form" },
        { label: "About", link: "/json-maker/anything" },
        { label: "Examples", link: "/json-maker/example" },
        { label: "Websites", link: "/json-maker/website" },
      ].map((tab) => (
        <Tab
          key={tab.label}
          is={Link}
          to={tab.link}
          id={tab.label}
          isSelected={index === tab.link}
        >
          {tab.label}
        </Tab>
      ))}
    </TabNavigation>
  );
};
