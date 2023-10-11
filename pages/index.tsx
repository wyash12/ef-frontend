// import Footer from "@/components/common/Footer";
// import Navbar from "@/components/common/Navbar";
import CourseContainer from "@/components/home/Course/CourseContainer";
import PathContainer from "@/components/home/Features/Path";
import TitleContainer from "@/components/home/Landing/TitleContainer";
import PlacementContainer from "@/components/home/Placement/PlacementContainer";
import VisionMissionContainer from "@/components/home/VisionMission/VisionMissionContainer";
import WaveContainer from "@/components/home/Wave/WaveContainer";
import ReviewContainer from "@/components/home/reviews/ReviewContainer";
import Head from "next/head";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Excellence Foundation</title>
        <meta name="Excellence foundation home page" />
      </Head>
      <TitleContainer />
      <WaveContainer />
      <CourseContainer />
      <VisionMissionContainer />
      <PlacementContainer />
      <ReviewContainer />
      <PathContainer />
    </>
  );
}
