// import { InfoOutlineIcon } from "@sanity/icons";
import {
  filteredDocumentListItems,
  // singletonDocumentListItem,
  // singletonDocumentListItems,
} from "sanity-plugin-singleton-tools";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Base")
    .items([
      // ...singletonDocumentListItems({ S, context }),
      // singletonDocumentListItem({
      //   S,
      //   context,
      //   type: "aboutPage",
      //   title: "About Page",
      //   id: "aboutPage",
      //   icon: InfoOutlineIcon,
      // }),
      // S.divider(),
      // ...S.documentTypeListItems(),
      // S.divider(),
      ...filteredDocumentListItems({ S, context }),
    ]);
