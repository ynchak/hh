import { Flex, Switch, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { themeMode } from "../../store";

const SwitchTheme = () => {
  const { defaultTheme, update } = themeMode();
  const [theme, updateTheme] = useState(defaultTheme);

  useEffect(() => {
    document.querySelector("body").removeAttribute("class");
    document.querySelector("body").classList.add(theme);
  });

  const isChecked = theme === "dark";
  const handleThemeChange = (e) => {
    const newTheme = e ? "dark" : "light";
    updateTheme(newTheme);
    update({ newTheme });
  };
  return (
    <div className="togle">
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch
            defaultChecked={isChecked}
            onCheckedChange={handleThemeChange}
          />
          Dark Mode
        </Flex>
      </Text>
    </div>
  );
};

export default SwitchTheme;
