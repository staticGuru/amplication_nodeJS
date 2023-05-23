import { SortOrder } from "../../util/SortOrder";

export type DemoOrderByInput = {
  createdAt?: SortOrder;
  dataCollections?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
