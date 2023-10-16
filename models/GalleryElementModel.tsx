interface ImageVideoPathModel {
  id: string;
  path: string;
}

export default interface GalleryElementModel {
  id: string;
  title: string;
  path: string;
  data: Array<ImageVideoPathModel>;
}
