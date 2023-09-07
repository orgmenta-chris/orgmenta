import React from "react";
import { View } from "react-native";
import { ViewListMain } from "../../../utils/list";
import { useTableColumns } from "../../../utils/table";

const ViewDisplayList = (props: any) => {
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
      <ViewListMain columns={columns} data={auxiliary.data} />
    </View>
  );
};

export default ViewDisplayList;
