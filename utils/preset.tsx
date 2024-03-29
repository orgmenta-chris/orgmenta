// A 'preset' is a control for a 'display' to allow a saved view for filtering, sorting, grouping (etc.) entities.
// e.g. you might have a saved preset called 'My new messages' that was a view to show incoming messages to that user, sorted by date_received.
// C is handling this for now.

import { ViewContainerColumn } from "./container";
import { ViewTypographyText } from "./typography";

// Placeholder component (C is working on this)

export const ViewPresetOptions = ({}: any) => {
  // A select/dropdown component to allow a user to switch presets.
  return (
    <ViewContainerColumn style={{ gap: 10 }}>
      {/* Presets are saved views for filtering, sorting, grouping (etc.) entities. See presets.tsx. */}
      <ViewTypographyText>Preset1</ViewTypographyText>

      <ViewTypographyText>Preset2</ViewTypographyText>

      <ViewTypographyText>New Preset</ViewTypographyText>
    </ViewContainerColumn>
  );
};
