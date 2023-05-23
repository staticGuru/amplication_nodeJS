import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DemoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="data collections" source="dataCollections" />
      </SimpleForm>
    </Edit>
  );
};
