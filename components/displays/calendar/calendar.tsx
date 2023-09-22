import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventInput } from "@fullcalendar/core";

const MyCalendar = (props: any) => {
  const events: EventInput[] = [
    {
      // id: 1,
      title: "Team Meeting",
      start: new Date(2023, 8, 15, 10, 0), // March 15, 2023, 10:00 AM
      end: new Date(2023, 8, 15, 11, 0), // March 15, 2023, 11:00 AM
    },
    {
      // id: 2,
      title: "Project Review",
      start: new Date(2023, 8, 17, 14, 30), // March 17, 2023, 8:30 PM
      end: new Date(2023, 8, 17, 16, 0), // March 17, 2023, 4:00 PM
    },
    {
      // id: 3,
      title: "Conference Call",
      start: new Date(2023, 8, 20, 11, 0), // March 20, 2023, 11:00 AM
      end: new Date(2023, 8, 20, 12, 0), // March 20, 2023, 12:00 PM
    },
    {
      // id: 4,
      title: "Team Building Workshop",
      start: new Date(2023, 8, 22, 9, 30), // March 22, 2023, 9:30 AM
      end: new Date(2023, 8, 22, 12, 30), // March 22, 2023, 12:30 PM
    },
    {
      // id: 5,
      title: "Product Demo",
      start: new Date(2023, 8, 25, 15, 0), // March 25, 2023, 3:00 PM
      end: new Date(2023, 8, 25, 16, 0), // March 25, 2023, 4:00 PM
    },
    {
      // id: 6,
      title: "Product Demo Two",
      start: new Date(2023, 8, 25, 15, 0), // March 25, 2023, 3:00 PM
      end: new Date(2023, 8, 25, 16, 0), // March 25, 2023, 4:00 PM
    },
    // Add more random events as needed
  ];

  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={events}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      eventContent={renderEventContent}
    />
  );
};

export default MyCalendar;
