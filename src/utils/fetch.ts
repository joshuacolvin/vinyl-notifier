import fetch from "node-fetch";

export default async function f(endpoint: string): Promise<string> {
  const response = await fetch(endpoint);
  return await response.text();
}
