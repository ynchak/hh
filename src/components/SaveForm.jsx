import { LockClosedIcon } from "@radix-ui/react-icons";
import {
  Button,
  Card,
  Flex,
  Select,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import { formForSave } from "../../store";
import { useState } from "react";

const variants = {
  category: "ID Категорії",
  param: "ID Параметру",
  vendor: "Назва виробника",
};
const SaveForm = () => {
  const { variant, value, paramValue, update } = formForSave();

  const [option, setOtion] = useState(variant);
  const [input, setInput] = useState(value);
  const [paramInput, setParamInput] = useState(paramValue);

  const handleChange = (value) => {
    setOtion(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option !== "categoty") {
      setParamInput("");
    }
    console.log(paramInput);
    update({ variant: option, value: input, paramValue: paramInput });
  };
  console.log(option);
  return (
    <Card style={{ minHeight: "154.9px" }}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Flex direction="column" gap="2">
          <Select.Root defaultValue={option} onValueChange={handleChange}>
            <Select.Trigger placeholder="Обери варіант" />
            <Select.Content>
              <Select.Group>
                {Object.entries(variants).map(([value, title]) => (
                  <Select.Item key={value} value={value}>
                    {title}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
          <Flex direction="column" gap="3">
            <Tooltip content={variants[option]}>
              <TextField.Input
                placeholder={value}
                onChange={(e) => setInput(e.target.value)}
              />
            </Tooltip>
            {option === "category" && (
              <Tooltip side="bottom" content="Значення">
                <TextField.Input
                  placeholder={paramValue}
                  onChange={(e) => setParamInput(e.target.value)}
                />
              </Tooltip>
            )}
          </Flex>
        </Flex>
        <Flex mt="2" justify="end">
          <Button type="submit" color="green">
            <LockClosedIcon />
            Save
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default SaveForm;
