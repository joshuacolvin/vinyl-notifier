import {
  Handler,
  HandlerContext,
  HandlerEvent,
  schedule,
} from "@netlify/functions";
import { mofiScraper } from "../../../src/scrapers/mofi-scraper";
import fetch from "../../../src/utils/fetch";

const ENDPOINT =
  process.env?.MOFI_ENDPOINT || "https://mofi.com/collections/back-in-stock";

const CRON = "59 00 * * *";

export const handler: Handler = schedule(
  CRON,
  async (event: HandlerEvent, context: HandlerContext) => {
    const body = await fetch(ENDPOINT);
    const result = await mofiScraper(body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: result,
      }),
    };
  }
);
