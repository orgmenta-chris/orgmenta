import  { useState, ReactElement, useMemo } from "react";
import { View, Pressable, Text } from "react-native";
import MyCalendar from "./calendar";

const ViewDisplayCalendar = (props: any) => {
  return (
    <View style={{ width: "60%", marginHorizontal: "auto", paddingBottom: 40 }}>
      <MyCalendar />
    </View>
  );
};

export default ViewDisplayCalendar;
