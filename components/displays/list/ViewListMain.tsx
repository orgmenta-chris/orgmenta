import React, { useState, useEffect } from "react";
import { View } from "react-native";

const ViewListMain = ({ ...Input }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Input?.data) {
      setData(Input.data);
    }
  }, [Input?.data]);

  // When columns are provided, set the columns to state
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (Input?.columns) {
      setColumns(Input.columns);
    }
  }, [Input?.data]);

  return (
    // PLACEHOLDER:
    <View>
      {data?.map((x, i) => (
        <View
          key={i}
          style={{ flex: 1, margin: 5, backgroundColor: "gray", minHeight: 50 }}
        >
          <Text style={{ color: "white" }}>{x.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default ViewListMain