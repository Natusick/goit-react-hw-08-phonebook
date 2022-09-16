import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com";

export async function addContactsApi (contacts) {
  return  await axios.post(`${BASE_URL}/contacts`, contacts);
};

export async function getContactsApi () {
  return await axios.get(`${BASE_URL}/contacts`);
};

export async function removeContactsApi (contactId) {
  return await axios.delete(`${BASE_URL}/contacts/${contactId}`);
};
