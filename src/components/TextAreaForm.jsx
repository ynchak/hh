import {
  BorderSplitIcon,
  Link1Icon,
  OpenInNewWindowIcon,
  TransformIcon,
} from "@radix-ui/react-icons";
import { Button, Card, Flex, TextArea } from "@radix-ui/themes";

const icon = {
  open: <OpenInNewWindowIcon />,
  transform: <TransformIcon />,
  link: <Link1Icon />,
  split: <BorderSplitIcon />,
};

const TextAreaForm = ({ btnTitle, btnIcon, btnColor, placeholder }) => {
  return (
    <Card>
      <TextArea rows="4" placeholder={placeholder} />
      <Flex mt="2" justify="end">
        <Button color={btnColor}>
          {icon[btnIcon]}
          {btnTitle}
        </Button>
      </Flex>
    </Card>
  );
};

export default TextAreaForm;
