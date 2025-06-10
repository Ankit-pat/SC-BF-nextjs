import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "../services/locale";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async (props): Promise<any> => {
  const locale = getUserLocale();
  console.log(props, 'props', (await cookies()).get('webuser'))
  
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_CDN_URL}euronature/translations/locales/${locale}/translations.json`,
  //   {
  //     cache: "no-cache",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   },
  // );
  // const translationJSON = await response.json();
  return {
    locale,
    messages: {
      "Title": "Here is title"
    },
  };
});
