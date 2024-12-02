import mongoose, { Schema } from 'mongoose';
const itemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: Buffer, required: false },
    ratings: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            rating: { type: Number, required: true, min: 1, max: 5 },
        },
    ],
}, {
    timestamps: true,
    collection: 'items',
});
export default mongoose.model('Item', itemSchema);
//# sourceMappingURL=itemModel.js.map