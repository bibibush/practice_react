export interface GalleryDataResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface GalleryResponse {
  status: string;
  data: GalleryDataResponse[];
  message: string;
}
