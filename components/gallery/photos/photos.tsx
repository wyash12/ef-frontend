import classes from "./Photos.module.scss";
import Image from "next/image";
import GalleryElementModel from "@/models/GalleryElementModel";

export default function PhotoScreen({
  data,
}: {
  data: GalleryElementModel;
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
