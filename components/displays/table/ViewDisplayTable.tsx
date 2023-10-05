import React from "react";
import { View } from "react-native";
import { useTableColumns } from "./table";
import ViewTableMain from "./ViewTableMain";

const ViewDisplayTable = (props: any) => {
  const schema = props.schema;
  const columns = useTableColumns(
    schema.data?.map(
      (x: { focus_columns: { name_singular: any } }) =>
        x.focus_columns.name_singular
    )
  );
  const auxiliary = props.auxiliary;
  return (
    <View style={{ flexDirection: "column" }}>
      <ViewTableMain columns={columns} data={[1,2,3]} />
    </View>
  );
};

export default ViewDisplayTable;
