import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import cheerio from "cheerio";
import fetch from "../../../src/utils/fetch";

const API_ENDPOINT = "https://mofi.com/collections/back-in-stock/vinyl";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const body = await fetch(API_ENDPOINT);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: body,
    }),
  };
};
