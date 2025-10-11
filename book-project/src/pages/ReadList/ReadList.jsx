import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItem } from "../../vanilaJS/lstore";
import { getWhistList } from "../../vanilaJS/wistlist";
import { MapPinPlus } from "lucide-react";
import { UsersRound } from "lucide-react";
import { FileChartColumnIncreasing } from "lucide-react";


const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')
  const [west, setWest] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const getItemLS = getItem();
    const convartPars = getItemLS.map((id) => parseInt(id));
    const filterItems = data.filter((book) =>
      convartPars.includes(book.bookId)
    );
    setReadList(filterItems);
  }, []);
  
  useEffect(() => {
    const getItemLS = getWhistList();
    const convartPars = getItemLS.map((id) => parseInt(id));
    const filterItems = data.filter((book) =>
      convartPars.includes(book.bookId)
    );
    setWest(filterItems);
  }, []);
  
  const handleSort = (types) => {
    setSort(types);

    if(types === "Pages"){
      const sortByPage = [...readList].sort((a,b) => b.totalPages -  a.totalPages );
      setReadList(sortByPage);
    }
    if(types === "Reating"){
      const reating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(reating)
    }
  }
  return (
    <div className="">
      <div className="">
        <details className="dropdown text-center">
          <summary className="btn m-1 bg-green-500 text-white ">
            Sort By : {sort ? sort : ""} 
          </summary>

          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Reating")}>Reating</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs className="mt-10">
        <TabList>
          <Tab> Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>The Read List Add Item :{readList.length}</h2>
          {readList.map((data) => (
            <div className="flex gap-20 py-6 border border-base-300 mb-5 px-8 rounded-lg shadow ">
              <div className="bg-base-300 p-10 rounded-lg py-12">
                <div>
                  <img className="h-[210px]" src={data.image}></img>
                </div>
              </div>
              <div className="py-8">
                <div>
                  <h1 className="text-3xl font-semibold">{data.bookName}</h1>
                  <p className="mt-2 text-lg">By : {data.publisher}</p>
                </div>
                <div className="flex gap-4 items-center mt-3">
                  <p className="font-bold">Tag </p>
                  <span className="bg-base-200 px-3 py-1 rounded-lg font-semibold text-green-600">
                    {data.tags[0]}
                  </span>
                  <span className="bg-base-200 px-3 py-1 rounded-lg font-semibold text-green-600">
                    {data.tags[1]}
                  </span>
                  <MapPinPlus />
                  <span className="text-lg font-semibold">
                    Year of Publishing: {data.yearOfPublishing}
                  </span>
                </div>
                <div className="mt-4 flex gap-10">
                  <div className=" flex gap-2 text-lg font-semibold">
                    <UsersRound />
                    <span>Publisher: {data.author}</span>
                  </div>
                  <div className=" flex gap-2 text-lg font-semibold">
                    <FileChartColumnIncreasing />
                    <p>Page {data.totalPages}</p>
                  </div>
                </div>

                <div className="divider"></div>
                <div className="flex gap-7">
                  <p className="bg-blue-100 text-lg px-5 py-1 rounded-2xl font-semibold text-blue-600">
                    Category: {data.category}
                  </p>
                  <p className="bg-orange-100 text-lg px-5 py-1 rounded-2xl font-semibold text-orange-400">
                    Rating: {data.rating}
                  </p>
                  <p className="bg-green-600 text-lg px-5 py-1 rounded-2xl font-semibold text-white">
                    View Details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>WhistList Add : {west.length}</h2>
          {west.map((element) => (
            <div>
              <div className="flex gap-20 py-6 border border-base-300 mb-5 px-8 rounded-lg shadow ">
                <div className="bg-base-300 p-10 rounded-lg">
                  <div>
                    <img className="h-[220px]" src={element.image}></img>
                  </div>
                </div>
                <div className="py-8">
                  <div>
                    <h1 className="text-3xl font-semibold">
                      {element.bookName}
                    </h1>
                    <p className="mt-2 text-lg">By : {element.publisher}</p>
                  </div>
                  <div className="flex gap-4 items-center mt-3">
                    <p className="font-bold">Tag </p>
                    <span className="bg-base-200 px-3 py-1 rounded-lg font-semibold text-green-600">
                      {element.tags[0]}
                    </span>
                    <span className="bg-base-200 px-3 py-1 rounded-lg font-semibold text-green-600">
                      {element.tags[1]}
                    </span>
                    <MapPinPlus />
                    <span className="text-lg font-semibold">
                      Year of Publishing: {element.yearOfPublishing}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-10">
                    <div className=" flex gap-2 text-lg font-semibold">
                      <UsersRound />
                      <span>Publisher: {element.author}</span>
                    </div>
                    <div className=" flex gap-2 text-lg font-semibold">
                      <FileChartColumnIncreasing />
                      <p>Page {element.totalPages}</p>
                    </div>
                  </div>

                  <div className="divider"></div>
                  <div className="flex gap-7">
                    <p className="bg-blue-100 text-lg px-5 py-1 rounded-2xl font-semibold text-blue-600">
                      Category: {element.category}
                    </p>
                    <p className="bg-orange-100 text-lg px-5 py-1 rounded-2xl font-semibold text-orange-400">
                      Rating: {element.rating}
                    </p>
                    <p className="bg-green-600 text-lg px-5 py-1 rounded-2xl font-semibold text-white">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
