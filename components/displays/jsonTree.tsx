import React from "react";
import { Text, View } from "react-native";

import TreeView from "react-native-final-tree-view";

function getIndicator(isExpanded: any, hasChildrenNodes: any) {
  if (!hasChildrenNodes) {
    return "➖";
  } else if (isExpanded) {
    return "🔽";
  } else {
    return "▶️";
  }
}

const family = [
  {
    id: "Grandparent",
    name: "Grandpa",
    age: 78,
    children: [
      {
        id: "Me",
        name: "Me",
        age: 30,
        children: [
          {
            id: "Erick",
            name: "Erick",
            age: 10,
          },
          {
            id: "Rose",
            name: "Rose",
            age: 12,
          },
        ],
      },
    ],
  },
];

const CollapsibleJSONTree = () => {
  return (
    <TreeView
      data={family} // defined above
      renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
        return (
          <View>
            <Text
              style={{
                marginLeft: 25 * level,
              }}
            >
              {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default CollapsibleJSONTree;
