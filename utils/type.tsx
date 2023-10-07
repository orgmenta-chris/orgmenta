// A 'type' is a classification of entity.

// anagram: Cable Trip
export const arrayTypeMain = [
  "Area", //A 1  OR GROUP? this would possibly be better for implying 'categories' as well as 'areas' BUT would conflict with Group in the context of grouping, filtering etc.. (And, would allow us to move 'contact groups' in here... but is that a good thing? )
  "Contact", //C 2
  "Task", //T 3
  "Event", //E 4
  "Item", //I 5
  "Reference", //R 6
  "Place", //P 7 //was Location but L was used by Log. 
  "Blueprint",//B 8 //was template but T conflict (with 'template' and 'rule' as sub types/classes)? - this would actually mean we had a different starting character for each type (e.g. B for Blueprints) which could help with shortcuts.
  "Log", //L 9(was conflicting with Location but ok now.)
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
