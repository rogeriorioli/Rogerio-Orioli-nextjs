import React from "react";
import SocialIcons from "../Components/SocialIcons";
import PageContainer from "./style";
import { FiCodepen, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { MdOutlineLogoDev } from "react-icons/md";
import CardPortifolio from "../Components/CardPortifolio";
import Title from "../Components/Title";
import Hero from "../Components/Hero";
import Head from "next/head";
import { useRouter } from "next/router";
import Layouts from "../Layouts";

const Home: React.FC = () => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Rogerio Orioli | Web Developer</title>
        <meta name="title" content="Rogerio Orioli | Web Developer" />
        <meta
          name="description"
          content="Paulistano, Web Developer and Graphic Designer whit solid knowledgment in Javascript and Wordpress , in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rogeriorioli.dev.br" />
        <meta property="og:title" content="Rogerio Orioli | Web Developer" />
        <meta
          property="og:description"
          content="Paulistano, Web Developer and Graphic Designer whit solid knowledgment in Javascript and Wordpress , in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript"
        />
        <meta property="og:image" content="/static/images/ogimage.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rogeriorioli.dev.br" />
        <meta
          property="twitter:title"
          content="Rogerio Orioli | Web Developer"
        />
        <meta
          property="twitter:description"
          content="Paulistano, Web Developer and Graphic Designer whit solid knowledgment in Javascript and Wordpress , in the short time skater and collector of Vinyl records. I like Music, technology, sports, gastronomy and movies. I do not refuse a good course, be with family and friends.I have great love for advertising, art and Javascript"
        />
        <meta property="twitter:image" content="/static/images/rogerioog.jpg" />
      </Head>
      <Layouts>
        <PageContainer>
          <div className="profile">
            <div className="profile-content">
              <Title contenTitle="HI! I'm Rogerio Orioli" />

              <p>
                Front end Developer with solid knowledge in JavaScript, HTML,
                CSS , always updated on the best tools libs and frameworks ,
                with passages in consultancies and agencies serving large
                customers and large projects both as a developer and web
                designer and also with knowledge in digital marketing, today
                very focused on full stack development with React and React
                native and Node Js.
              </p>
              <SocialIcons
                social={[
                  {
                    name: "github",
                    link: "https://github.com/rogeriorioli",
                    icon: <FiGithub size={25} color="#bd93f9" />,
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/rogeriorioli/",
                    icon: <FiLinkedin size={25} />,
                  },
                  {
                    name: "Dev.To",
                    link: "https://dev.to/rogeriorioli",
                    classFill: "fill",
                    icon: <MdOutlineLogoDev size={28} />,
                  },

                  {
                    name: "CodePen",
                    link: "https://codepen.io/rogeriorioli",
                    icon: <FiCodepen size={25} />,
                  },

                  // {
                  //   name: "WhatsApp",
                  //   link: "https://api.whatsapp.com/send?phone=5511972194218&text=Oi%20Rogerio venho através do seu site",
                  //   icon: <FiPhone size={25} />,
                  // },
                ]}
              />
            </div>
            <Hero />
          </div>
          <div className="container">
            <CardPortifolio />
          </div>
        </PageContainer>
      </Layouts>
    </>
  );
};

export default Home;
