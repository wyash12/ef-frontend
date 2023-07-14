import Navbar from "@/components/common/Navbar";
import CourseContainer from "@/components/home/CourseContainer/CourseContainer";
import TitleContainer from "@/components/home/LandingContainer/TitleContainer";
import WaveContainer from "@/components/home/WaveContainer/WaveContainer";
import Head from "next/head";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Excellence Foundation</title>
        <meta name="Excellence foundation home page" />
      </Head>
      <Navbar />
      <TitleContainer />
      <WaveContainer />
      <CourseContainer />
    </>
  );
}
