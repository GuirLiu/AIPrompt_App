//define metadata in two ways:statically and dynamically
'use client';

import Image from "next/image";
import Feed from '@components/Feed';
import { use } from "react";
import { useSearchParams } from "next/navigation";

/*
//static meta data
export const metadata = {
  title:'Home Page'
}

//dynamic meta data
export async function generateMetadata({params, searchParams }) {
  const product = await getProduct(params.id);
  return {
    title:product.Home
  };
}

//output:
//<head><title>product name</title></head>
*/

export default function Home() {
  const searchParams = useSearchParams();
  const searchT = searchParams.get("search") || "";
  console.log("Search query from URL in Home component:", searchParams.get("search"));
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
      </p>
      <Feed searchT = {searchT}/>
    </section>
  );
}
