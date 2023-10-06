import { ViewIconMain } from "../../../utils/icon";
import { useWindowDimensions } from  "../../../utils/window";
import { useModalVisibility } from "../../../utils/modal";
import { useUserActive, TypeUserActive } from "../../../utils/user";
import { useAuthSession } from "../../../utils/auth";
import { Text, Pressable } from "react-native";
  
export default function BrowseWidget() {
  const auth = useAuthSession();
  const window = useWindowDimensions();
  // const userActive = useUserActive({}) as TypeUserActive;
  return (
    <Pressable
      onPress={useModalVisibility('user')}
      style={{
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        flexDirection: 'row'
      }}
    >
      {window?.width > 600 && <Text selectable={false} numberOfLines={1} style={{ paddingRight: 10, color: 'white' }}>{`${auth?.data?.nickUpper}`}</Text>}
      <ViewIconMain
        name={'user'}
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
