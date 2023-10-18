import {
  XERO_STAGING_CLIENT_ID,
  XERO_STAGING_CLIENT_SECRET,
  XERO_ACCESS_TOKEN,
  // @ts-ignore
} from "@env";
import { VaultGetSecret } from "./vault";
import { View, Pressable, Text } from "react-native";

let clientID: any = "";
let clientSecret: any = "";

if (__DEV__) {
  clientID = XERO_STAGING_CLIENT_ID;
  clientSecret = XERO_STAGING_CLIENT_SECRET;
} else {
  clientID = VaultGetSecret("XERO_PRODUCTION_CLIENT_ID");
  clientSecret = VaultGetSecret("XERO_PRODUCTION_CLIENT_SECRET");
}

import { accessToken } from "./xero";

export const XeroGetProjects = async (props: any) => {
  const {
    access_token,
    projectId,
    projectIds,
    contactID,
    states,
    page,
    pageSize,
  } = props;

  let apiUrl = "https://api.xero.com/projects.xro/2.0/projects";

  if (projectId) {
    apiUrl += `/${projectId}`;
  } else if (projectIds) {
    apiUrl += `?projectIDs=${projectIds}`;
  } else {
    const queryParams = [];

    if (contactID) queryParams.push(`contactId=${contactID}`);
    if (states) queryParams.push(`states=${states}`);
    if (page) queryParams.push(`page=${page}`);
    if (pageSize) queryParams.push(`pageSize=${pageSize}`);

    if (queryParams.length > 0) {
      apiUrl += `?${queryParams.join("&")}`;
    }
  }

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const XeroCreateProject = async (props: any) => {
  const { access_token, contactId, name, deadlineUtc, estimateAmount } = props;

  const apiUrl = "https://api.xero.com/projects.xro/2.0/projects";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const projectData = {
    contactId,
    name,
    deadlineUtc,
    estimateAmount,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

export const XeroUpdateProject = async (props: any) => {
  const { access_token, projectId, name, deadlineUtc, estimateAmount } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const projectData = {
    name,
    deadlineUtc,
    estimateAmount,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating project:", error);
    throw error;
  }
};

export const XeroUpdateProjectStatus = async (props: any) => {
  const { access_token, projectId, status } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const statusData = {
    status,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(statusData),
    });

    if (!response.ok) {
      throw Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating project status:", error);
    throw error;
  }
};

export const XeroGetTasks = async (props: any) => {
  const { access_token, projectId, taskIds, chargeType, page, pageSize } =
    props;

  let apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/tasks`;

  // Append query parameters if provided
  if (taskIds) {
    apiUrl += `?taskIds=${taskIds}`;
  } else {
    apiUrl += `?chargeType=${chargeType}`;
  }

  if (page) {
    apiUrl += `&page=${page}`;
  }

  if (pageSize) {
    apiUrl += `&pageSize=${pageSize}`;
  }

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const XeroCreateTask = async (props: any) => {
  const { access_token, projectId, taskData } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/tasks`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const XeroUpdateTask = async (props: any) => {
  const { access_token, projectId, taskId, taskData } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/tasks/${taskId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const XeroDeleteTask = async (props: any) => {
  const { access_token, projectId, taskId } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/tasks/${taskId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Task deleted successfully";
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const XeroGetTime = async (props: any) => {
  const {
    access_token,
    projectId,
    timeEntryId,
    userId,
    taskId,
    dateAfterUtc,
    dateBeforeUtc,
    isChargeable,
    invoiceId,
    contactId,
    states,
    page,
    pageSize,
  } = props;

  let apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/time`;

  const queryParams = [];

  if (timeEntryId) queryParams.push(`timeEntryId=${timeEntryId}`);
  if (userId) queryParams.push(`userId=${userId}`);
  if (taskId) queryParams.push(`taskId=${taskId}`);
  if (dateAfterUtc) queryParams.push(`dateAfterUtc=${dateAfterUtc}`);
  if (dateBeforeUtc) queryParams.push(`dateBeforeUtc=${dateBeforeUtc}`);
  if (isChargeable) queryParams.push(`chargeType=${isChargeable}`);
  if (invoiceId) queryParams.push(`invoiceId=${invoiceId}`);
  if (contactId) queryParams.push(`contactId=${contactId}`);
  if (states) queryParams.push(`states=${states}`);
  if (page) queryParams.push(`page=${page}`);
  if (pageSize) queryParams.push(`pageSize=${pageSize}`);

  if (queryParams.length > 0) {
    apiUrl += `?${queryParams.join("&")}`;
  }

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching time entries:", error);
    throw error;
  }
};

export const XeroCreateTimeEntry = async (props: any) => {
  const {
    access_token,
    projectId,
    userId,
    taskId,
    dateUtc,
    duration,
    description,
  } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/time`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const timeEntryData = {
    userId,
    taskId,
    dateUtc,
    duration,
    description,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(timeEntryData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating time entry:", error);
    throw error;
  }
};

export const XeroUpdateTimeEntry = async (props: any) => {
  const {
    access_token,
    projectId,
    timeEntryId,
    userId,
    taskId,
    dateUtc,
    duration,
    description,
  } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/time/${timeEntryId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const timeEntryData = {
    userId,
    taskId,
    dateUtc,
    duration,
    description,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(timeEntryData),
    });

    if (!response.ok) {
      throw Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating time entry:", error);
    throw error;
  }
};

export const XeroDeleteTimeEntry = async (props: any) => {
  const { access_token, projectId, timeEntryId } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projects/${projectId}/time/${timeEntryId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return "Time entry deleted successfully";
  } catch (error) {
    console.error("Error deleting time entry:", error);
    throw error;
  }
};

export const XeroGetProjectsUsers = async (props: any) => {
  const { access_token, page = 1, pageSize = 50 } = props;

  const apiUrl = `https://api.xero.com/projects.xro/2.0/projectsusers?page=${page}&pageSize=${pageSize}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    Accept: "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching projects users:", error);
    throw error;
  }
};
