import { useWindowDimensions } from "./window";
import { ViewModalContainer } from "./modal";
import {
  Calendar,
  CalendarProps,
  CalendarEvent,
  CalendarHeaderForMonthViewProps,
  CalendarHeaderProps,
  CalendarTouchableOpacityProps,
  DateRangeHandler,
  EventCellStyle,
  ICalendarEventBase,
  Mode,
  EventRenderer,
  WeekNum,
} from "react-native-big-calendar";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutChangeEvent,
  Modal,
  ViewStyle,
  Button,
} from "react-native";
import { useState, ReactElement } from "react";

// CONTAINER

// Compilation of calendar components
export const ViewCalendarContainer = ({ events }: any) => {
  events = examplesCalendarEvent; // testing
  const windowDimensions = useWindowDimensions();
  const ControlPanel = windowDimensions.width < 768 ? ViewModalContainer : View; // Note for C as reminder: maybe use this instead of the conditional below, if props play nice with the two types. OR, make ViewModalContainer have an inline type.
  return (
    <View
      key={"container"}
      style={{ height: "100%", width: "100%", flexDirection: "row" }}
    >
      {windowDimensions.width < 768 ? (
        <ViewModalContainer>
          <ViewCalendarButtons />
          <View style={{ height: 200, margin: 10 }}>
            <ViewCalendarPicker />
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <ViewCalendarCalendars />
          </View>
        </ViewModalContainer>
      ) : (
        <View key={"left-panel"} style={{ flex: 1, width: 100, margin: 20 }}>
          <ViewCalendarButtons />
          <View style={{ height: 200, margin: 10 }}>
            <ViewCalendarPicker />
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <ViewCalendarCalendars />
          </View>
        </View>
      )}
      <View
        key={"right-panel"}
        style={{ flex: 4, margin: 20, flexDirection: "column" }}
        // onLayout={onLayout}
      >
        <ViewCalendarMain />
        {/* <ViewCalendarScheduler height={600} mode={"month"} events={events} /> */}
      </View>
    </View>
  );
};

// MAIN

// Event Scheduler
export const ViewCalendarMain = (props: any) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  interface CalendarProps<T extends ICalendarEventBase> {
    events: T[];
    height: number;
    overlapOffset?: number;
    hourRowHeight?: number;
    ampm?: boolean;
    date?: Date;
    eventCellStyle?: EventCellStyle<T>;
    calendarContainerStyle?: ViewStyle;
    headerContainerStyle?: ViewStyle;
    bodyContainerStyle?: ViewStyle;
    renderEvent?: (
      event: T,
      touchableOpacityProps: CalendarTouchableOpacityProps
    ) => ReactElement | null;
    renderHeader?: React.ComponentType<CalendarHeaderProps<T> & { mode: Mode }>;
    renderHeaderForMonthView?: React.ComponentType<CalendarHeaderForMonthViewProps>;
    locale?: string;
    hideNowIndicator?: boolean;
    mode?: Mode;
    scrollOffsetMinutes?: number;
    showTime?: boolean;
    swipeEnabled?: boolean;
    weekStartsOn?: WeekNum;
    weekEndsOn?: WeekNum;
    onChangeDate?: DateRangeHandler;
    onPressCell?: (date: Date) => void;
    onPressDateHeader?: (date: Date) => void;
    onPressEvent?: (event: T) => void;
    eventMinHeightForMonthView?: number;
    activeDate?: Date;
    moreLabel?: string;
    showAdjacentMonths?: boolean;
    sortedMonthView?: boolean;
  }
  const [mode, setMode] = useState("month");
  const events = examplesCalendarEvent; // replace with auxiliary once start and end/finish is on there
  const calendarProps: CalendarProps<ICalendarEventBase> = {
    events,
    height: 400,
    overlapOffset: 10, // Set overlap offset to 10 pixels
    hourRowHeight: 60, // Set hour row height to 60 pixels
    ampm: true, // Display time in AM/PM format
    // date: new Date(2023, 8, 1), // Set the initial date to September 1st, 2023
    eventCellStyle: () => {
      // Custom event cell style function
      return {
        backgroundColor: "cyan",
        borderColor: "black",
      };
    },
    calendarContainerStyle: {
      // Custom styles for the calendar container
      backgroundColor: "lightgray",
    },
    headerContainerStyle: {
      // Custom styles for the header container
      backgroundColor: "white",
    },
    bodyContainerStyle: {
      // Custom styles for the body container
      backgroundColor: "white",
    },
    renderEvent: (event, touchableOpacityProps) => {
      // Custom render for events
      return (
        <TouchableOpacity {...touchableOpacityProps}>
          <Text>{event.title}</Text>
          <Text>{`${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}`}</Text>
        </TouchableOpacity>
      );
    },
    // renderHeader: (props) => {
    //   // Custom render for header
    //   return <CalendarHeader {...props} />;
    // },
    // renderHeaderForMonthView: (props) => {
    //   // Custom render for month view header
    //   return <CalendarHeaderForMonthView {...props} />;
    // },
    locale: "en-US", // Set the locale to English (United States)
    hideNowIndicator: false, // Show the "now" indicator
    // @ts-ignore
    mode: mode, // Set the initial mode to month view
    scrollOffsetMinutes: 30, // Scroll calendar by 30 minutes
    showTime: true, // Show time on events
    swipeEnabled: true, // Enable swipe navigation
    weekStartsOn: 0, // Start the week on Sunday
    weekEndsOn: 6, // End the week on Saturday
    onChangeDate: (dateRange: any) => {
      // Handle date range change
      // console.info("Date range changed:", dateRange);
    },
    onPressCell: (date) => {
      // Handle cell press
      // console.info("Cell pressed:", date);
    },
    onPressDateHeader: (date) => {
      // Handle date header press
      // console.info("Date header pressed:", date);
    },
    onPressEvent: (event) => {
      // Handle event click
      // console.info("Event clicked:", event);
    },
    eventMinHeightForMonthView: 40, // Set the minimum event height for month view
    activeDate: currentDate,
    moreLabel: "More", // Customize the "more" label for overlapping events
    showAdjacentMonths: true, // Show adjacent months in month view
    sortedMonthView: false, // Disable sorted month view
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          // flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          backgroundColor: "red",
          gap: 5,
          marginBottom: 10,
        }}
      >
        <Button onPress={() => setMode("month")} title="Month" />
        <Button onPress={() => setMode("week")} title="Week" />
        <Button onPress={() => setMode("3days")} title="3 Days" />
        <Button onPress={() => setMode("day")} title="Day" />
        <ViewCalendarButtons />
      </View>
      <View style={{ flex: 1, marginVertical: 10 }}>
        {
          // @ts-ignore
          <Calendar {...calendarProps} />
        }
      </View>
    </View>
  );
};

// Buttons (left and right buttons to move month/week/day forward/backs)

export const ViewCalendarButtons = ({ onChangeDate }: any) => {
  // on change date will be passed in from the calendar
  const [currentDate, setCurrentDate] = useState(new Date());
  const goToLeft = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };
  const goToRight = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  return (
    <View
      key={"container"}
      style={{ flexDirection: "row", gap: 5, marginLeft: 10 }}
    >
      <Button disabled title=" < " onPress={goToLeft} />
      <Button disabled title=" > " onPress={goToRight} />
    </View>
  );
};

// PICKER

// A month picker to select a date
export const ViewCalendarPicker = () => {
  return (
    <View style={{ height: 200, width: 200 }}>
      <ViewCalendarScheduler
        headerComponent={<></>}
        // renderHeader={<></>}
        height={200}
        mode={"month"}
        events={[]}
      />
    </View>
  );
};

// CALENDARS

// List of calendars
export const ViewCalendarCalendars = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Text>list available calendars here</Text>
    </View>
  );
};

// SCHEDULER

export const ViewCalendarScheduler = Calendar;

export type TypeCalendarScheduler = CalendarProps<TypeCalendarEvent>;

// HEADER

// Main
export type TypeCalendarHeader = CalendarHeaderProps<TypeCalendarEvent>; // add any others in here

// Month
export type TypeCalendarHeadermonth = CalendarHeaderForMonthViewProps;

// EVENT

export const ViewCalendarEvent = CalendarEvent;

// export const ViewCalendarEventcustom = () => {
//   return (
//     <TouchableOpacity {...touchableOpacityProps}>
//       <Text>{event.title}</Text>
//       <Text>{`${event.start.toLocaleTimeString()} - ${event.end.toLocaleTimeString()}`}</Text>
//     </TouchableOpacity>
//   );
// };

export type TypeCalendarEvent = ICalendarEventBase;

export const ViewCalendarEventexample = () => {
  return (
    <ViewCalendarEvent
      event={examplesCalendarEvent[0]}
      onPressEvent={() => {}}
      eventCellStyle={{}} // style props
      showTime //boolean
      eventCount={1}
      eventOrder={1} // if multiple events in the same hour/day/week box, prioritise it as necessary
      overlapOffset={10} //
      // renderEvent={componentfunctiongoeshere}
      ampm //boolean
    />
  );
};

export const examplesCalendarEvent: TypeCalendarEvent[] = [
  {
    title: "Meeting 1",
    start: new Date(2023, 8, 1, 10, 0), // September 1st, 10:00 AM
    end: new Date(2023, 8, 1, 11, 0), // September 1st, 11:00 AM
  },
  {
    title: "Conference",
    start: new Date(2023, 8, 5, 14, 30), // September 5th, 2:30 PM
    end: new Date(2023, 8, 5, 17, 0), // September 5th, 5:00 PM
  },
  {
    title: "Lunch",
    start: new Date(2023, 8, 10, 12, 0), // September 10th, 12:00 PM
    end: new Date(2023, 8, 10, 13, 0), // September 10th, 1:00 PM
  },
  {
    title: "Team Meeting",
    start: new Date(2023, 8, 15, 9, 30), // September 15th, 9:30 AM
    end: new Date(2023, 8, 15, 10, 30), // September 15th, 10:30 AM
  },
  {
    title: "Workshop",
    start: new Date(2023, 8, 20, 14, 0), // September 20th, 2:00 PM
    end: new Date(2023, 8, 20, 17, 0), // September 20th, 5:00 PM
  },
  {
    title: "Coffee Break",
    start: new Date(2023, 8, 25, 15, 0), // September 25th, 3:00 PM
    end: new Date(2023, 8, 25, 15, 30), // September 25th, 3:30 PM
  },
  {
    title: "Training",
    start: new Date(2023, 8, 3, 9, 0), // September 3rd, 9:00 AM
    end: new Date(2023, 8, 3, 12, 0), // September 3rd, 12:00 PM
  },
  {
    title: "Project Review",
    start: new Date(2023, 8, 8, 13, 0), // September 8th, 1:00 PM
    end: new Date(2023, 8, 8, 14, 30), // September 8th, 2:30 PM
  },
  {
    title: "Client Meeting",
    start: new Date(2023, 8, 12, 11, 0), // September 12th, 11:00 AM
    end: new Date(2023, 8, 12, 12, 0), // September 12th, 12:00 PM
  },
  {
    title: "Team Building",
    start: new Date(2023, 8, 17, 10, 0), // September 17th, 10:00 AM
    end: new Date(2023, 8, 17, 16, 0), // September 17th, 4:00 PM
  },
  {
    title: "Lunch Meeting",
    start: new Date(2023, 8, 22, 12, 30), // September 22nd, 12:30 PM
    end: new Date(2023, 8, 22, 13, 30), // September 22nd, 1:30 PM
  },
  {
    title: "Training Session",
    start: new Date(2023, 8, 6, 15, 0), // September 6th, 3:00 PM
    end: new Date(2023, 8, 6, 17, 0), // September 6th, 5:00 PM
  },
  {
    title: "Client Presentation",
    start: new Date(2023, 8, 13, 14, 0), // September 13th, 2:00 PM
    end: new Date(2023, 8, 13, 16, 0), // September 13th, 4:00 PM
  },
  {
    title: "Project Kickoff",
    start: new Date(2023, 8, 27, 9, 0), // September 27th, 9:00 AM
    end: new Date(2023, 8, 27, 10, 0), // September 27th, 10:00 AM
  },
  {
    title: "Team Lunch",
    start: new Date(2023, 9, 30, 12, 0), // September 30th, 12:00 PM
    end: new Date(2023, 9, 30, 13, 0), // September 30th, 1:00 PM
  },
];
