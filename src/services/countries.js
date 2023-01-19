import { checkError, client } from './client.js';

export default async function fetchCountries() {
  const resp = await client.from('countries').select('*');
  console.log(resp, 'consolelog resp');
  return checkError(resp);
}
