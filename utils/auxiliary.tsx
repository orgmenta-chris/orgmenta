import { instanceSupabaseClient, handleSupabaseResponse } from "./supabase";
import { useQuery } from "@tanstack/react-query";
import { TextInput, View, Text } from "react-native";
import { useState } from "react";

// Array

export const requestAuxiliaryArray = (filter_array: any) => {
  // todo: implement filter_array in query function
  const query = instanceSupabaseClient.from("entities-auxiliary").select();
  if (filter_array?.related) {
    query.contains("related", "examplefocusid");
  }
  query
    .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)    .then((response) => response.data);
    .then(handleSupabaseResponse as any);
  return query;
};

export const useAuxiliaryArray = ({
  filter_array,
}: {
  filter_array: string | number;
}) => {
  const queryKey: (string | number)[] = ["auxiliary", "array", filter_array];
  const queryFn = async () => {
    const response = await instanceSupabaseClient
      .from("auxiliary")
      .select("id")
      .range(0, 9) //temp arbitrary limit of 10 (todo: pass variables in here to get proper pagination)    return response.data;
      .then(handleSupabaseResponse as any);
  };
  const query = useQuery<any, Error>(queryKey, queryFn, { enabled: true });
  return query;
};
