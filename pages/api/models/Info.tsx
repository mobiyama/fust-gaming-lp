export type Info = {
  logo: {
    url: string;
    width: number;
    height: number;
  };
  name: string;
  description: string;
  categories: {
    name: string;
    path: string;
    titleImg: {
      url: string;
      width: number;
      height: number;
    };
  }[];
};
