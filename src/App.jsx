import { Container, Flex, Grid, Heading } from "@radix-ui/themes";
import TextAreaForm from "./components/TextAreaForm";
import SaveForm from "./components/SaveForm";

import { textareaFormsStore } from "../store";

function App() {
  const {
    openSourcesTransfer,
    openSourcesUpdate,
    trasformDataTransfer,
    splitColumn,
    createLinks,
  } = textareaFormsStore();

  return (
    <Container>
      <Grid columns="2" gap="3">
        <Flex direction="column" gap="2">
          <Heading as="h2" align="center">
            Перенесення товарів
          </Heading>
          <TextAreaForm {...openSourcesTransfer} />
          <TextAreaForm {...trasformDataTransfer} />
          <TextAreaForm {...splitColumn} />
        </Flex>
        <Flex direction="column" gap="2">
          <Heading as="h2" align="center">
            Оновлення товарів
          </Heading>
          <TextAreaForm {...openSourcesUpdate} />
          <SaveForm />
          <TextAreaForm {...createLinks} />
        </Flex>
      </Grid>
    </Container>
  );
}

export default App;
