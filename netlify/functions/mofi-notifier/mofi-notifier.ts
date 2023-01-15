import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import cheerio from "cheerio";
import fetch from "node-fetch";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const response = await fetch(
    "https://mofi.com/collections/back-in-stock/vinyl"
  );
  const body = await response.text();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: body,
    }),
  };
};
