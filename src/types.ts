export type Position = {
  latitude?: number;
  longitude?: number;
};

export type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients?: string[];
  soldOut: boolean;
  imageUrl?: string;
};

export type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Order = {
  id: number | string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItem[];
};

export type NewOrder = {
  customer: string;
  phone: string;
  address: string;
  cart: CartItem[];
  priority: boolean;
  position?: string;
};

