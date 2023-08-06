import React from "react";

interface ListItemProps {
  itemName: string;
}

const ItemCategories: React.FC<ListItemProps> = ({ itemName }) => {
  return (
    <>
      <li className="cursor-pointer">
        <a href="/store">{itemName}</a>
      </li>
    </>
  );
};

export default ItemCategories;
