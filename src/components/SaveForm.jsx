import { LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Select, TextField } from "@radix-ui/themes";
const variants = [
  { value: "category", name: "ID Категорії" },
  { value: "param", name: "ID Параметру" },
  { value: "vendor", name: "Назва виробника" },
];
const SaveForm = () => {
  return (
    <Card style={{ minHeight: "154.9px" }}>
      <Flex direction="column" gap="2">
        <Select.Root defaultValue="">
          <Select.Trigger placeholder="Обери варіант" />
          <Select.Content>
            <Select.Group>
              {variants.map(({ name, value }) => (
                <Select.Item key={name} value={value}>
                  {name}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
        <TextField.Root>
          <TextField.Input placeholder="" />
        </TextField.Root>
      </Flex>
      <Flex mt="2" justify="end">
        <Button color="green">
          <LockClosedIcon />
          Save
        </Button>
      </Flex>
    </Card>
  );
};

export default SaveForm;
