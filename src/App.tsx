import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./App.css";
import ImageGrid from "./components/ImageGrid";
import ApiService from "./appservice";
import { ImageCardType } from "./type";
// import { uniqueBy } from "lodash";

const App: React.FC = () => {
  const [data, setData] = useState<ImageCardType[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await ApiService.fetchImages(page, 10);
        setData((prev) => [...data]);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [page]);

  const handleScroll = (e: any) => {
    console.log("scrolling->", e);
    const element = e.target;
    console.log(
      "element->",
      element,
      element.scrollHeight,
      element.scrollTop,
      element.clientHeight
    );

    if (element.scrollHeight - element.scrollTop == element.clientHeight) {
      console.log("reached bottom");
      setPage((prev) => prev + 1);
    }
  };
  return (
    <div className="app">
      <div onScroll={handleScroll} className="search-container overflow-auto">
        <SearchBar />
        <ImageGrid data={data} />
      </div>
    </div>
  );
};

export default App;
