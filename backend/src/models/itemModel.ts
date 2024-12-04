import mongoose, { Schema, Document } from 'mongoose';

interface IRating {
  userId: mongoose.Schema.Types.ObjectId;
  rating: number;
}

export interface IItem extends Document {
  name: string;
  price: number;
  category: string;
  image : string
  ratings: IRating[]; 
}

const itemSchema = new Schema<IItem>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: false },
    ratings: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
      },
    ],
  },
  {
    timestamps: true, 
    collection: 'items', 
  }
);

export default mongoose.model<IItem>('Item', itemSchema);
