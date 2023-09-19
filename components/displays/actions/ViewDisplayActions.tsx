import React from "react";
import { View } from "react-native";
import { Link, Routes, Route } from "react-router-dom";
import { optionsDisplayMain } from "../../../utils/display";
import ViewIconMain from "../icons/ViewIconMain";

const ViewDisplayActions = ({}: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row" }}>
        {optionsDisplayMain?.map((x, i) => (
          <Link key={i} style={{ padding: 5 }} to={x.title.toLowerCase()}>
            {/* {x.title} */}
            <ViewIconMain
              name={x.iconName}
              source={x.iconSource}
              color={"black"}
              size={24}
            />
          </Link>
        ))}
      </View>
    </View>
  );
};

export default ViewDisplayActions;
