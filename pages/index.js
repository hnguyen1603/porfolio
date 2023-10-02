import Head from 'next/head';
import Image from 'next/image';
import mainProfile from '../public/images/mainprofile.jpg';
import secProfile from '../public/images/secprofile.jpg';
import gif from '../public/images/sign_translator/signgif.gif';
import Link from 'next/link';

const HomeComponent = () => {
  const project = {
    'SOFTWARE DEVELOPER INTERN': {
      year: 'August 2022 - October 2022',
      company: 'Grant Thornton Viet Nam',
      content:
        "I played a pivotal role in supporting the advancement of ERP products, such as Netsuite and SAP B1, for our clients. My responsibilities encompassed collaborating closely with the Business Analysts to thoroughly understand the clients' requirements, and customizing the ERP functionalities to align with their needs.",
    },
    'UI/UX INTERN': {
      year: 'June 2021 - August 2021',
      company: 'EDGE Department, Augustana College',
      content:
        'I actively contributed to crafting visually compelling and user-friendly interfaces, conducted user research to glean valuable insights. This internship not only honed my design skills but also ignited a deep passion for creating user-centric solutions.',
    },
    'INTERNAL AUDITOR': {
      year: 'February 2021 - May 2021',
      company: 'Augustana College - Accounting Department',
      content:
        'I served as an internal auditor for the accounting department, where I conducted a comprehensive audit review for the entire department. In addition to assessing the internal controls and operations of the EDGE Center, I also identified and recommended optimal strategies for enhancing their internal controls.',
    },
  };
  function displayContent() {
    return (
      <>
        {' '}
        {Object.entries(project).map((value) => {
          const projectName = value[0];
          const year = value[1].year;
          const company = value[1].company;
          const content = value[1].content;
          return (
            <div className="flex px-20 mb-10 text-[#4E4E4E]">
              <article>
                <div className="flex">
                  <p className="w-6 h-6 mr-4 mt-1 border border-[#4E4E4E] bg-[#4E4E4E] "></p>
                  <h3 className="font-normal text-normal leading-8 text-[#4E4E4E] ">
                    {year}
                  </h3>
                </div>

                <h3 className="ml-10 font-semibold text-2xl">{projectName}</h3>
                <h4 className="ml-10 mb-6 text-md leading-8 font-light">
                  {company}
                </h4>
                <p className="ml-10 tracking-wide leading-8 font-normal">
                  {content}
                </p>
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
        <div className="flex-auto w-80">
          <Image
            className="object-cover"
            src={mainProfile} // Route of the image file
            alt="Your Name"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
        <section className="flex flex-col flex-auto w-20 justify-around bg-black">
          <div className="px-20 text-left text-white">
            <h1
              className=" text-8xl font-semibold "
              style={{ letterSpacing: '0.6rem' }}
            >
              Huy Nguyen
            </h1>
            <h2
              className=" mt-8 text-4xl font-medium"
              style={{ letterSpacing: '1rem' }}
            >
              Software Developer
            </h2>
          </div>

          <a href="#intro">
            {' '}
            <p className="w-52 flex-none mx-auto text-center bg-black hover:opacity-80 transition ease-in-out delay-50 duration-50 text-white text-lg font-medium py-2 px-4 border border-solid border-4 border-white shadow">
              See More
            </p>
          </a>
        </section>
      </div>
      <div className="flex">
        <section className=" flex flex-col flex-auto w-80 justify-around bg-white py-10">
          <h2 className="mx-20 pb-4 text-left border-b border-solid text-xl text-black font-bold mb-[40%]">
            WHO I AM
          </h2>
          <div className="text-left text-black px-20">
            <h2 className=" text-5xl font-bold pb-4 ">ABOUT ME</h2>
            <p className="text-xl font-light leading-10">
              I am a Senior at Augustana College interested in Computer Science
              and Accounting. I've been on such interesting journeys trying to
              figure out different paths of being a software engineer through
              internships and personal projects. Currently, I'm looking for new
              grads opportunities for Summer 2024.
            </p>
            <div className="flex  pb-20 my-5">
              <p className="text-lg font-medium underline decoration-2 underline-offset-8">
                <Link
                  href="https://github.com/hnguyen1603"
                  target="_blank"
                  alt="github"
                >
                  GitHub
                </Link>
              </p>
              <p className="text-lg font-medium mx-5 underline decoration-2 underline-offset-8">
                <Link
                  href="https://www.linkedin.com/in/huy-nguyen-457a88179/"
                  target="_blank"
                  alt="linkedln"
                >
                  Linkedln
                </Link>
              </p>
              <p className="text-lg underline decoration-2 font-medium underline-offset-8">
                <Link href="./resume/Resume.pdf" target="_blank" alt="resume">
                  Resume
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className="aboutpic flex-auto w-20 p-20 ">
          <Image
            className="object-cover"
            src={secProfile} // Route of the image file
            alt="Your Name"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <div className="flex py-10">
        <div className="mx-20 pr-20 mt-10">
          <h2 className=" text-4xl font-semibold">Relevant</h2>
          <h2 className=" text-4xl font-semibold">Experience</h2>
        </div>

        <section
          id="intro"
          className="flex flex-col pl-20 pr-10 mr-10 mt-[10%]"
        >
          <div>{displayContent()}</div>
        </section>
      </div>
      <div className="text-white bg-[#292929] py-10">
        <div className="mx-20 py-10 relative flex flex-col ">
          <section className=" flex flex-col w-2/5 ">
            <h3 className="text-lg font-semibold leading-8">
              BACHELOR DEGREE IN COMPUTER SCIENCE
            </h3>
            <h5 className="mt-1 mb-5 font-normal">Augustana College, 2024</h5>
            <p className="tracking-wide leading-8 font-normal">
              As a computer science major at my college, I am fortunate to
              receive a comprehensive education that equips me with the
              essential skills and knowledge needed in the rapidly evolving
              field of computer science. My university education honed not only
              my technical abilities, but also multiple disciplines (e.g.
              interdisciplinary knowledge, critical thinking, leadership and
              collaboration,...) immensely by providing me with a number of the
              great work opportunities.
            </p>
          </section>
          <section className=" flex">
            <div className=" flex flex-col flex-1 pr-60 mt-6">
              {' '}
              <h3 className="text-lg font-semibold mb-5">DEPARTMENT AWRDS</h3>
              <p className="tracking-wide leading-8 font-normal">
                I was given the honor to be the member of the al-Khwarizmi
                Society, a nascent computer science honor society, thanks to my
                fine academic work in computer science.
              </p>
            </div>
            <div className="flex-1 mt-6">
              <h3 className="text-lg font-semibold">MAGNA CUM LAUDE</h3>
              <h5 className="mt-1 mb-5 font-normal">Batch of 2023</h5>
              <p className="font-normal">
                I received the Magna Cum Laude in my year.
              </p>
            </div>
            <div className="mt-10 absolute top-0 right-0 text-4xl font-semibold tracking-wide text-left">
              <h3>Education, Certification,</h3>
              <h3>Awards, & Others Projects</h3>
            </div>
          </section>
        </div>
      </div>

      <div className="flex flex-col mx-20 py-10">
        <div className="flex mb-4">
          <h2 className="text-4xl font-semibold"> PROJECTS </h2>
          <div className="border-b-2 border-solid flex-1 mb-4 ml-4"></div>
        </div>
        <div className="flex py-10">
          <aside className="group flex-1 relative">
            <Link
              href="https://github.com/hnguyen1603/sign-language-translator"
              target="_blank"
            >
              <Image
                className="object-cover group-hover:brightness-50 transition ease-in-out delay-100 duration-50"
                src={gif}
                alt="Project Image"
              />

              <h3
                className=" absolute bottom-20 left-1/3 border border-white border-solid bg-white text-xs px-5 py-1 font-bold shadow-md group-hover:bottom-14 group-hover:brightness-125 group-hover:opacity-80
               transition ease-in-out delay-100 duration-50"
                style={{ letterSpacing: '0.25rem' }}
              >
                EXPLORE
              </h3>
            </Link>
          </aside>
          <div className="px-10 flex-1 ml-20">
            <h3 className="text-xl font-semibold mb-3">
              Sign Language Translator
            </h3>
            <p className="tracking-wide leading-8 font-normal">
              Our app is designed to empower individuals with hearing
              impairments and facilitate seamless communication between the deaf
              and hearing communities. With user-friendly features and a robust
              sign language recognition system, our app can translate written
              language into clear and accurate sign language gestures, making
              everyday interactions more inclusive and accessible.
            </p>
          </div>
        </div>
        <div className="flex pt-10">
          <aside className="group flex-1 relative">
            <Image
              className="object-cover group-hover:brightness-50 transition ease-in-out delay-100 duration-50"
              src={gif}
              alt="Project Image"
            />
            <h3
              className=" absolute bottom-20 left-1/3 border border-white border-solid bg-white text-xs px-5 py-1 font-bold shadow-md group-hover:bottom-14 group-hover:brightness-125 group-hover:opacity-80
               transition ease-in-out delay-100 duration-50"
              style={{ letterSpacing: '0.25rem' }}
            >
              EXPLORE
            </h3>
          </aside>
          <div className=" flex-1 ml-20 px-10 ">
            <h3 className="text-xl font-semibold mb-3">Travel Up App</h3>
            <p className="tracking-wide leading-8 font-normal">
              Effortlessly plan, organize, and cherish your journeys with ease.
              From crafting custom itineraries to tracking expenses and keeping
              essential documents at your fingertips, the app simplifies travel
              management.
            </p>
          </div>
        </div>
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
