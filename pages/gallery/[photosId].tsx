import PhotosScreen from "@/components/gallery/photos/Photos";
import VideosScreen from "@/components/gallery/videos/Videos";
import { GalleryData } from "@/data/gallery_data";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
// import VideoScreen from "@/components/gallery/videos/Videos";
// import PhotoScreen from "@/components/gallery/photos/Photos";

export default function PhotosVideoPage(): JSX.Element {
  const router: NextRouter = useRouter();
  const photosId = router.query.photosId;

  const pageData = GalleryData.find((element) => element.path === photosId);

  useEffect(() => {
    if (pageData === undefined) {
      router.replace("/gallery");
    }
  }, [pageData, router]);

  if (pageData && pageData.id !== "g3") {
    // return <PhotoScreen data={pageData} />;
    return <PhotosScreen data={pageData} />;
  }

  if (pageData && pageData.id === "g3") {
    // return <VideoScreen data={pageData} />;
    return <VideosScreen data={pageData} />;
  }

  return (
    <p style={{ textAlign: "center" }}>
      Something went wrong. Please try again later
    </p>
  );
}
