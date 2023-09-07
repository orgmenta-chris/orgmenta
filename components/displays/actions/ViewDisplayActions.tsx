import React from "react";
import { View } from "react-native";
import { Link, Routes, Route } from "react-router-dom";
import { optionsDisplayActions } from "../../../utils/display";
import { ViewEntityAdd } from "../../../utils/entity";
import ViewIconMain from "../icons/ViewIconMain";

const ViewDisplayActions = ({}: any) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row" }}>
        {optionsDisplayActions?.map((x, i) => (
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
      <Routes>
        <Route path="/add" element={<ViewEntityAdd />} />
      </Routes>
    </View>
  );
};

export default ViewDisplayActions;
