const API_URL = 'http://localhost:5000/clientes';

export const customerService = {
  getAll: async () => {
    const res = await fetch(API_URL);
    return await res.json();
  },
  create: async (data) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  },
  updateStatus: async (id, status) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado: status })
    });
    return await res.json();
  },
  delete: async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return res.ok;
  }
};