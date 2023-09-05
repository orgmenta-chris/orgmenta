import React from "react";
import Calendar from "react-calendar";
import { View, Text } from "react-native";
import "react-calendar/dist/Calendar.css";

const CalendarView = (props: { time: any; setTime: any }) => {
  const { time, setTime } = props;

  return (
    <View style={{ paddingVertical: 50, paddingHorizontal: 400 }}>
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        {time.toUTCString()}
      </Text>

      <Calendar onChange={setTime} value={time} />
    </View>
  );
};

export default CalendarView;
