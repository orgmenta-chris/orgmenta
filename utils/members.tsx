// A 'member' is a contact (group or individual) that is a member of a space.
// A 'member' is a contact (group or individual) that is a member of a space.
// It has its own table (rather than being part of the entities table) so that we can use this for row level security on other tables.

import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQueryerQuery, useQueryerMutation } from "./queryer";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";

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
  return useQueryerMutation(["member", "create"], () => requestMemberCreate(props));
};

// Update (todo)

export interface interfaceMemberUpdate {
  // todo
  // todo
}

export async function requestMemberUpdate(member: interfaceMemberUpdate) { // todo
  //todo
}

export const useMemberUpdate = (props: interfaceMemberUpdate) => {
  // todo
  return useQueryerMutation(["member", "update"], () => requestMemberUpdate(props));
};

// Delete (todo)

export interface interfaceMemberDelete {
  // todo
  // todo
}

export async function requestMemberDelete(member: interfaceMemberDelete) { // todo
  //todo
}

export const useMemberDelete = (props: interfaceMemberDelete) => {
  // todo
  return useQueryerMutation(["member", "delete"], () => requestMemberDelete(props));
};

// Array

export async function requestMemberArray() {
  return await instanceSupabaseClient
    .from("members")
    .select()
    .then(handleSupabaseResponse as any);
}

export const useMemberArray = ({ ...Input }) => {
  const queryKey: (string | number)[] = [
    "members",
    "array",
    "add_relevant_props_here",
  ];
  const query = useQueryerQuery(queryKey, requestMemberArray, { enabled: true });
  return query;
};

export const ViewMemberArray = () => {
  const array = useMemberArray({});
  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ fontWeight: "700" }}>ViewMemberArray</ViewTypographyText>
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
  const query = useQueryerQuery<any, Error>(queryKey, queryFn, { enabled: !!id });
  return query;
};

export const ViewMemberItem = ({ id }: interfaceMemberItem) => {
  const item = useMemberItem({ id });
  return (
    <ViewContainerStatic>
      <ViewTypographyText style={{ fontWeight: "700" }}>ViewMemberItem</ViewTypographyText>
      <ViewTypographyText></ViewTypographyText>
      {/* Testing */}
      <ViewTypographyText>{JSON.stringify(item, null, 2)}</ViewTypographyText>
    </ViewContainerStatic>
  );
};
