import { updateOrder } from "../../services/apiRestaurant";

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

