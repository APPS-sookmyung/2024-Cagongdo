export interface Review {
  img: string;
  title: string;
  star: number;
  content: string;
  openClose: string;
  location: string;
  hashtag: string[];
}

export interface ReviewDetail {
  img: string;
  title: string;
  location: string;
  star: number;
  openClose: string;
  price: string;
  outlet: string;
  light: string;
  noise: string;
  content: string;
  hashtag: string[];
}
