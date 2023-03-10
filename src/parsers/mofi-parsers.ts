import { Cheerio, CheerioAPI, Element } from "cheerio";
import { MOFI_FILTERS } from "../constants/mofi-constants";

const ENDPOINT =
  process.env?.MOFI_ENDPOINT || "https://mofi.com/collections/back-in-stock";

export function mofiParser(elements: Cheerio<Element>, $: CheerioAPI): string {
  let result = `\n\n-------------\nIN STOCK MOFI\n-------------\n`;

  elements.each((_: number, el: Element) => {
    const content = $(el).text();
    const title = content?.split("-")?.[1]?.trim()?.toLowerCase() ?? "";

    if (!MOFI_FILTERS.ALBUMS.includes(title)) {
      result += `${content}\n`;
    }
  });

  return (result += `\n${ENDPOINT}`);
}
