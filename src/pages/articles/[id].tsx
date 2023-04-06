import React from "react";

import PageContainer from "../style";

import Head from "next/head";
import Layouts from "../../Layouts";
import axios from "axios";
import ReactMarkdown from "react-markdown";

interface PostProps {
  cover_image: string;
  title: string;
  body_markdown: string;
  description: string;
  social_image: string;
  id: string;
}

const Post = ({
  cover_image,
  title,
  body_markdown,
  description,
  social_image,
  id,
}: PostProps) => {
  return (
    <>
      <Head>
        <title>{`Rogerio Orioli | ${title}`}</title>
        <meta name="title" content={`Rogerio Orioli | ${title}`} />
        <meta name="description" content={description} />

        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://rogeriorioli.dev.br/articles/${id}}`}
        />
        <meta property="og:title" content={`Rogerio Orioli | ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={social_image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`Rogerio Orioli | ${title}`} />
        <meta property="twitter:title" content={`Rogerio Orioli | ${title}`} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={social_image} />
      </Head>
      <Layouts>
        <PageContainer>
          <div className="container">
            <article className="post">
              <h1>{title}</h1>
              <img className="cover_image" src={cover_image} alt={title} />
              <ReactMarkdown>{body_markdown}</ReactMarkdown>
            </article>
          </div>
        </PageContainer>
      </Layouts>
    </>
  );
};

export async function getStaticPaths() {
  const { data: posts } = await axios.get(
    "https://dev.to/api/articles?username=rogeriorioli"
  );
  const paths = posts.map((post) => `/articles/${post.id}`);
  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const { data: post } = await axios.get<PostProps>(
    `https://dev.to/api/articles/${params.id}`
  );
  return {
    props: {
      cover_image: post.cover_image,
      title: post.title,
      body_markdown: post.body_markdown,
      description: post.description,
      social_image: post.social_image,
      id: post.id,
    },
    revalidate: 1,
  };
};

export default Post;
