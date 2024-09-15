export interface ImagesDataType {
  data?: ImageCardType[];
}

export interface ImageCardType {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
