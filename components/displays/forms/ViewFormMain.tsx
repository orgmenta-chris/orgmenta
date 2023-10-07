import { ScrollView, View, Text } from "react-native";

export const ViewFormContainer = ({ data }: any) => {
  return (
    <ScrollView>
      {data?.map((x:any, i:number) => (
        <View key={i} style={{ margin: 5, flexDirection: "row" }}>
          <Text style={{ flex: 1, fontWeight: "600" }}>
            {x?.display_singular}
          </Text>
          <Text style={{ flex: 1 }}>{x?.value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};
