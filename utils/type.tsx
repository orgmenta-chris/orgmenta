// A 'type' is a classification of entity.

export const arrayTypeMain = [
  "Area",
  "Contact",
  "Task",
  "Event",
  "Item",
  "Reference",
  "Location",
  "Template", // OR BLUEPRINT (with 'template' and 'rule' as sub types/classes)? - this would actually mean we had a different starting character for each type (e.g. B for Blueprints) which could help with shortcuts.
  "Log",
];
export const arrayTypeIcons = ["todo"];

export const mapTypeMain = arrayTypeMain.map(
  (x) =>
    (x = {
      name_singular: x.toLowerCase(),
      name_plural: x.toLowerCase() + "s",
      display_singular: x,
      display_plural: x + "s",
      icon: "todo",
    } as any)
);
