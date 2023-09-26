import { ScrollView, Text } from "react-native";
import { ViewFieldMain, interfaceFieldMain } from "./field";

// Main

export interface interfaceFormMain {
    title?: string;
    data: interfaceFieldMain;
}

export const ViewFormMain = ({ children, title }: any) => {
    // The main simple form
    return (
        <ScrollView>
            {/* <Text>{data && JSON.stringify(data)}</Text> */}
            {/* {data?.map((x,i)=><View key={i}>
            <Text>{x.display_singular}</Text>
          </View>)} */}
            {title && <Text>{title}</Text>}
            {children}
        </ScrollView>
    );
};

// Dynamic

// A form that shows the correct field type based on a field propery in each object
export const ViewFormDynamic = ({ data, title }: any) => {
    // console.log('data',data)
    return (
        <ViewFormMain>
            {!data && (
                <Text>
                    -- No data has been passed to this form component --
                </Text>
            )}
            {/* <Text>{data && JSON.stringify(data)}</Text> */}
            {/* {data?.map((x,i)=><View key={i}>
          <Text>{x.display_singular}</Text>d
        </View>)} */}
            {data?.map(
                (item: any, i: number) => (
                    // replace with dynamic field component from field.tsx
                    <ViewFieldMain
                        key={i}
                        item={{
                            ...item,
                            label: item.display_singular,
                            value: item.value,
                            component: item.form_field || "Text",
                        }}
                    />
                )
                // <View key={i} style={{margin:4, flexDirection:'row'}}>
                //   <Text style={{flex: 1, fontWeight:'600'}}>{x?.display_singular}</Text>
                //   <Text style={{flex: 1}}>{x?.value}</Text>
                // </View>
            )}
        </ViewFormMain>
    );
};
