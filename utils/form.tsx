import { ViewContainerScroll } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewFieldMain, TypeFieldMain } from "./field";
import { ReactNode } from "react";

// CONTAINER

export interface interfaceFormContainer {
  title?: string;
  children?: ReactNode;
  data?: TypeFieldMain;
}

// The main simple form (use ViewFormDynamic instead if you don't know what field types are needed. )
export const ViewFormContainer = ({
  children,
  title,
}: interfaceFormContainer) => {
  // console.log(children?[1].map(x=>x.props))
  return (
    <ViewContainerScroll style={{ margin: 5 }}>
      {title && <ViewTypographyText>{title}</ViewTypographyText>}
      {children}
    </ViewContainerScroll>
  );
};

// DYNAMIC

// A form that shows the correct field type based on a field property in each object
export const ViewFormDynamic = ({ data, title, formname }: any) => {
  // console.log(data)
  // console.log(formname)
  return (
    <ViewFormContainer>
      {!data && (
        <ViewTypographyText>
          -- No data has been passed to this form component --
        </ViewTypographyText>
      )}
      {data?.map((item: any, i: number) => (
        <ViewFieldMain
          formname={formname}
          entityid={item.id}
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

// BUTTONS TODO
// Make a button set (clear/reset, cancel, save) for the forms
export const ViewFormButtons = ({ data, title }: any) => {
  return (
    <></>
  );
};
