import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  itemType?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
