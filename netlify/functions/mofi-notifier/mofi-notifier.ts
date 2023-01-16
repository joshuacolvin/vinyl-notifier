import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import { mofiScraper } from "../../../src/scrapers/mofi-scraper";
import fetch from "../../../src/utils/fetch";

const ENDPOINT =
  process.env?.MOFI_ENDPOINT || "https://mofi.com/collections/back-in-stock";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const body = await fetch(ENDPOINT);
  const result = await mofiScraper(body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: result,
    }),
  };
};
