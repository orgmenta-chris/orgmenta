import { ViewContainerScroll, ViewContainerStatic } from "./container";



// The actual statusbar component
export const ViewKanbanContainer = (props: any) => {
  const boardStyle = {width:500, height: 400, backgroundColor: 'blue', margin: 20 }
  return (
    <ViewContainerScroll horizontal style={{flex:1, backgroundColor:'red'}} >
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
      <ViewContainerStatic style={boardStyle}></ViewContainerStatic>
    </ViewContainerScroll>
  );
};

