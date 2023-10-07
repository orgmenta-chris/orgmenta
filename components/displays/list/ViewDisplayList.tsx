// import React from "react";
// import { View } from "react-native";
// import { useTableColumns } from "../table/table";
// import ViewListMain from "./ViewListMain";

// const ViewDisplayList = (props: any) => {
//   const schema = props.schema;
//   const columns = useTableColumns(
//     schema.data?.map(
//       (x: { focus_columns: { name_singular: any } }) =>
//         x.focus_columns.name_singular
//     )
//   );
//   const auxiliary = props.auxiliary;
  
//   return (
//     <View style={{ flexDirection: "column" }}>
//       <ViewListMain columns={columns} data={auxiliary.data} />
//     </View>
//   );
// };

// export default ViewDisplayList;
