import { Pressable, View, Text } from "react-native";
import { url } from "./authConfig";
import {
  callMsGraphGET,
  callMsGraphPOST,
  callMsGraphPATCH,
  callMsGraphDELETE,
} from "./graphApiCall";
import React from "react";

// Mail folder functions (https://learn.microsoft.com/en-us/graph/api/resources/mailfolder?view=graph-rest-1.0)

export const me = async (token: string) => {
  const endpoint = `${url}/me`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const listMailFolders = async (token: string) => {
  const endpoint = `${url}/me/mailFolders`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const mailFolder = async (token: string, name: string) => {
  const endpoint = `${url}/me/mailFolders/${name}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

interface CreateMailFolder {
  displayName: string;
  isHidden: boolean;
}

export const createMailFolder = async (
  token: string,
  requestBody: CreateMailFolder
) => {
  const endpoint = `${url}/me/mailFolders`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const getMailFolder = async (token: string, id: string) => {
  const endpoint = `${url}/me/mailFolders/${id}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

interface UpdateMailFolder {
  displayName: string;
}

export const updateMailFolder = async (
  token: string,
  id: string,
  requestBody: UpdateMailFolder
) => {
  const endpoint = `${url}/me/mailFolders/${id}`;
  const data = await callMsGraphPATCH(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const deleteMailFolder = async (token: string, id: string) => {
  const endpoint = `${url}/me/mailFolders/${id}`;
  const data = await callMsGraphDELETE(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

interface CopyMailFolder {
  destinationId: string;
}

export const copyMailFolder = async (
  token: string,
  id: string,
  requestBody: CopyMailFolder
) => {
  const endpoint = `${url}/me/mailFolders/${id}/copy`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const listMessagesInMailFolder = async (token: string, id: string) => {
  const endpoint = `${url}/me/mailFolders/${id}/messages`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

// Messages functions (https://learn.microsoft.com/en-us/graph/api/resources/message?view=graph-rest-1.0)

export const listMessages = async (token: string) => {
  const endpoint = `${url}/me/messages`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const getMessage = async (token: string, id: string) => {
  const endpoint = `${url}/me/messages/${id}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const updateMessage = async (
  token: string,
  id: string,
  requestBody: any
) => {
  const endpoint = `${url}/me/messages/${id}`;
  const data = await callMsGraphPATCH(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const deleteMessage = async (token: string, id: string) => {
  const endpoint = `${url}/me/messages/${id}`;
  const data = await callMsGraphDELETE(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

interface CopyOrMoveMessage {
  destinationId: string;
}

export const copyMessage = async (
  token: string,
  id: string,
  requestBody: CopyOrMoveMessage
) => {
  const endpoint = `${url}/me/messages/${id}/copy`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const moveMessage = async (
  token: string,
  id: string,
  requestBody: CopyOrMoveMessage
) => {
  const endpoint = `${url}/me/messages/${id}/move`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

interface ReplyToMessage {
  comment: string;
  message: any;
}

export const replyTOMessage = async (
  token: string,
  id: string,
  requestBody: ReplyToMessage
) => {
  const endpoint = `${url}/me/messages/${id}/reply`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

interface ForwardMessage {
  comment: string;
  toRecipients: any[];
}

export const forwardMessage = async (
  token: string,
  id: string,
  requestBody: ForwardMessage
) => {
  const endpoint = `${url}/me/messages/${id}/forward`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export interface SendMail {
  message: any;
  saveToSentItems: boolean;
}

export const sendMessage = async (token: string, requestBody: SendMail) => {
  const endpoint = `${url}/me/sendMail`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

// Calendar functions (https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0)

export const listCalendars = async (token: string) => {
  const endpoint = `${url}/me/calendars`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const getCalendar = async (token: string) => {
  const endpoint = `${url}/me/calendar`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const listEvents = async (token: string) => {
  const endpoint = `${url}/me/calendar/events`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const getEvent = async (token: string, id: string) => {
  const endpoint = `${url}/me/calendar/events/${id}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const createEvent = async (token: string, requestBody: any) => {
  const endpoint = `${url}/me/calender/events`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const updateEvent = async (
  token: string,
  id: string,
  requestBody: any
) => {
  const endpoint = `${url}/me/calender/events/${id}`;
  const data = await callMsGraphPATCH(token, endpoint, requestBody);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const deleteEvent = async (token: string, id: string) => {
  const endpoint = `${url}/me/calender/events/${id}`;
  const data = await callMsGraphDELETE(token, endpoint);

  console.log(JSON.stringify(data, null, 2));

  // Do something with the data
};

export const createSubscription = async (token: string) => {
  const endpoint = "https://graph.microsoft.com/v1.0/subscriptions";

  const expirationDate = new Date();

  // Set the expiration date to 7 days from the current date and time
  expirationDate.setDate(expirationDate.getDate() + 7);

  const requestBody = {
    changeType: "created",
    notificationUrl:
      "https://qfiulevnnvsptiwtwvuz.supabase.co/functions/v1/ms-graph-email-connect",
    resource: "me/mailFolders('Inbox')/messages",
    expirationDateTime: expirationDate.toISOString(),
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const MSGraph = ({ token }: any) => {
  const functionList = [
    {
      name: "Me",
      func: me,
      args: [token?.accessToken],
    },
    {
      name: "List Mail Folders",
      func: listMailFolders,
      args: [token?.accessToken],
    },
    {
      name: "Mail Folder",
      func: mailFolder,
      args: [token?.accessToken, "inbox"],
    },
    {
      name: "Create Mail Folder",
      func: createMailFolder,
      args: [
        token?.accessToken,
        { displayName: "NewFolderName", isHidden: false },
      ],
    },
    {
      name: "Get Mail Folder",
      func: getMailFolder,
      args: [token?.accessToken, "FolderId"],
    },
    {
      name: "Update Mail Folder",
      func: updateMailFolder,
      args: [
        token?.accessToken,
        "FolderId",
        { displayName: "UpdatedFolderName" },
      ],
    },
    {
      name: "Delete Mail Folder",
      func: deleteMailFolder,
      args: [token?.accessToken, "FolderId"],
    },
    {
      name: "Copy Mail Folder",
      func: copyMailFolder,
      args: [
        token?.accessToken,
        "FolderId",
        { destinationId: "DestinationFolderId" },
      ],
    },
    {
      name: "List Messages in Mail Folder",
      func: listMessagesInMailFolder,
      args: [
        token?.accessToken,
        "AQMkADkzNTZlYWU3LTJmNjMtNDYyYS04M2E1LTYzNWRhZGFjM2QzNAAuAAADHc44sfjOfEiLo9PV3Y3yJQEAEFaZqCOYV0ymQCbe466hAAADAQwAAAA=",
      ],
    },
    {
      name: "List Messages",
      func: listMessages,
      args: [token?.accessToken],
    },
    {
      name: "Get Message",
      func: getMessage,
      args: [token?.accessToken, "MessageId"],
    },
    {
      name: "Update Message",
      func: updateMessage,
      args: [
        token?.accessToken,
        "MessageId",
        {
          /* requestBody */
        },
      ],
    },
    {
      name: "Delete Message",
      func: deleteMessage,
      args: [token?.accessToken, "MessageId"],
    },
    {
      name: "Copy Message",
      func: copyMessage,
      args: [
        token?.accessToken,
        "MessageId",
        { destinationId: "DestinationFolderId" },
      ],
    },
    {
      name: "Move Message",
      func: moveMessage,
      args: [
        token?.accessToken,
        "MessageId",
        { destinationId: "DestinationFolderId" },
      ],
    },
    {
      name: "Reply To Message",
      func: replyTOMessage,
      args: [
        token?.accessToken,
        "MessageId",
        {
          comment: "ReplyComment",
          message: {
            /* message data */
          },
        },
      ],
    },
    {
      name: "Forward Message",
      func: forwardMessage,
      args: [
        token?.accessToken,
        "MessageId",
        {
          comment: "ForwardComment",
          toRecipients: [
            /* recipients */
          ],
        },
      ],
    },
    {
      name: "Send Message",
      func: sendMessage,
      args: [
        token?.accessToken,
        {
          message: {
            subject: "Meet for lunch?",
            body: {
              contentType: "Text",
              content: "VGhpcyBpcyBhIHN0cmluZw==",
            },
            toRecipients: [
              {
                emailAddress: {
                  address: "frannis@contoso.onmicrosoft.com",
                },
              },
            ],
            ccRecipients: [
              {
                emailAddress: {
                  address: "danas@contoso.onmicrosoft.com",
                },
              },
            ],
          },
          saveToSentItems: "false",
        },
      ],
    },
    {
      name: "List Calendars",
      func: listCalendars,
      args: [token?.accessToken],
    },
    {
      name: "Get Calendar",
      func: getCalendar,
      args: [token?.accessToken],
    },
    {
      name: "List Events",
      func: listEvents,
      args: [token?.accessToken],
    },
    {
      name: "Get Event",
      func: getEvent,
      args: [token?.accessToken, "EventId"],
    },
    {
      name: "Create Event",
      func: createEvent,
      args: [
        token?.accessToken,
        {
          /* requestBody */
        },
      ],
    },
    {
      name: "Update Event",
      func: updateEvent,
      args: [
        token?.accessToken,
        "EventId",
        {
          /* requestBody */
        },
      ],
    },
    {
      name: "Delete Event",
      func: deleteEvent,
      args: [token?.accessToken, "EventId"],
    },
    {
      name: "Create Subscription",
      func: createSubscription,
      args: [token?.accessToken],
    },
  ];

  const executeFunction = async (func: Function, args: any) => {
    try {
      const data = await func(...args);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {functionList.map((elem, index) => (
        <Pressable
          key={index}
          onPress={() => executeFunction(elem.func, elem.args)}
          style={{
            backgroundColor: "#007AFF",
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "#FFF" }}>{elem.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};
