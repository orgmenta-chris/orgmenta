import { ViewContainerScroll } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewFieldMain, interfaceFieldMain } from "./field";
import { ReactNode } from 'react';

// CONTAINER

export interface interfaceFormContainer {
  title?: string;
  children?: ReactNode;
  data?: interfaceFieldMain;
}

// The main simple form
export const ViewFormContainer = ({ children, title }: interfaceFormContainer) => {
  return (
    <ViewContainerScroll style={{ margin: 5 }}>
      {title && <ViewTypographyText>{title}</ViewTypographyText>}
      {children}
    </ViewContainerScroll>
  );
};

// DYNAMIC

// A form that shows the correct field type based on a field propery in each object
export const ViewFormDynamic = ({ data, title }: any) => {
  return (
    <ViewFormContainer>
      {!data && (
        <ViewTypographyText>
          -- No data has been passed to this form component --
        </ViewTypographyText>
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
    </ViewFormContainer>
  );
};
