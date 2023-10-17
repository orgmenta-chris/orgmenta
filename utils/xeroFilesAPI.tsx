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

export const XeroGetAssociations = async (props: any) => {
  const { access_token, fileId } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}/Associations`;

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
    console.error("Error fetching associations:", error);
    throw error;
  }
};

export const XeroCreateAssociation = async (props: any) => {
  const { access_token, fileId, objectId, objectGroup } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}/Associations`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const associationData = {
    ObjectId: objectId,
    ObjectGroup: objectGroup,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(associationData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating association:", error);
    throw error;
  }
};

export const XeroDeleteAssociation = async (props: any) => {
  const { access_token, fileId, associationId } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}/Associations/${associationId}`;

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

    return "Association deleted successfully";
  } catch (error) {
    console.error("Error deleting association:", error);
    throw error;
  }
};

export const XeroGetFiles = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/files.xro/1.0/Files";

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
    console.error("Error fetching files:", error);
    throw error;
  }
};

export const XeroGetFileContent = async (props: any, fileId: string) => {
  const { access_token } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}/Content`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Return the raw file content
    return response.blob();
  } catch (error) {
    console.error("Error fetching file content:", error);
    throw error;
  }
};

export const XeroUploadFile = async (props: any, fileData: File) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/files.xro/1.0/Files";

  const headers = {
    Authorization: `Bearer ${access_token}`,
  };

  const formData = new FormData();
  formData.append("file", fileData, fileData.name);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const XeroRenameFile = async (
  props: any,
  fileId: string,
  newName: string
) => {
  const { access_token } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const renameData = {
    Name: newName,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(renameData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error renaming file:", error);
    throw error;
  }
};

export const XeroMoveFile = async (
  props: any,
  fileId: string,
  folderId: string
) => {
  const { access_token } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const moveData = {
    FolderId: folderId,
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(moveData),
    });

    if (!response.ok) {
      throw Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error moving file:", error);
    throw error;
  }
};

export const XeroDeleteFile = async (props: any, fileId: string) => {
  const { access_token } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Files/${fileId}`;

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

    return "File deleted successfully";
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
};

// GET Folders
export const XeroGetFolders = async (props: any) => {
  const { access_token } = props;

  const apiUrl = "https://api.xero.com/files.xro/1.0/Folders";

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
    console.error("Error fetching folders:", error);
    throw error;
  }
};

// POST Folders (Create a folder)
export const XeroCreateFolder = async (props: any) => {
  const { access_token, folderData } = props;

  const apiUrl = "https://api.xero.com/files.xro/1.0/Folders";

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(folderData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

// PUT Folders (Rename a folder)
export const XeroRenameFolder = async (props: any) => {
  const { access_token, folderId, folderData } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Folders/${folderId}`;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(folderData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error renaming folder:", error);
    throw error;
  }
};

// DELETE Folders (Delete a folder)
export const XeroDeleteFolder = async (props: any) => {
  const { access_token, folderId } = props;

  const apiUrl = `https://api.xero.com/files.xro/1.0/Folders/${folderId}`;

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

    return "Folder deleted successfully";
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};


