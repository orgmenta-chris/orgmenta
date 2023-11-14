import { ViewContainerColumn } from "./container";
import { instanceSupabaseClient } from "./supabase";
import { ViewTypographySubheading, ViewTypographyText } from "./typography";

export const ViewIntegrationSection = () => {
  return (
    <ViewContainerColumn>
      <ViewTypographySubheading>Integrations</ViewTypographySubheading>
      <ViewTypographyText>(todo)</ViewTypographyText>
    </ViewContainerColumn>
  );
};

export const mapIntegrationsList = {
  //todo
}

export const activateConnection = async (account: string) => {
  try {
    const { data, error } = await instanceSupabaseClient
      .from("entities_orgmenta")
      .insert([{ type: "item", class: "integration", title: account }])
      .select();

    if (error) console.log(error);

    if (data) {
      console.log(data);

      return data;
    }
  } catch (error) {
    console.log(error);

    throw error;
  }
};