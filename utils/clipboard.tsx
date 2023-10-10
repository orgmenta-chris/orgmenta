import { useReactState } from "./react";
import { ViewButtonPressable } from "./button";
import { ViewContainerStatic } from "./container";
import { ViewTypographyText } from "./typography";
import { ViewInputText } from "./input";
import { ViewIconMain } from "./icon";
import * as Clipboard from "expo-clipboard";

// COPY

export const asyncClipboardCopy = async (text: string) => {
  await Clipboard.setStringAsync(text);
};

export const ViewClipboardCopy = ({ text, style }: TypeClipboardCopy) => {
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor: "gray",
        ...style,
      }}
      onPress={() => asyncClipboardCopy(text)}
    >
      <ViewIconMain name={"copy"} source={"Feather"} color="white" />
    </ViewButtonPressable>
  );
};

export type TypeClipboardCopy = {
  text: string;
  style: any;
};

// PASTE

export const asyncClipboardPaste = async () => {
  return await Clipboard.getStringAsync();
};

// TEXT

export const ViewClipboardPaste = ({ text, style }: TypeClipboardPaste) => {
  return (
    <ViewButtonPressable
      style={{
        padding: 5,
        backgroundColor: "gray",
        ...style,
      }}
      onPress={asyncClipboardPaste}
    >
      <ViewIconMain name={"paste"} source={"Feather"} color="white" />
    </ViewButtonPressable>
  );
};

export type TypeClipboardPaste = {
  text: string;
  style: any;
};

/////////////////////////////////////

// EXAMPLE (to format / remove / use for reference/testing of above components)

export const ViewClipboardExample = ({}: any) => {
  const [copiedText, setCopiedText] = useReactState("");
  const [sampleText, setSampleText] = useReactState(
    "This is sample text you can edit. Copy to clipboard"
  );

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(sampleText);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <ViewContainerStatic
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <ViewInputText
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: "95%",
          textAlign: "center",
        }}
        onChangeText={setSampleText}
        value={sampleText}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <ViewButtonPressable onPress={copyToClipboard}>
        <ViewTypographyText>Copy to clipboard</ViewTypographyText>
      </ViewButtonPressable>
      <ViewButtonPressable onPress={fetchCopiedText}>
        <ViewTypographyText>View copied text"</ViewTypographyText>
      </ViewButtonPressable>

      <ViewTypographyText
        style={{
          fontSize: 20,
          marginVertical: 10,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {copiedText}
      </ViewTypographyText>
    </ViewContainerStatic>
  );
};

export const ViewCopyIcon = ({}: any) => {
  return <ViewIconMain name={"copy"} source={"Feather"} color="black" />;
};
