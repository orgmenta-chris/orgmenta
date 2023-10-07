import { ViewContainerStatic, ViewContainerScroll } from "./container";

import Timeline, { TimelineProps } from "react-native-timeline-flatlist";

// CONTAINER
export const ViewTimelineContainer = (props: any) => {
  const data = [
    {
      time: "09:00",
      title: "TimelineEvent 1",
      description: "Event 1 Description",
    },
    {
      time: "10:45",
      title: "TimelineEvent 2",
      description: "Event 2 Description",
    },
    {
      time: "12:00",
      title: "TimelineEvent 3",
      description: "Event 3 Description",
    },
    {
      time: "14:00",
      title: "TimelineEvent 4",
      description: "Event 4 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 5",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 6",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 7",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 8",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 9",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 10",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 11",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 12",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 13",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 14",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 15",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 16",
      description: "Event 5 Description",
    },
    {
      time: "16:30",
      title: "TimelineEvent 17",
      description: "Event 5 Description",
    },
  ];
  return (
    <ViewContainerStatic style={{ height: "100%" }}>
      <ViewTimelineMain
        data={data}
        style={{}}
        descriptionStyle={{ color: "white" }}
        // isUsingFlatlist={true}
        // circleSize={20}
        // circleColor='rgb(45,156,219)'
        // lineColor='rgb(45,156,219)'
        // timeContainerStyle={{minWidth:52, marginTop: -5}}
        // timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
      />
    </ViewContainerStatic>
  );
};



// MAIN 

export const ViewTimelineMain = Timeline;

export type TypeTimelineMain = TimelineProps;

