import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DemoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="data collections" source="dataCollections" />
      </SimpleForm>
    </Create>
  );
};
