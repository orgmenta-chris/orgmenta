import { ScrollView, Text } from "react-native";
import { ViewFieldMain, interfaceFieldMain } from "./field";

// Main

export interface interfaceFormMain {
  title?: string;
  data: interfaceFieldMain;
}

// The main simple form
export const ViewFormMain = ({ children, title }: any) => {
  return (
    <ScrollView style={{ margin: 5 }}>
      {title && <Text>{title}</Text>}
      {children}
    </ScrollView>
  );
};

// Dynamic

// A form that shows the correct field type based on a field propery in each object
export const ViewFormDynamic = ({ data, title }: any) => {
  return (
    <ViewFormMain>
      {!data && (
        <Text>-- No data has been passed to this form component --</Text>
      )}
      {data?.map((item: any, i: number) => (
        <ViewFieldMain
          key={i}
          item={{
            ...item,
            label: item.display_singular,
            value: item.value,
            component: item.form_field,
          }}
        />
      ))}
    </ViewFormMain>
  );
};
