import React from "react";
import { ScrollView, View, Text } from "react-native";

const ViewFormMain = ({ data }: any) => {
  return (
    <ScrollView>
      {/* <Text>{data && JSON.stringify(data)}</Text> */}
      {/* {data?.map((x,i)=><View key={i}>
            <Text>{x.display_singular}</Text>
          </View>)} */}
      {data?.map((x, i) => (
        <View key={i} style={{ margin: 4, flexDirection: "row" }}>
          <Text style={{ flex: 1, fontWeight: "600" }}>
            {x?.display_singular}
          </Text>
          <Text style={{ flex: 1 }}>{x?.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ViewFormMain;
