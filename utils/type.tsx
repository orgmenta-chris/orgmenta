// A 'type' is a classification of entity.

export const arrayTypeMain = [
    'Area',
    'Contact',
    'Task',
    'Event',
    'Item',
    'Reference',
    'Location',
    'Template',
    'Log',
]
export const arrayTypeIcons = [
   'todo'
]

export const mapTypeMain = arrayTypeMain.map(x=>x={
    name_singular: x.toLowerCase(),
    name_plural: x.toLowerCase()+'s',
    display_singular: x,
    display_plural: x+'s',
    icon: 'todo'
} as any)