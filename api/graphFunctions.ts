import { url } from "./authConfig";
import {
  callMsGraphGET,
  callMsGraphPOST,
  callMsGraphPATCH,
  callMsGraphDELETE,
} from "./graphApiCall";

// Mail folder functions (https://learn.microsoft.com/en-us/graph/api/resources/mailfolder?view=graph-rest-1.0)

export const me = async (token: string) => {
  const endpoint = `${url}/me`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const listMailFolders = async (token: string) => {
  const endpoint = `${url}/me/mailFolders`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const mailFolder = async (token: string, name: string) => {
  const endpoint = `${url}/me/mailFolders/${name}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

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

  console.log(data);

  // Do something with the data
};

export const getMailFolder = async (token: string, id: string) => {
  const endpoint = `${url}/me/mailFolders/${id}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

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

  console.log(data);

  // Do something with the data
};

export const deleteMailFolder = async (token: string, id: string) => {
  const endpoint = `${url}/me/mailFolders/${id}`;
  const data = await callMsGraphDELETE(token, endpoint);

  console.log(data);

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

  console.log(data);

  // Do something with the data
};

export const listMessagesInMailFolder = async (token: string, id: string) => {
  const endpoint = `${url}/me/mailFolders/${id}/messages`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

// Messages functions (https://learn.microsoft.com/en-us/graph/api/resources/message?view=graph-rest-1.0)

export const listMessages = async (token: string) => {
  const endpoint = `${url}/me/messages`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const getMessage = async (token: string, id: string) => {
  const endpoint = `${url}/me/messages/${id}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const updateMessage = async (
  token: string,
  id: string,
  requestBody: any
) => {
  const endpoint = `${url}/me/messages/${id}`;
  const data = await callMsGraphPATCH(token, endpoint, requestBody);

  console.log(data);

  // Do something with the data
};

export const deleteMessage = async (token: string, id: string) => {
  const endpoint = `${url}/me/messages/${id}`;
  const data = await callMsGraphDELETE(token, endpoint);

  console.log(data);

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

  console.log(data);

  // Do something with the data
};

export const moveMessage = async (
  token: string,
  id: string,
  requestBody: CopyOrMoveMessage
) => {
  const endpoint = `${url}/me/messages/${id}/move`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(data);

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

  console.log(data);

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

  console.log(data);

  // Do something with the data
};

interface SendMail {
  message: any;
  saveToSentItems: boolean;
}

export const sendMessage = async (
  token: string,
  id: string,
  requestBody: SendMail
) => {
  const endpoint = `${url}/me/sendMail`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(data);

  // Do something with the data
};

// Calendar functions (https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0)

export const listCalendars = async (token: string) => {
  const endpoint = `${url}/me/calendars`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const getCalendar = async (token: string) => {
  const endpoint = `${url}/me/calendar`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const listEvents = async (token: string) => {
  const endpoint = `${url}/me/calendar/events`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const getEvent = async (token: string, id: string) => {
  const endpoint = `${url}/me/calendar/events/${id}`;
  const data = await callMsGraphGET(token, endpoint);

  console.log(data);

  // Do something with the data
};

export const createEvent = async (token: string, requestBody: any) => {
  const endpoint = `${url}/me/calender/events`;
  const data = await callMsGraphPOST(token, endpoint, requestBody);

  console.log(data);

  // Do something with the data
};

export const updateEvent = async (
  token: string,
  id: string,
  requestBody: any
) => {
  const endpoint = `${url}/me/calender/events/${id}`;
  const data = await callMsGraphPATCH(token, endpoint, requestBody);

  console.log(data);

  // Do something with the data
};

export const deleteEvent = async (token: string, id: string) => {
  const endpoint = `${url}/me/calender/events/${id}`;
  const data = await callMsGraphDELETE(token, endpoint);

  console.log(data);

  // Do something with the data
};
