import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { ImagesDataType } from "../type";
// import ImageCard from './ImageCard';

// const images = [...new Array]

const ImageGrid = ({ data }: ImagesDataType) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [gridCols, setGridCols] = useState<number>(4);
  const [image, setImage] = useState<string>();
  const [author, setAuthor] = useState<string>();

  const handleOnClick = (id: string) => {
    const selectedItem = data?.find((item) => item.id === id);
    console.log("You selected ->", selectedItem);
    setShowDetail(true);
    setGridCols(2);
    setImage(selectedItem?.download_url);
    setAuthor(selectedItem?.author);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setGridCols(4);
  };

  const XMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div className="flex">
      <div
        className={`${
          showDetail ? "md:w-[70%] sm:w-[0px] md:grid-cols-2" : "w-full"
        } grid md:grid-cols-4 sm:grid-cols-2  gap-6 p-6 pt-0`}
      >
        {data?.map((item, index) => (
          <ImageCard
            id={item.id}
            onClick={handleOnClick}
            key={index}
            image={item.download_url}
            title={item.author}
          />
        ))}
      </div>
      {showDetail && (
        <div className=" h-[500px] md:right-[24px] sm:w-[100%] md:w-[29%] border border-grey-200 fixed p-4 rounded-lg">
          <div className="flex justify-between w-full">
            <h2>{author}</h2>
            <div onClick={handleCloseDetail} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="box-container cursor-pointer">
              <img
                src={image}
                alt={author}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-700">{author}</h2>
            </div>
            <div className="flex rounded-lg bg-[#a8a496] justify-center items-center flex-1">
              <h2>Information about this item</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
