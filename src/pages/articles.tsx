import Axios from 'axios';
import { Head } from 'next/document';
import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiCodepen, FiPhone, FiDownload } from 'react-icons/fi';
import { ImNewspaper } from 'react-icons/im';
import Card from '../Components/Card';
import Hero from '../Components/Hero';
import SocialIcons from '../Components/SocialIcons';
import Title from '../Components/Title';
import Layouts from '../Layouts';
import PageContainer from './style';
import Container from '../Components/Card/styles';

// import { Container } from './styles';

const articles: React.FC = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    Axios.get('https://dev.to/api/articles?username=rogeriorioli')
      .then(success => {
        const { data } = success
        setPosts(data)
      })

  }, [])
  return (
    <>
      <Layouts>
        <div className="container">
          <Title contenTitle=" Blog Posts from Dev.to" >
            <ImNewspaper size={28} />
          </Title>
      <Container>
          {posts.map(post =>
            <Card
              key={post.id}
              title={post.title}
              slug={`articles/${post.slug}`}
              link={`articles/${post.id}`}
              alt={post.title}
              description={post.description}
              label={post.tags}
              userAvatar={post?.user.profile_image}
              username={post.user.username}
            />

          )}
          </Container>
        </div>
      </Layouts>
    </>
  );
}

export default articles;

