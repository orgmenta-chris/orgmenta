import React from "react";
import { View } from "react-native";
import { useTableColumns } from "../../../utils/table";
import ViewJsonMain from "./ViewJsonMain";

const ViewDisplayJson = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const columns = useTableColumns(
    schema.data?.map((x: any) => x.focus_columns.name_singular)
  );

  return (
    <View style={{ flexDirection: "column" }}>
      <ViewJsonMain schema={schema} auxiliary={auxiliary} columns={columns} />
    </View>
  );
};

export default ViewDisplayJson;
