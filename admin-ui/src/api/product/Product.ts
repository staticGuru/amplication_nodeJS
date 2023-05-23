import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  itemType: string | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
