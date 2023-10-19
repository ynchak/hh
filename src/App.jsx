import { Container, Flex, Grid, Heading } from "@radix-ui/themes";
import TextAreaForm from "./components/TextAreaForm";

function App() {
  const data = {
    btnIcon: "open",
    btnTitle: "Відкрити джерела",
    btnColor: "indigo",
    placeholder: "Введи стовпчики ID",
  };

  return (
    <Container>
      <Grid columns="2" gap="3">
        <Flex direction="column" gap="2">
          <Heading as="h2" align="center">
            Перенесення товарів
          </Heading>
          <TextAreaForm {...data} />
        </Flex>
        <Flex direction="column" gap="2">
          <Heading as="h2" align="center">
            Оновлення товарів
          </Heading>
          <TextAreaForm />
        </Flex>
      </Grid>
    </Container>
  );
}

export default App;
