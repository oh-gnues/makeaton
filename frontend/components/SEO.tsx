import type { NextComponentType } from "Next";
import Head from "next/head";
import { NextPage } from "next";

interface ITitle {
  [key: string]: string;
}

export default function SEO({ title }: ITitle): JSX.Element {
  return (
    <Head>
      <title>{title} | CupidWel</title>
    </Head>
  );
}
