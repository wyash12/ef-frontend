import Image from "next/image";
import classes from "./GalleryLanding.module.scss";
import galleryImage from "../../public/gallery.png";
import { NextRouter, useRouter } from "next/router";
import { GalleryData, GalleryElementType } from "@/data/gallery_data";

export default function GalleryLandingContainer(): JSX.Element {
  const router: NextRouter = useRouter();

  return (
    <div className={classes.container}>
      <h1>Gallery</h1>
      {GalleryData.map((element: GalleryElementType): JSX.Element => {
        return (
          <div
            className={classes.subContainer}
            key={element.id}
            onClick={() => {
              router.push(`/gallery/${element.path}`);
            }}
          >
            <h2>{element.title}</h2>
            <Image src={galleryImage} alt={element.title} />
          </div>
        );
      })}
    </div>
  );
}
