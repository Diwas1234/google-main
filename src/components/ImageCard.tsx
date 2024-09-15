import React from "react";

const ImageCard = ({ image, id, title, onClick }: any) => {
  return (
    <div
      className="overflow-hidden"
      onClick={() => {
        onClick(id);
      }}
    >
      <div className="box-container cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
      </div>
    </div>
  );
};

export default ImageCard;
