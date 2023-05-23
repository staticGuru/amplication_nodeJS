import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DemoWhereInput = {
  dataCollections?: StringNullableFilter;
  id?: StringFilter;
};
