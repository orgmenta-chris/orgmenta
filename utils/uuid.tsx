// This allows id generations for rows to be created here on the client / edge side (instead of on the cloud db side),
// so that we can make immediate/optimistic changes to the ui, cache and local database.

import "react-native-get-random-values"; // https://github.com/uuidjs/uuid#getrandomvalues-not-supported
import { v4, validate } from "uuid"; // https://www.npmjs.com/package/uuid

// v4

export type typeUuid4 = ReturnType<typeof createUuid4>;

export const createUuid4 = v4;

export const validateUuidType = validate;
