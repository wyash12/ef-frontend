import Image from "next/image";
import classes from "./GalleryLanding.module.scss";
import galleryImage from "../../public/gallery.png";
import { NextRouter, useRouter } from "next/router";

interface GalleryElementType {
  title: string;
  path: string;
}

export default function GalleryLandingContainer(): JSX.Element {
  const router: NextRouter = useRouter();
  const items: Array<GalleryElementType> = [
    { title: "Placed Students", path: "placed-students" },
    { title: "Training Photos", path: "training-photos" },
    { title: "Review Videos", path: "review-videos" },
  ];
  
  return (
    <div className={classes.container}>
      <h1>Gallery</h1>
      {items.map(
        (
          element: { title: string; path: string },
          index: number
        ): JSX.Element => {
          return (
            <div
              className={classes.subContainer}
              key={index}
              onClick={() => {
                router.push(`/gallery/${element.path}`);
              }}
            >
              <h2>{element.title}</h2>
              <Image src={galleryImage} alt={element.title} />
            </div>
          );
        }
      )}
    </div>
  );
}
