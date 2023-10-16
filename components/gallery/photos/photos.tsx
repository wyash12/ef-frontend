import { GalleryElementType } from "@/data/gallery_data";
import classes from "./photos.module.scss";
import Image from "next/image";

export default function Photos({
  data,
}: {
  data: GalleryElementType;
}): JSX.Element {
  return (
    <div className={classes.container}>
      <h1>{data.title}</h1>
      <div className={classes.imageContainer}>
        {data.data.map((element) => {
          return (
            <div className={classes.img} key={element.id}>
              <Image
                key={element.id}
                src={element.path}
                alt={data.title}
                width={1000}
                height={1000}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
