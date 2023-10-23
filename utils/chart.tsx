// https://github.com/JesperLekland/react-native-svg-charts/blob/dev/README.md#areachart
// Todo: xaxis, yaxis
// Todo: progressline
// Todo: pass in data dynamically instead of static/hardcoded
// Todo: Switcher
// Todo: Save to pods.
// Todo: Props.
// Todo: Further chart types (see BrightGauge, RW etc.)
// Todo: Funnel chart (e.g. https://www.izenda.com/docs/ui/doc_report_designer_chart.html#funnel-chart)
// Todo: Tree map chart (e.g. https://www.izenda.com/docs/ui/doc_report_designer_chart.html#tree-map-chart)
// Todo: Heat map chart (e.g. https://www.izenda.com/docs/ui/doc_report_designer_chart.html#heat-map-chart)
// Todo: Heat calendar chart (https://github.com/ayooby/react-native-calendar-heatmap)
// Todo: scatter chart (e.g. https://www.izenda.com/docs/ui/doc_report_designer_chart.html#scatter-chart)
// Todo: bubble chart (e.g. https://www.izenda.com/docs/ui/doc_report_designer_chart.html#bubble-chart)
// Todo: waterfall chart (e.g. https://www.izenda.com/docs/ui/doc_report_designer_chart.html#waterfall-chart)
// Todo: sparkline chart (e.g. excel sparkline chart, or https://www.izenda.com/docs/ui/doc_report_designer_chart.html#sparkline-chart)
// Todo: gauges (e.g. https://www.izenda.com/docs/ui/doc_report_designer_gauge.html#)

import {
  AreaChart,
  AreaChartProps,
  StackedAreaChart,
  StackedAreaChartProps,
  BarChart,
  BarChartProps,
  StackedBarChart,
  StackedBarChartProps,
  LineChart,
  PieChart,
  PieChartData,
  PieChartProps,
  ProgressCircle,
  ProgressCircleProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
  Grid,
} from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import {
  ViewContainerColumn,
  ViewContainerRow,
  ViewContainerScroll,
} from "./container";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";
import { ViewButtonIcontext, ViewButtonText } from "./button";
import * as shape from "d3-shape"; // Import the shape object from d3-shape
import { ViewHeatmapCalendar } from "./heatmap";
export const ViewChartMain = (props: any) => {
  return (
    <ViewContainerScroll
      style={{ backgroundColor: "white", flexDirection: "column", flex: 1 }}
    >
      <ViewContainerRow>
        {arrayChartOptions.map((x, i) => (
          <ViewButtonText key={i} textString={x.title} />
        ))}
      </ViewContainerRow>
      <ViewContainerRow>
        <ViewTypographyText>
          (Options/controls go here, if they don't belong in the Control action
          panel)
        </ViewTypographyText>
      </ViewContainerRow>
      <ViewContainerColumn>
        <ViewTypographySubheading>Area Standard</ViewTypographySubheading>
        <ViewChartAreastandard />
        <ViewTypographySubheading>Area Stacked</ViewTypographySubheading>
        <ViewChartAreastacked />
        <ViewTypographySubheading>Bar Standard</ViewTypographySubheading>
        <ViewChartBarstandard />
        <ViewTypographySubheading>Bar Stacked</ViewTypographySubheading>
        <ViewChartBarstacked />
        <ViewTypographySubheading>Line Standard</ViewTypographySubheading>
        <ViewChartLinestandard />
        <ViewTypographySubheading>Line Stacked</ViewTypographySubheading>
        {/* <ViewChartLinestacked /> TODO */}
        <ViewTypographySubheading>Pie Standard</ViewTypographySubheading>
        <ViewChartPiestandard />
        <ViewTypographySubheading>Progress Circle</ViewTypographySubheading>
        <ViewChartProgresscircle />
        <ViewTypographySubheading>Heatmap Calendar</ViewTypographySubheading>
        <ViewChartHeatmapcalendar />
      </ViewContainerColumn>
    </ViewContainerScroll>
  );
};

// OPTIONS

const arrayChartOptions = [
  {
    id: "Areastandard",
    title: "Standard Area Chart",
  },
  {
    id: "Areastacked",
    title: "Stacked Area Chart",
  },
  {
    id: "Barstandard",
    title: "Standard Bar Chart",
  },
  {
    id: "Barstacked",
    title: "Stacked Bar Chart",
  },
  {
    id: "Linestandard",
    title: "Standard Line Chart",
  },
  {
    id: "Piestandard",
    title: "Standard Pie Chart",
  },
  {
    id: "Progresscircle",
    title: "Standard Progress Chart",
  },
  {
    id: "Heatmapcalendar",
    title: "Calendar Heatmap Chart",
  },
];

// AREASTANDARD

export const ViewChartAreastandard = () => {
  return (
    <AreaChart
      style={{ height: 200, width: "100%" }}
      data={[50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]}
      contentInset={{ top: 30, bottom: 30 }}
      curve={shape.curveNatural}
      svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
    />
  );
};

// AREASTACKED

export const ViewChartAreastacked = () => {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];
  const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
  const keys = ["apples", "bananas", "cherries", "dates"] as const;
  const svgs = [
    { onPress: () => console.log("apples") },
    { onPress: () => console.log("bananas") },
    { onPress: () => console.log("cherries") },
    { onPress: () => console.log("dates") },
  ];
  return (
    <StackedAreaChart
      style={{ height: 200, width: "100%", paddingVertical: 16 }}
      data={data}
      keys={keys}
      colors={colors}
      curve={shape.curveNatural}
      showGrid={false}
      // svgs={svgs}
    />
  );
};

// BARSTANDARD

export const ViewChartBarstandard = () => {
  const fill = "rgb(134, 65, 244)";
  const data = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    null,
    85,
    undefined,
    0,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ];
  return (
    <BarChart
      style={{ height: 200 }}
      data={data}
      svg={{ fill }}
      contentInset={{ top: 30, bottom: 30 }}
    />
  );
};

// BARSTACKED

export const ViewChartBarstacked = () => {
  const fill = "rgb(134, 65, 244)";
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
      oranges: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];
  const colors = ["#7b4173", "#a55194", "#ce6dbd", "#de9ed6"];
  const keys = ["apples", "bananas", "cherries", "dates"];
  return (
    <StackedBarChart
      style={{ height: 200 }}
      keys={keys}
      colors={colors}
      data={data}
      showGrid={false}
      contentInset={{ top: 30, bottom: 30 }}
    />
  );
};

// LINESTANDARD

export const ViewChartLinestandard = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <LineChart
      style={{ height: 200 }}
      data={data}
      svg={{ stroke: "rgb(134, 65, 244)" }}
      contentInset={{ top: 20, bottom: 20 }}
    />
  );
};

export const ViewChartLinestacked = () => {
  // todo
};

// PIESTANDARD

export const ViewChartPiestandard = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );
  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log("press", index),
      },
      key: `pie-${index}`,
    }));
  return <PieChart style={{ height: 200 }} data={pieData} />;
};

// PROGRESSCIRCLE

export const ViewChartProgresscircle = () => {
  return (
    <ProgressCircle
      style={{ height: 200 }}
      progress={0.7}
      progressColor={"rgb(134, 65, 244)"}
    />
  );
};

// PROGRESSLINE

export const ViewChartProgressline = () => {
  //todo
};

// PROGRESSLINE

export const ViewChartHeatmapcalendar = () => {
  return (
    <ViewHeatmapCalendar
      endDate={new Date("2016-04-01")}
      numDays={100}
      values={[
        { date: "2016-01-01" },
        { date: "2016-01-22" },
        { date: "2016-01-30" },
        // ...and so on
      ]}
    />
  );
};

// AXISX

export const ViewChartAxisy = () => {
  //todo
};

// AXISY

export const ViewChartAxisx = () => {
  //todo
};
