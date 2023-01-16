import { load } from "cheerio";
import { mofiParser } from "../parsers/mofi-parsers";

export function mofiScraper(body: string): string {
  const $ = load(body);
  const elements = $(".product-item__title a");
  return mofiParser(elements, $);
}
