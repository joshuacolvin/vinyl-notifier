import { Cheerio, CheerioAPI, Element } from "cheerio";
import { MOFI_FILTERS } from "../constants/mofi-constants";

export function mofiParser(elements: Cheerio<Element>, $: CheerioAPI): string {
  let result = "\n\n-------------\nIN STOCK MOFI\n-------------\n";

  elements.each((i: number, el: Element) => {
    const title = $(el).text()?.split("-")?.[1]?.trim()?.toLowerCase() ?? "";

    if (!MOFI_FILTERS.ALBUMS.includes(title)) {
      result += `${title}\n`;
    }
  });

  return result;
}
