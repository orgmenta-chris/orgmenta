// Placeholder
// For meta data / meta information about a system/process/machine/module/unit/declaration


export const createMetaInfo = ({description,notes,type,request,hook}: TypeMetaInfo) => {
  console.info('createMetaInfo - todo. currently just checks the type (in an elaborate unnecessary way). will eventually do more.')
  return {description,notes,type,request,hook}
}

export type TypeMetaInfo = {
  description: string,
  notes: string,
  type: string,
  request: string,
  hook: string,
}