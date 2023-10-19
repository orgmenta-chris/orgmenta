import { useState, useCallback, useEffect } from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export const ViewThreadComponent = (props: any) => {
  // whatever arguments/parameters will be needed for this component
  // may be deconstructed from the props object
  const {} = props;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      // @ts-ignore
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ height: 500}}>
      <GiftedChat
        messages={messages}
        // @ts-ignore
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};
