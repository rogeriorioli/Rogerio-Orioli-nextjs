import React, { useEffect, useState } from 'react'
import Seo from '../../Components/Seo'
import SocialIcons from '../../Components/SocialIcons';
import PageContainer from '../style';
import { FiCodepen, FiGithub, FiLinkedin, FiPhone, FiDownload, FiTwitter } from 'react-icons/fi'
import CardPortifolio from '../../Components/CardPortifolio';
import Title from '../../Components/Title';
import Hero from '../../Components/Hero';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layouts from '../../Layouts';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';


interface PostProps {
  cover_image: string;
  title: string;
  body_markdown: string;
  description: string;
  social_image: string
}

const Post = ({ id }) => {
  const route = useRouter()
  const [post, setPost] = useState<PostProps>()

  useEffect(() => {
    axios.get(`https://dev.to/api/articles/${id}`)
      .then(success => {
        const { data } = success
        setPost(data)
      })

  }, [])
  console.log(post)
  return (
    <>

      <Head>

        <title>Rogerio Orioli | {post?.title}</title>
        <meta name="title" content={`Rogerio Orioli | ${post?.title}`} />
        <meta name="description" content={post?.description} />


        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://rogeriorioli.dev.br/articles/${id}`} />
        <meta property="og:title" content={`Rogerio Orioli | ${post?.title}`} />
        <meta property="og:description" content={post?.description} />
        <meta property="og:image" content={post?.social_image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`Rogerio Orioli | ${post?.title}`} />
        <meta property="twitter:title" content={`Rogerio Orioli | ${post?.title}`} />
        <meta property="twitter:description" content={post?.description} />
        <meta property="twitter:image" content={post?.social_image} />


      </Head>
      <Layouts>
        <PageContainer>
          <div className="container">
            <article className="post">
              <h1>{post?.title}</h1>
              <img className="cover_image" src={post?.cover_image} alt={post?.title} />
              <ReactMarkdown >
                {post?.body_markdown}
              </ReactMarkdown>
            </article>
          </div>
        </PageContainer>
      </Layouts>
    </>
  );
}

export default Post;

Post.getInitialProps = ({ query: { id } }) => {
  return { id };
};