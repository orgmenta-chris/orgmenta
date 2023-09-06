import React from "react";
import { Calendar } from "react-native-big-calendar";

const MyCalendar = (props: any) => {
  return <Calendar events={props.myEventsList} height={600} />;
};

export default MyCalendar;
