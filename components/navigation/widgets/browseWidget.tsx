import { ViewIconMain } from "../../../utils/icon";
import { useWindowDimensions } from  "../../../utils/window";
import { useModalVisibility } from "../../../utils/modal";
import { useBrowseActive, TypeBrowseActive } from "../../../utils/browse";
import { Text, Pressable } from "react-native";

export default function BrowseWidget() {
  const window = useWindowDimensions();
  const browseActive = useBrowseActive({}) as TypeBrowseActive;
  return (
    <Pressable
      onPress={useModalVisibility('browse')}
      style={{
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'row'
      }}
    >
      {window?.width > 600 && <Text selectable={false} numberOfLines={1} style={{ paddingRight: 10, color: 'white' }}>{browseActive?.data?.title}</Text>}
      <ViewIconMain
        name={'book-open'}
        source={'Feather'}
        color={'white'}
        size={30}
        style={{
          alignItems: 'center', 
          justifyContent: 'center',
        }}
      />
    </Pressable>  
  );
}
