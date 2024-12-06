import Item from "../models/itemModel.js";
import mongoose from "mongoose";
export const createItem = async (req, res) => {
    try {
        const imagePath = req.file?.filename;
        if (!imagePath) {
            return res.status(400).json({ error: "No image uploaded" });
        }
        console.log(req.file);
        const newItemData = {
            ...req.body,
            image: imagePath,
        };
        const newItem = await Item.create(newItemData);
        res.status(201).json(newItem);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to create item" });
    }
};
export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    }
    catch (error) {
        res.status(500).json({ error: "Could not fetch items" });
    }
};
export const getItemsByPag = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const items = await Item.find().skip(skip).limit(limit);
        const totalItems = await Item.countDocuments();
        res.json({
            page,
            limit,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            items,
        });
    }
    catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ error: "Error fetching items" });
    }
};
export const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item)
            return res.status(404).json({ error: "Item not found" });
        res.status(200).json(item);
    }
    catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
};
export const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedItem)
            return res.status(404).json({ error: "Item not found" });
        res.status(200).json(updatedItem);
    }
    catch (error) {
        res.status(400).json({ error: "Invalid data or ID" });
    }
};
export const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem)
            return res.status(404).json({ error: "Item not found" });
        res.status(200).json({ message: "Item deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
};
export const search = async (req, res) => {
    const { query } = req.query;
    if (!query || typeof query !== "string") {
        return res.status(400).json({ error: "Search query is required and must be a string" });
    }
    try {
        const items = await Item.find({ $text: { $search: query } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        if (!items.length) {
            return res.status(404).json({ message: "No items found" });
        }
        res.status(200).json(items);
    }
    catch (error) {
        console.log("Error during search:", error);
        res.status(400).json({ error: "An error occurred during the search" });
    }
};
export const addRating = async (req, res) => {
    const { itemId } = req.params;
    const { rating } = req.body;
    const { userId } = req.user.id;
    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ message: "rating must be between 1 and 5" });
    }
    try {
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: "item not found" });
        }
        const existingRatingIndex = item.ratings.findIndex((r) => r.userId.toString() === userId);
        if (existingRatingIndex !== -1) {
            item.ratings[existingRatingIndex].rating = rating;
        }
        else {
            item.ratings.push({ userId: new mongoose.Types.ObjectId(userId), rating });
        }
        await item.save();
    }
    catch (error) {
        console.error("error while updating and adding ", error);
        res.status(400).json({ message: "Bad Request" });
    }
};
export const removeRating = async (req, res) => {
    const { itemId } = req.params;
    const userId = req.user.id;
    try {
        const item = await Item.findById(itemId);
        if (!item) {
            return res.status(404).json({ message: 'Item not found.' });
        }
        item.ratings = item.ratings.filter((r) => r.userId.toString() !== userId);
        await item.save();
        res.status(200).json({ message: 'Rating removed successfully.', item });
    }
    catch (error) {
        console.error('Error removing rating:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
//# sourceMappingURL=itemController.js.map