// Exposes domain-specific CRUD functions while hiding HTTP details from pages.
import httpClient from './httpClient';

export const listItems = async (params = {}) => (await httpClient.get('/items', { params })).data;
export const getItem = async (id) => (await httpClient.get(`/items/${id}`)).data;
export const createItem = async (values) => (await httpClient.post('/items', values)).data;
export const updateItem = async (id, values) => (await httpClient.put(`/items/${id}`, values)).data;
export const patchItem = async (id, values) => (await httpClient.patch(`/items/${id}`, values)).data;
export const deleteItem = async (id) => (await httpClient.delete(`/items/${id}`)).data;
