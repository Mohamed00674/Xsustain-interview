export interface User {
  _id: string;
  username: string;
  password: string;
}

export interface IItem {
  _id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  ratings?: [
    {
      userId: number;
      rating: number;
    }
  ];
}

export interface NewItem {
  name: string;
  price: number;
  category: string;
  image?: string;
}
