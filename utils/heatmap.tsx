// Calendar heatmap is inspired by:
// - https://github.com/ayooby/react-native-calendar-heatmap/blob/master/README.md
// - and https://github.com/kevinsqi/react-calendar-heatmap

import { useReactState, useReactEffect } from "./react";
import { ViewContainerScroll } from "./container";
import { ViewTypographyText } from "./typography";
import {
  ViewSvgMain,
  ViewSvgGroup,
  ViewSvgRectangle,
  ViewSvgText,
} from "./svg";
import {
  mapDateConstants,
  getDateShifted,
  getDateBeginningtime,
  getDateConverted,
  mapDateMonthlabels,
} from "./date";
import _ from "lodash";
import PropTypes from "prop-types";

const SQUARE_SIZE = 20;
const MONTH_LABEL_GUTTER_SIZE = 8;

// Not in use?

function getTransformForMonthLabels(horizontal: any, gutterSize: any) {
  if (horizontal) {
    return null;
  }
  return `${getWeekWidth(gutterSize) + MONTH_LABEL_GUTTER_SIZE}, 0`;
}

function getTransformForAllWeeks(showMonthLabels: any, horizontal: any) {
  if (horizontal)
    return `0, ${getMonthLabelSize(showMonthLabels, horizontal) - 100}`;
  return null;
}

// Dimensions

function getWeekWidth(gutterSize: any) {
  return mapDateConstants.weekInDays * getSquareSizeWithGutter(gutterSize);
}

function getWidth(numDays: any, endDate: any, gutterSize: any) {
  return (
    getWeekCount(numDays, endDate) * getSquareSizeWithGutter(gutterSize) -
    gutterSize
  );
}

function getHeight(gutterSize: any, showMonthLabels: any, horizontal: any) {
  return (
    getWeekWidth(gutterSize) +
    (getMonthLabelSize(showMonthLabels, horizontal) - gutterSize)
  );
}

// Not in use?

function getViewBox(
  numDays: any,
  endDate: any,
  gutterSize: any,
  showMonthLabels: any,
  horizontal: any
) {
  if (horizontal) {
    return `${getWidth(numDays, endDate, gutterSize)} ${getHeight(
      gutterSize,
      showMonthLabels,
      horizontal
    )}`;
  }
  return `${getHeight(gutterSize, showMonthLabels, horizontal)} ${getWidth(
    numDays,
    endDate,
    gutterSize
  )}`;
}

function getValueForIndex(index: any, valueCache: any) {
  if (valueCache[index]) return valueCache[index].value;
  return null;
}

// TOOLTIP

function getTooltipDataAttrsForValue(value: any, tooltipDataAttrs: any) {
  if (typeof tooltipDataAttrs === "function") return tooltipDataAttrs(value);
  return tooltipDataAttrs;
}

function getTooltipDataAttrsForIndex(
  index: any,
  valueCache: any,
  tooltipDataAttrs: any
) {
  if (valueCache[index]) {
    return valueCache[index].tooltipDataAttrs;
  }
  return getTooltipDataAttrsForValue(
    { date: null, count: null },
    tooltipDataAttrs
  );
}

// COUNT

export const getCountByDuplicateValues = (array: any) => {
  let hashMap = {};
  for (var item of array) {
    //if that date exists
    if (item.date in hashMap) {
      //up the prev count
      (hashMap as any)[item.date] = (hashMap as any)[item.date] + 1;
    } else {
      (hashMap as any)[item.date] = 1;
    }
  }
  // iterate through the keys of the Map and format it for Array 2
  let outputArray: any = [];
  Object.keys(hashMap).forEach((key) => {
    outputArray.push({
      key,
      count: (hashMap as any)[key],
    });
  });
  return outputArray;
}

// Colors

export const findColorLevel = (count: any, rectColor: any) => {
  if (count === 0) return rectColor[0];
  else if (count >= 1 && count <= 3) return rectColor[1];
  else if (count >= 4 && count <= 9) return rectColor[2];
  else if (count >= 10 && count <= 17) return rectColor[3];
  else if (count >= 18 && count <= 25) return rectColor[4];
  else if (count >= 26) return rectColor[5];
  else return rectColor[5];
}

export const  getFillColor = (index: any, valueCache: any, rectColor: any) => {
  if (valueCache[index]) {
    const fillColor = findColorLevel(
      valueCache[index].countedArray.count,
      rectColor
    );
    return fillColor;
  }
  return rectColor[0];
}

// Index title

function getTitleForIndex(index: any, valueCache: any, titleForValue: any) {
  if (valueCache[index]) return valueCache[index].title;
  return titleForValue ? titleForValue(null) : null;
}

// coordinates

function getSquareCoordinates(dayIndex: any, horizontal: any, gutterSize: any) {
  if (horizontal) return [0, dayIndex * getSquareSizeWithGutter(gutterSize)];
  return [dayIndex * getSquareSizeWithGutter(gutterSize), 0];
}

// Index title

function getTransformForWeek(
  weekIndex: any,
  horizontal: any,
  gutterSize: any,
  showMonthLabels: any
) {
  if (horizontal) {
    return [
      weekIndex * getSquareSizeWithGutter(gutterSize),
      getMonthLabelSize(showMonthLabels, horizontal),
    ];
  }
  if (horizontal && !showMonthLabels) {
    return [weekIndex * getSquareSizeWithGutter(gutterSize), 0];
  }
  return [10, weekIndex * getSquareSizeWithGutter(gutterSize)];
}

function getMonthLabelSize(showMonthLabels: any, horizontal: any) {
  if (!showMonthLabels) {
    return 0;
  } else if (horizontal) {
    return SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE;
  }
  return 2 * (SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE);
}

function getSquareSizeWithGutter(gutterSize: any) {
  return SQUARE_SIZE + gutterSize;
}

function getMonthLabelCoordinates(
  weekIndex: any,
  horizontal: any,
  gutterSize: any
) {
  if (horizontal) {
    return [weekIndex * getSquareSizeWithGutter(gutterSize), 0];
  }
  const verticalOffset = -2;
  return [
    0,
    (weekIndex + 1) * getSquareSizeWithGutter(gutterSize) + verticalOffset,
  ];
}

function getStartDateWithEmptyDays(numDays: any, endDate: any) {
  return getDateShifted(
    getDateStart(numDays, endDate),
    -getNumEmptyDaysAtStart(numDays, endDate)
  );
}

function getDateEnd (date:any) {
  // get end date
  const dateEnd = getDateBeginningtime(getDateConverted(date));
  return dateEnd
}

function getDateStart(numDays: any, endDate: any) {
  return getDateShifted(getDateEnd(endDate), -numDays + 1); // +1 because endDate is inclusive
}

function getNumEmptyDaysAtEnd(endDate: any) {
  return mapDateConstants.weekInDays - 1 - getDateEnd(endDate).getDay();
}

function getNumEmptyDaysAtStart(numDays: any, endDate: any) {
  return getDateStart(numDays, endDate).getDay();
}

function getWeekCount(numDays: any, endDate: any) {
  const numDaysRoundedToWeek =
    numDays +
    getNumEmptyDaysAtStart(numDays, endDate) +
    getNumEmptyDaysAtEnd(endDate);
  return Math.ceil(numDaysRoundedToWeek / mapDateConstants.weekInDays);
}

const rectColor = ["#eeeeee", "#d6e685", "#8cc665", "#44a340", "#1e6823"];

export const ViewHeatmapCalendar = (props: any) => {
  const {
    values,
    gutterSize,
    horizontal,
    numDays,
    endDate,
    titleForValue,
    tooltipDataAttrs,
    onPress,
    showOutOfRangeDays,
    monthLabelsColor,
    showMonthLabels,
    monthLabelsStyle,
    monthLabelForIndex,
    colorArray,
  } = props;

  const getValueCache = (values: any) => {
    const countedArray = getCountByDuplicateValues(values);
    return _.reduce(
      values,
      (memo: any, value: any) => {
        const date = getDateConverted(value.date);
        const index = Math.floor(
          ((date as any) -
            (getStartDateWithEmptyDays as any)(numDays, endDate)) /
            mapDateConstants.dayInMilliseconds
        );
        (memo as any)[index] = {
          value: value,
        };
        const count = _.find(countedArray, {
          key: (memo as any)[index].value.date,
        });
        (memo as any)[index].countedArray = count;

        return memo;
      },
      {}
    );
  };

  useReactEffect(() => {
    setValueCache(getValueCache(values));
  }, [values]);

  const [valueCache, setValueCache] = useReactState(getValueCache(values));

  const handleClick = (value: any) => {
    if (onPress) {
      onPress(value);
    }
  };

  const renderSquare = (dayIndex: any, index: any) => {
    const indexOutOfRange =
      index < getNumEmptyDaysAtStart(numDays, endDate) ||
      index >= getNumEmptyDaysAtStart(numDays, endDate) + numDays;
    if (indexOutOfRange && !showOutOfRangeDays) {
      return null;
    }
    const [x, y] = getSquareCoordinates(dayIndex, horizontal, gutterSize);
    const fillColor = getFillColor(index, valueCache, colorArray);
    return (
      <ViewSvgRectangle
        key={index}
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        x={x}
        y={y}
        title={getTitleForIndex(index, valueCache, titleForValue)}
        onPress={() => handleClick(index)}
        fill={fillColor}
        {...getTooltipDataAttrsForIndex(index, valueCache, tooltipDataAttrs)}
      />
    );
  };

  const renderWeek = (weekIndex: any) => {
    const [x, y] = getTransformForWeek(
      weekIndex,
      horizontal,
      gutterSize,
      showMonthLabels
    );
    return (
      <ViewSvgGroup key={weekIndex} x={x} y={y}>
        {_.range(mapDateConstants.weekInDays).map((dayIndex) =>
          renderSquare(
            dayIndex,
            weekIndex * mapDateConstants.weekInDays + dayIndex
          )
        )}
      </ViewSvgGroup>
    );
  };

  const renderAllWeeks = () => {
    return _.range(getWeekCount(numDays, endDate)).map((weekIndex) =>
      renderWeek(weekIndex)
    );
  };

  const renderMonthLabels = () => {
    if (!showMonthLabels) {
      return null;
    }
    const weekRange = _.range(getWeekCount(numDays, endDate) - 1); // don't render for last week, because label will be cut off
    return weekRange.map((weekIndex) => {
      const endOfWeek = getDateShifted(
        getStartDateWithEmptyDays(numDays, endDate),
        (weekIndex + 1) * mapDateConstants.weekInDays
      );
      const [x, y] = getMonthLabelCoordinates(
        weekIndex,
        horizontal,
        gutterSize
      );
      return endOfWeek.getDate() >= 1 &&
        endOfWeek.getDate() <= mapDateConstants.weekInDays ? (
        <ViewSvgText // replace this with ViewTypographyText
          {...monthLabelsStyle}
          key={weekIndex}
          x={x}
          y={y + 16}
          stroke={monthLabelsColor}
        >
          {monthLabelForIndex
            ? monthLabelForIndex(endOfWeek.getMonth())
            : (mapDateMonthlabels as any)[endOfWeek.getMonth()]}
        </ViewSvgText>
      ) : null;
    });
  };

  return (
    <ViewContainerScroll>
      <ViewSvgMain
        height={getHeight(gutterSize, showMonthLabels, horizontal)}
        width={getWidth(numDays, endDate, gutterSize)}
      >
        <ViewSvgGroup>{renderMonthLabels()}</ViewSvgGroup>
        <ViewSvgGroup>{renderAllWeeks()}</ViewSvgGroup>
      </ViewSvgMain>
    </ViewContainerScroll>
  );
};

ViewHeatmapCalendar.propTypes = {
  values: PropTypes.arrayOf(
    // array of objects with date and arbitrary metadata
    PropTypes.shape({
      date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
      ]).isRequired,
    }).isRequired
  ).isRequired,
  numDays: PropTypes.number, // number of days back from endDate to show
  endDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date),
  ]), // end of date range
  gutterSize: PropTypes.number, // size of space between squares
  horizontal: PropTypes.bool, // whether to orient horizontally or vertically
  showMonthLabels: PropTypes.bool, // whether to show month labels
  monthLabelsColor: PropTypes.string,
  showOutOfRangeDays: PropTypes.bool, // whether to render squares for extra days in week after endDate, and before start date
  tooltipDataAttrs: PropTypes.oneOfType([PropTypes.object, PropTypes.func]), // data attributes to add to square for setting 3rd party tooltips, e.g. { 'data-toggle': 'tooltip' } for bootstrap tooltips
  titleForValue: PropTypes.func, // function which returns title text for value
  classForValue: PropTypes.func, // function which returns html class for value
  onPress: PropTypes.func, // callback function when a square is clicked
  colorArray: PropTypes.array,
};

ViewHeatmapCalendar.defaultProps = {
  numDays: 200,
  endDate: new Date(),
  gutterSize: 1,
  horizontal: true,
  showMonthLabels: true,
  monthLabelsColor: "black",
  showOutOfRangeDays: false,
  colorArray: rectColor,
  classForValue: (value: any) => (value ? "black" : "#8cc665"),
  onPress: () => console.log("change onPress prop"),
};