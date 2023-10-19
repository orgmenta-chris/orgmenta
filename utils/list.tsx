// Loisa: feel free to take this one.
// This is currently just a placeholder.
// 'List' needs to be a reusable component that will render a list of items in a ScrollView or FlatList (your choice).
// The items need to have headers along with collapsible/expandable bodies (like in the sidebar).
// Once that's done, then we can discuss how best to render items correctly (i.e. how&what attributes to render in the header and in the collapsible body)

import {
  ViewContainerStatic,
  ViewContainerScroll,
  ViewContainerColumn,
  ViewContainerRow,
} from "./container";
import { ViewRelationshipsWidget } from "./relationships";
import { ViewTypographyText } from "./typography";

// MAIN

export const ViewListMain = ({ data = [] }: any) => {
  return (
    <ViewContainerScroll style={{ flex: 1, backgroundColor: "white" }}>
      {data?.map((x: any, i: number) => (
        <ViewContainerColumn
          key={i}
          style={{
            flex: 1,
            margin: 5,
            backgroundColor: "gray",
            // minHeight: 100,
          }}
        >
          {/* <ViewTypographyText style={{ color: "white", padding: 5 }}>
              {x.entities?.title}
        </ViewTypographyText>
          <ViewTypographyText style={{ color: "white", padding: 5 }}>
                {x.entities?.status} | {x.entities?.type}
          </ViewTypographyText> */}
          {/* <ViewTypographyText style={{ color: "white", padding: 5 }}>
                {JSON.stringify(x.relationships)}
          </ViewTypographyText> */}
          {Object.keys(x.entities).map((y, i) => (
            <ViewContainerRow key={i} style={{ padding: 5, flex: 1 }}>
              <ViewTypographyText
                style={{ color: "white", fontWeight: "600", flex: 1 }}
              >
                {y}
              </ViewTypographyText>
              <ViewTypographyText style={{ color: "white", flex: 3 }}>
                {x.entities[y]}
              </ViewTypographyText>
            </ViewContainerRow>
          ))}
          {Object.keys(x.relationships).map((y, i) => (
            <ViewContainerRow key={i} style={{ padding: 5, flex: 1 }}>
              <ViewTypographyText
                style={{ color: "white", fontWeight: "600", flex: 1 }}
              >
                {y}
              </ViewTypographyText>
              <ViewContainerStatic style={{ padding: 5, flex: 3 }}>
                <ViewRelationshipsWidget
                  key={i}
                  attribute={y}
                  values={x.relationships[y]}
                />
              </ViewContainerStatic>
            </ViewContainerRow>
          ))}

          {/* {x.entities &&
            Object.keys(x.entities)?.map((y, j) => (
              <ViewTypographyText key={j} style={{ color: "white" }}>
                {y}: {x.entities?.[y]}
              </ViewTypographyText>
            ))}
          {x.relationships &&
            Object.keys(x.relationships)?.map((y, j) => (
              <ViewContainerStatic key={j + "a"}>
                <ViewTypographyText style={{ color: "white" }}>
                  {`${y}: ${x.relationships?.[y]?.[0] === null ? 0 : x.relationships?.[y]?.length}`}
                </ViewTypographyText>
                <ViewTypographyText>
                  {JSON.stringify(x.relationships?.[y])}
                </ViewTypographyText>
              </ViewContainerStatic>
            ))} */}
        </ViewContainerColumn>
      ))}
    </ViewContainerScroll>
  );
};
