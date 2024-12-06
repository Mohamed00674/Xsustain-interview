import React from "react";
import { Rating } from "@mui/material";
import { useItems } from "../context/ItemContext";

interface RatingProps {
  itemId: string;
  currentRating: number | null;
}

const ItemRating: React.FC<RatingProps> = ({ itemId, currentRating }) => {
  const { addOrUpdateRating, removeRating } = useItems();

  const handleRatingChange = (newValue: number | null) => {
    if (newValue !== null) {
      addOrUpdateRating(itemId, newValue);
    } else {
      removeRating(itemId);
    }
  };

  return (
    <Rating
      value={currentRating}
      onChange={(event, newValue) => handleRatingChange(newValue)}
      max={5}
    />
  );
};

export default ItemRating;
