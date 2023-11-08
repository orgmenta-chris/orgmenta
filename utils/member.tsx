// A 'member' is a contact (group or individual) that is a member of a space.
// A 'member' is a contact (group or individual) that is a member of a space.
// It has its own table (rather than being part of the entities table) so that we can use this for row level security on other tables.

import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQueryerQuery, useQueryerMutation } from "./queryer";
import { ViewContainerStatic } from "./container";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";
import { ViewButtonPressable } from "./button";
import { Modal } from "react-native";
import { useState } from "react";
import { ViewInputText } from "./input";
import { SendMail, sendMessage } from "../api/graphFunctions";
import useTokenStore from "../states/api/storeToken";
import { Base64 } from "js-base64";

// Create

export interface interfaceMemberCreate {
  // todo
}

export async function requestMemberCreate(member: interfaceMemberCreate) {
  return await instanceSupabaseClient
    .from("members")
    .insert(member)
    .then(handleSupabaseResponse as any);
}

export const useMemberCreate = (props: interfaceMemberCreate) => {
  return useQueryerMutation(["member", "create"], () =>
    requestMemberCreate(props)
  );
};

// Update (todo)

export interface interfaceMemberUpdate {
  // todo
  // todo
}

export async function requestMemberUpdate(member: interfaceMemberUpdate) {
  // todo
  //todo
}

export const useMemberUpdate = (props: interfaceMemberUpdate) => {
  // todo
  return useQueryerMutation(["member", "update"], () =>
    requestMemberUpdate(props)
  );
};

// Delete (todo)

export interface interfaceMemberDelete {
  // todo
  // todo
}

export async function requestMemberDelete(member: interfaceMemberDelete) {
  // todo
  //todo
}

export const useMemberDelete = (props: interfaceMemberDelete) => {
  // todo
  return useQueryerMutation(["member", "delete"], () =>
    requestMemberDelete(props)
  );
};

// Array

export async function requestMemberArray() {
  return await instanceSupabaseClient
    .from("members_orgmenta")
    .select()
    .then(handleSupabaseResponse as any);
}

export const useMemberArray = ({ ...Input }) => {
  const queryKey: (string | number)[] = [
    "members",
    "array",
    "add_relevant_props_here",
  ];
  const query = useQueryerQuery(queryKey, requestMemberArray, {
    enabled: true,
  });
  return query;
};

export const ViewMemberArray = () => {
  const array = useMemberArray({});
  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ fontWeight: "700" }}>
        ViewMemberArray
      </ViewTypographyText>
      <ViewTypographyText></ViewTypographyText>
      {/* Testing */}
      <ViewTypographyText>{JSON.stringify(array, null, 2)}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

// Item

export interface interfaceMemberItem {
  id: string;
}

export const useMemberItem = ({ id }: interfaceMemberItem) => {
  // get a single row from the members table
  const queryKey: (string | number)[] = ["members", id];
  const queryFn = async () => {
    const response = await instanceSupabaseClient
      .from("members")
      .select()
      .eq("id", id)
      .single();
    return response.data;
  };
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, {
    enabled: !!id,
  });
  return query;
};

export const ViewMemberItem = ({ id }: interfaceMemberItem) => {
  const item = useMemberItem({ id });
  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ fontWeight: "700" }}>
        ViewMemberItem
      </ViewTypographyText>
      {/* Testing */}
      <ViewTypographyText>{JSON.stringify(item, null, 2)}</ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const ViewMemberSection = ({ spaceName }: any) => {
  return (
    <ViewContainerStatic>
      <ViewTypographySubheading>Members</ViewTypographySubheading>
      <ViewTypographyText>todo</ViewTypographyText>
      <ViewMemberInvite />
      <ViewMemberList spaceName={spaceName} />
    </ViewContainerStatic>
  );
};

export const ViewMemberInvite = ({}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ViewContainerStatic>
      <ViewTypographySubheading>MemberInvite</ViewTypographySubheading>
      <ViewButtonPressable
        style={{
          flex: 1,
          padding: 5,
          margin: 10,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "black",
          backgroundColor: "lightblue",
        }}
        onPress={showModal}
      >
        <ViewTypographyText
          selectable={false}
          style={{ fontWeight: "bold", textAlign: "center" }}
        >
          Add Member
        </ViewTypographyText>
      </ViewButtonPressable>
      <MembersModal isVisible={isModalVisible} closeModal={closeModal} />
    </ViewContainerStatic>
  );
};

export const ViewMemberList = ({ spaceName }: any) => {
  const memberArray = useMemberArray({ spaceName: spaceName });
  return (
    <ViewContainerStatic>
      <ViewTypographySubheading>MemberList</ViewTypographySubheading>
      <ViewTypographyText>
        {JSON.stringify(memberArray.data)}
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};

// member modal

export const MembersModal = ({ isVisible, closeModal }: any) => {
  const [email, onChangeEmail] = useState("");
  const [message, onChangeMessage] = useState("");

  const getToken = useTokenStore((state: any) => state.token) || undefined;

  const sendInvite = async () => {
    const emailBody: SendMail = {
      message: {
        subject: "Test Email",
        body: {
          contentType: "Text",
          // content: Base64.encode(message),
          content: message,
        },
        toRecipients: [
          {
            emailAddress: {
              address: email,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    const graphData = await sendMessage(getToken.accessToken, emailBody);

    const { data, error } = await instanceSupabaseClient
      .from("members_orgmenta")
      .insert([{ email_address: email, status: "active" }])
      .select();
  };

  return (
    <Modal
      animationType="slide" // You can choose different animation types
      // transparent={true}
      visible={isVisible}
    >
      <ViewContainerStatic>
        <ViewTypographyText
          selectable={false}
          style={{ fontWeight: "bold", padding: 5, marginVertical: 10 }}
        >
          Email
        </ViewTypographyText>
        <ViewInputText
          style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
          onChangeText={onChangeEmail}
          placeholder="Enter email"
          value={email}
        />
        <ViewTypographyText
          selectable={false}
          style={{ fontWeight: "bold", padding: 5, marginVertical: 10 }}
        >
          Invitation Message
        </ViewTypographyText>
        <ViewInputText
          style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
          onChangeText={onChangeMessage}
          placeholder="Enter message"
          value={message}
        />
        <ViewButtonPressable
          style={{
            flex: 1,
            padding: 5,
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            backgroundColor: "lightblue",
          }}
          onPress={sendInvite}
        >
          <ViewTypographyText
            selectable={false}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Send Invite
          </ViewTypographyText>
        </ViewButtonPressable>
        <ViewButtonPressable
          style={{
            flex: 1,
            padding: 5,
            margin: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            backgroundColor: "lightblue",
          }}
          onPress={closeModal}
        >
          <ViewTypographyText
            selectable={false}
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Close
          </ViewTypographyText>
        </ViewButtonPressable>
      </ViewContainerStatic>
    </Modal>
  );
};
