import Axios from 'axios';
import { Head } from 'next/document';
import React, { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiCodepen, FiPhone, FiDownload } from 'react-icons/fi';
import Card from '../Components/Card';
import Hero from '../Components/Hero';
import SocialIcons from '../Components/SocialIcons';
import Title from '../Components/Title';
import Layouts from '../Layouts';
import PageContainer from './style';

// import { Container } from './styles';

const blog: React.FC = () => {
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
        <PageContainer>
          <div className="profile">
            <div className="profile-content">

              <Title contenTitle="HI! I'm Rogerio Orioli" />
              <p>
                Front end Developer with solid knowledge in JavaScript, HTML, CSS , always updated on the best tools libs and frameworks , with passages in consultancies and agencies serving large customers and large projects both as a developer and web designer and also with knowledge in digital marketing, today very focused on full stack development with React and React native and Node Js.
              </p>
              <SocialIcons
                social={[
                  {
                    name: 'github',
                    link: 'https://github.com/rogeriorioli',
                    icon: <FiGithub size={25} color="#bd93f9" />
                  },
                  {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/rogeriorioli/',
                    icon: <FiLinkedin size={25} />
                  },
                  {
                    name: 'Twitter',
                    link: 'https://twitter.com/RogerioOrioli',
                    icon: <FiTwitter size={25} />
                  },
                  {
                    name: 'CodePen',
                    link: 'https://codepen.io/rogeriorioli',
                    icon: <FiCodepen size={25} />
                  },

                  {
                    name: 'WhatsApp',
                    link: 'https://api.whatsapp.com/send?phone=5511989885408&text=Oi%20Rogerio',
                    icon: <FiPhone size={25} />
                  },
                  {
                    name: 'Download profile',
                    link: 'https://docs.google.com/document/d/1APFhxIqI9mvf1UlefMoync4-dUWSjRY6N_S86vk3AVU/edit?usp=sharing',
                    icon: <FiDownload size={25} />
                  }
                ]}

              />
            </div>
            <Hero />
          </div>
          <div className="container">
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
          </div>
        </PageContainer>
      </Layouts>
    </>
  );
}

export default blog;

