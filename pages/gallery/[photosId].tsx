import { GalleryData } from "@/data/gallery_data";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import Photos from "@/components/gallery/photos/photos";

export default function PhotosVideoPage(): JSX.Element {
  const router: NextRouter = useRouter();
  const photosId = router.query.photosId;

  const pageData = GalleryData.find((element) => element.path === photosId);

  // useEffect(() => {
  //   if (pageData === undefined) {
  //     router.replace("/gallery");
  //   }
  // }, [pageData, router]);

  if (pageData) {
    return <Photos data={pageData} />;
  }

  return <p>Something went wrong. Please try again later</p>;
}
