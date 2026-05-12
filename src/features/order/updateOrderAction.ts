import { updateOrder } from "../../services/apiRestaurant";
import type { ActionFunctionArgs } from "react-router-dom";

export async function action({ params }: ActionFunctionArgs) {
  const data = { priority: true };
  if (!params.orderId) throw new Error("Missing orderId param");
  await updateOrder(params.orderId, data);
  return null;
}
