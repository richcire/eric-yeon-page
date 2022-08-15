import Head from "next/head";

const title = "Eric Yeon's Profile";
export default function Seo() {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="This page shows who is Eric Yeon. You can see his current skill stacks and projects he is involved"
      ></meta>
    </Head>
  );
}
