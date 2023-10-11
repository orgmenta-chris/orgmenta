import { ViewContainerStatic, ViewContainerScroll } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewInputText } from "./input";
import { ViewButtonPressable } from "./button";
import { useQueryerMutation } from "./queryer";
import { useReactState } from "./react";
import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";

// Main

interface TypeInquiryMain {
  name?: string;
  email?: string;
  message?: string;
}

export const ViewInquiryMain = () => {
  const [state, set] = useReactState<TypeInquiryMain>({});
  const create = useInquiryCreate(state, () => set({}));
  return (
    <ViewContainerScroll style={{ flexDirection: "column" }}>
      {/* <ViewTypographyText>{JSON.stringify(state, null, 2)}</ViewTypographyText> */}
      <ViewContainerStatic style={{ flexDirection: "row", margin: 5 }}>
        <ViewTypographyText
          style={{ height: 30, verticalAlign: "middle", flex: 1 }}
        >
          Name:{" "}
        </ViewTypographyText>
        <ViewInputText
          value={state.name || ""}
          style={{
            height: 30,
            verticalAlign: "middle",
            flex: 3,
            borderWidth: 1,
          }}
          onChangeText={(newData) => set({ ...state, name: newData })}
        />
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row", margin: 5 }}>
        <ViewTypographyText
          style={{ height: 30, verticalAlign: "middle", flex: 1 }}
        >
          Email*:{" "}
        </ViewTypographyText>
        <ViewInputText
          value={state.email || ""}
          style={{
            height: 30,
            verticalAlign: "middle",
            flex: 3,
            borderWidth: 1,
          }}
          onChangeText={(newData) => set({ ...state, email: newData })}
        />
      </ViewContainerStatic>
      <ViewContainerStatic style={{ flexDirection: "row", margin: 5 }}>
        <ViewTypographyText
          style={{ height: 30, verticalAlign: "middle", flex: 1 }}
        >
          Message*:{" "}
        </ViewTypographyText>
        <ViewInputText
          value={state.message || ""}
          style={{
            height: 30,
            verticalAlign: "middle",
            flex: 3,
            borderWidth: 1,
          }}
          onChangeText={(newData) => set({ ...state, message: newData })}
        />
      </ViewContainerStatic>
      <ViewButtonPressable
        disabled={!state?.email || !state?.message}
        style={{
          borderRadius: 5,
          padding: 10,
          margin: 5,
          backgroundColor:
            state?.email && state?.message ? "lightblue" : "gray",
        }}
        onPress={() => {
          create.mutate();
        }}
      >
        <ViewTypographyText>Submit</ViewTypographyText>
      </ViewButtonPressable>
      <ViewContainerStatic style={{ flexDirection: "row" }}>
        <ViewTypographyText
          style={{ textAlign: "center", verticalAlign: "middle", flex: 1 }}
        >
          <ViewTypographyText>
            {create.isLoading && `Submitting...`}
            {create.isError &&
              `Error: ${JSON.stringify(create.error, null, 2)}`}
            {create.isSuccess && `Submitted. Thank you, we will respond ASAP.`}
          </ViewTypographyText>
        </ViewTypographyText>
      </ViewContainerStatic>
    </ViewContainerScroll>
  );
};

// Create

export async function requestInquiryCreate(data: any) {
  return await instanceSupabaseClient
    .from("inquiries")
    .insert(data)
    .then(handleSupabaseResponse as any);
}

export const useInquiryCreate = (data: any, resetState: () => void) => {
  return useQueryerMutation(
    ["inquiry", "create"],
    () => requestInquiryCreate(data),
    {
      onSuccess: () => {
        resetState();
      },
    }
  );
};
