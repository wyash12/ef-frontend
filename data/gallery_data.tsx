export interface ImageVideoPathType {
  id: string;
  path: string;
}

export interface GalleryElementType {
  id: string;
  title: string;
  path: string;
  data: Array<ImageVideoPathType>;
}

export let GalleryData: Array<GalleryElementType> = [
  {
    id: "g1",
    title: "Placed Students",
    path: "placed-students",
    data: [
      {
        id: "i11",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i12",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i13",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i14",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i15",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
    ],
  },
  {
    id: "g2",
    title: "Training Photos",
    path: "training-photos",
    data: [
      {
        id: "i21",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i22",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i23",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i24",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
      {
        id: "i25",
        path: "https://drive.google.com/uc?export=view&id=1FL3rRipht9Q3pGCMgm99SvK3324_nCZu",
      },
    ],
  },
  { id: "g3", title: "Review Videos", path: "review-videos", data: [] },
];
