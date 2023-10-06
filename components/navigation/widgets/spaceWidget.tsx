
import { ViewIconMain } from "../../../utils/icon";
import { useWindowDimensions } from  "../../../utils/window";
import { useModalVisibility } from "../../../utils/modal";
import { useSpaceActive, TypeSpaceActive, useSpaceState } from "../../../utils/space";
import { Text, Pressable } from "react-native";

export default function SpaceWidget() {
  const window = useWindowDimensions();
  const spaceActive = useSpaceState(["space", "selected"]);
  return (
    <Pressable
      onPress={useModalVisibility('space')}
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row'
      }}
    >
      <ViewIconMain
        name={'box'}
        source={'Feather'}
        color={'white'}
        size={30}
        style={{
          alignItems: 'center', 
          justifyContent: 'center'
        }}
      />
      {window?.width > 600 && <Text selectable={false} numberOfLines={1} style={{ paddingLeft: 10, color: 'white', justifyContent:'flex-start' }}>{spaceActive?.data?.title}</Text>}
    </Pressable>  
  );
}
