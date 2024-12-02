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
  imageUrl ?: string;
  ratings?: [
    {
      userId: number;
      rating: number;
    }
  ];
}
