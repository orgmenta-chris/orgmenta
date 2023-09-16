import React, { useState, ReactElement, useMemo } from "react";
import { View, Pressable, Text } from "react-native";
import { Calendar } from "react-native-big-calendar";
import MyCalendar from "./calendar";
import "react-calendar/dist/Calendar.css";

const ViewDisplayCalendar = (props: any) => {
  const schema = props.schema;
  const auxiliary = props.auxiliary;

  const [activeTab, setActiveTab] = useState(0);
  const [value, onChange] = useState(new Date());

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  interface ICalendarEventBase {
    start: Date;
    end: Date;
    title: string;
    children?: ReactElement | null;
  }

  const eventNotes = useMemo(
    () => (
      <View style={{ marginTop: 3 }}>
        <Text style={{ fontSize: 10, color: "white" }}>
          {" "}
          Phone number: 555-123-4567{" "}
        </Text>
        <Text style={{ fontSize: 10, color: "white" }}>
          {" "}
          Arrive 15 minutes early{" "}
        </Text>
      </View>
    ),
    []
  );

  const events: Array<ICalendarEventBase & { color?: string }> = [
    {
      title: "Team Meeting",
      start: new Date(2023, 2, 15, 10, 0), // March 15, 2023, 10:00 AM
      end: new Date(2023, 2, 15, 11, 0), // March 15, 2023, 11:00 AM
      children: eventNotes,
    },
    {
      title: "Project Review",
      start: new Date(2023, 2, 17, 14, 30), // March 17, 2023, 2:30 PM
      end: new Date(2023, 2, 17, 16, 0), // March 17, 2023, 4:00 PM
      children: eventNotes,
    },
    {
      title: "Conference Call",
      start: new Date(2023, 2, 20, 11, 0), // March 20, 2023, 11:00 AM
      end: new Date(2023, 2, 20, 12, 0), // March 20, 2023, 12:00 PM
      children: eventNotes,
    },
    {
      title: "Team Building Workshop",
      start: new Date(2023, 2, 22, 9, 30), // March 22, 2023, 9:30 AM
      end: new Date(2023, 2, 22, 12, 30), // March 22, 2023, 12:30 PM
      children: eventNotes,
    },
    {
      title: "Product Demo",
      start: new Date(2023, 2, 25, 15, 0), // March 25, 2023, 3:00 PM
      end: new Date(2023, 2, 25, 16, 0), // March 25, 2023, 4:00 PM
      children: eventNotes,
    },
    // Add more random events as needed
  ];

  const tabs = [
    { tab: "View Calendar", component: <MyCalendar myEventsList={events} /> },
    {
      tab: "Add events",
      component: <Calendar onChange={onChange} value={value} />,
    },
  ];

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          marginHorizontal: 12,
        }}
      >
        {tabs.map((content, index) => (
          <Pressable
            key={index}
            style={{
              padding: 10,
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              borderColor: activeTab === index ? "black" : "transparent",
              backgroundColor:
                activeTab === index ? "lightblue" : "transparent",
            }}
            onPress={() => handleTabPress(index)}
          >
            <Text style={{ fontWeight: "bold" }}>{content.tab}</Text>
          </Pressable>
        ))}
      </View>

      <View>{tabs[activeTab].component}</View>
    </>
  );
};

export default ViewDisplayCalendar;
