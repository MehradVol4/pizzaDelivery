const API_URL = 'https://react-fast-pizza-api.jonas.io/api';

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);


  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(`Failed creating order (${res.status})`);
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw new Error('Failed creating your order', { cause: err });
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error(`Failed updating order (${res.status})`);
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw new Error('Failed updating your order', { cause: err });
  }
}
