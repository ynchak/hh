import { LockClosedIcon, ResetIcon } from "@radix-ui/react-icons";
import {
  Button,
  Card,
  Flex,
  Select,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import { formForSave } from "../../store";
import { useEffect, useState } from "react";

const variants = {
  category: "ID Категорії",
  param: "ID Параметру",
  vendor: "Назва виробника",
};
const SaveForm = () => {
  const { variant, value, paramValue, update } = formForSave();

  const [option, setOtion] = useState(variant);
  const [input, setInput] = useState(value);
  const [paramInput, setParamInput] = useState("");

  const handleChange = (value) => {
    setOtion(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (option !== "categoty") {
      setParamInput("");
    }
    update({ variant: option, value: input, paramValue: paramInput });
  };
  useEffect(() => {});
  const clearData = () => {
    setInput("");
    setParamInput("");
    update({ variant: option, value: input, paramValue: paramInput });
  };
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
                  value={paramInput}
                  onChange={(e) => setParamInput(e.target.value)}
                />
              </Tooltip>
            )}
          </Flex>
        </Flex>
        <Flex mt="2" justify="between">
          <Button
            variant="soft"
            type="submit"
            onClick={() => {
              clearData();
            }}
          >
            <ResetIcon />
            Очистити значення
          </Button>
          <Button type="submit" color="green">
            <LockClosedIcon />
            Зберегти
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default SaveForm;
