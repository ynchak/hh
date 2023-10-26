import {
  BorderSplitIcon,
  Link1Icon,
  OpenInNewWindowIcon,
  TransformIcon,
} from "@radix-ui/react-icons";
import {
  Button,
  Card,
  Flex,
  RadioGroup,
  TextArea,
  Text,
} from "@radix-ui/themes";
import { useState } from "react";
import PropTypes from "prop-types";

const icon = {
  open: <OpenInNewWindowIcon />,
  transform: <TransformIcon />,
  link: <Link1Icon />,
  split: <BorderSplitIcon />,
};

const TextAreaForm = ({
  action,
  btnTitle,
  btnIcon,
  btnColor,
  placeholder,
  radioGroup,
}) => {
  const [radio, setRadio] = useState(radioGroup?.defaultValue);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action(value, radio);
    setValue("");
  };
  const handleRadio = (e) => {
    setRadio(e);
  };

  const RadioButtons = () => {
    const { values } = radioGroup;
    return (
      <RadioGroup.Root defaultValue={radio} onValueChange={handleRadio}>
        <Flex gap="4" direction="row">
          {values.map(({ status, value }) => (
            <Text key={status} as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value={status} /> {value}
              </Flex>
            </Text>
          ))}
        </Flex>
      </RadioGroup.Root>
    );
  };
  return (
    <Card>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextArea
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Flex mt="2" justify="between">
          {radioGroup ? <RadioButtons /> : <div></div>}
          <Button color={btnColor}>
            {icon[btnIcon]}
            {btnTitle}
          </Button>
        </Flex>
      </form>
    </Card>
  );
};
TextAreaForm.propTypes = {
  placeholder: PropTypes.string,
  btnTitle: PropTypes.string,
  btnColor: PropTypes.string,
  btnIcon: PropTypes.string,
  action: PropTypes.func,
  radioGroup: PropTypes.object,
};
export default TextAreaForm;
