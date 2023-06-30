import React from "react";

interface ListItemProps {
  itemName: string;
}

const ItemCategories: React.FC<ListItemProps> = ({ itemName }) => {
  return (
    <>
      <li className="cursor-pointer">{itemName}</li>
    </>
  );
};

export default ItemCategories;
