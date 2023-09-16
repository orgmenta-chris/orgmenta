import React from "react";
import { View } from "react-native";
import ViewPodsMain from "./ViewPodsMain";
import { ViewProcessesTabs } from "../../entity/processTabs";

const ViewDisplayPods = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;
  const focus = props.focus;
  const data = "make focus into an array and concat with aux";
  
  return (
    <View style={{ flexDirection: "column" }}>
      <ViewPodsMain items={auxiliary} schema={schema.data}>
        <ViewProcessesTabs />
      </ViewPodsMain>
    </View>
  );
};

export default ViewDisplayPods;
