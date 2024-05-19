import { createI18nServer } from "next-international/server";
type DictVariable = {
  [key: string]: DictVariable;
};

export type { DictVariable };


const locales = {
  pl: () => import("./pl"),
  uk: () => import("./uk"),
};

export const { getStaticParams, getCurrentLocale, getI18n, getScopedI18n } =
createI18nServer({
  pl: () => import("./pl"),
  uk: () => import("./uk"),
});
