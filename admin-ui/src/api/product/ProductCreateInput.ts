import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  itemType?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
