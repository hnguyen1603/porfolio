import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import picture from '../public/images/hinh em2.jpg';
import { Arvo } from 'next/font/google';
const arvo = Arvo({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const displayContent = (e) => {
  // const keys = Object.keys(project);
  // keys.forEach((key, index) => {
  //   console.log('key: ' + key);
  //   console.log('value: ' + index);
  // });
  return <p>FUNCTION</p>;
};

const HomeComponent = () => {
  const project = {
    'EVENTS HEAD': {
      year: 2030,
      technology: ['The Sunflute Garden'],
      content:
        "I lead a team of 20 people in communicating, planning, and carrying out events for clients. We come up with creative ways to execute our clients' most important celebrations, be it a wedding, anniversary, or going-away party. Our team coordinates with various brands and companies to ensure that our events have impressive decor, comfortable furniture, and delicious food. We also work closely with the country's best venues.",
    },
    'EVENTS PLANNER': {
      year: 2025,
      technology: ['Party Flexta Co.'],
      content:
        "I lead a team of 20 people in communicating, planning, and carrying out events for clients. We come up with creative ways to execute our clients' most important celebrations, be it a wedding, anniversary, or going-away party. Our team coordinates with various brands and companies to ensure that our events have impressive decor, comfortable furniture, and delicious food. We also work closely with the country's best venues.",
    },
    'ASSISTANT PLANNER': {
      year: 2030,
      technology: ['Pike Party and Place Co.'],
      content:
        'I worked as an assistant to the head planner and accomplished paperwork for the company. Aside from helping secure venues and caterers, I helped draft client contracts and venue permits. I went to different locations with clients as part of the planning phase. I also assisted our partner companies as they provided food and entertainment during these events.',
    },
  };
  function displayContent() {
    return (
      <>
        {' '}
        {Object.entries(project).map((value) => {
          const projectName = value[0];
          const year = value[1].year;
          const technology = value[1].technology[0];
          const content = value[1].content;
          return (
            <div className="flex px-20 mb-10">
              <h3 className="font-semibold mx-10 text-lg">{year}</h3>
              <article>
                <h3 className="font-semibold text-lg">{projectName}</h3>
                <h4 className="mt-3 mb-6 text-md font-light">{technology}</h4>
                <p className="tracking-wide leading-6 font-normal">{content}</p>
              </article>
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div>
      <div className="flex">
        <div className="homepic flex-auto w-80">
          <Image
            className="object-cover"
            src={picture} // Route of the image file
            alt="Your Name"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <section className="intro flex flex-col flex-auto w-20 justify-around  bg-black">
          <div className="px-20 text-left text-white">
            <h1 className=" text-8xl font-semibold">Huy Nguyen</h1>
            <h2 className=" mt-3  text-4xl font-medium">Software Developer</h2>
          </div>
          <button className="w-52 flex-none mx-auto bg-black hover:opacity-80 text-white text-lg font-medium py-2 px-4 border border-4 border-white shadow">
            See More
          </button>
        </section>
      </div>
      <div className="flex">
        <section className="intro flex flex-col flex-auto w-80 justify-around bg-white py-10">
          <h2
            style={{
              marginBottom: '40%',
            }}
            className="mx-20 pb-4 text-left border-b border-solid text-xl text-black font-bold"
          >
            WHO I AM
          </h2>
          <div className="text-left text-black px-20">
            <h2 className=" text-5xl font-bold pb-4 ">ABOUT ME</h2>
            <p className="text-xl font-light py-20 ">
              I am a Senior at Augustana College interested in Computer Science
              and Accounting. I've been on such interesting journeys trying to
              figure out different paths of being a software engineer through
              internships and personal projects. Thanks to the skills acquired
              from both majors, I aspire to delve into different industries that
              involve either computer science or accounting.
            </p>
          </div>
        </section>
        <div className="aboutpic flex-auto w-20 p-20 ">
          <Image
            className="object-cover"
            src={picture} // Route of the image file
            alt="Your Name"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <div className="flex py-10">
        <div className="ml-20 mr-20 pr-20 mt-10">
          <h2 className=" text-3xl font-semibold">Relevant</h2>
          <h2 className=" text-3xl font-medium">Experience</h2>
        </div>

        <section
          className="flex flex-col pl-20 pr-10 mr-10"
          style={{ marginTop: '10%' }}
        >
          <div>{displayContent()}</div>
        </section>
      </div>
      <div className="py-10 relative">
        <section className="flex flex-col border border-black border-solid w-2/5">
          <h3>Bachelor of science in Hotel and Restaurant Management</h3>
          <h5>Augustana College, 2024</h5>
          <p>
            My university education honed my communication and organizational
            skills immensely by providing me with a number of the great work
            opportunities.
          </p>
        </section>
        <>
          <h2 className="inset-y-2/4 right-2 absolute">
            Education, Certification, Awards, & Others Projects
          </h2>
        </>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="container h-screen p-10">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </div>
  );
}
