import { useLoaderData, useParams } from "react-router";
import { setItems } from "../../vanilaJS/lstore";
import { setWihetList } from "../../vanilaJS/wistlist";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const BookDetlise = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const findData = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    author,
    image,
    review,
    publisher,
    rating,
    yearOfPublishing,
    totalPages,
  } = findData;

  const handleSetLS = (id) => {
    setItems(id);
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  const handelWhistList = (id) => {
    setWihetList(id);
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };
  return (
    <div className="flex  p-10 gap-8">
      <div className="w-[50%] bg-base-300 rounded-lg">
        <div className="rounded-lg">
          <img className="mx-auto p-10 h-[700px] " src={image}></img>
        </div>
      </div>
      <div className="w-[50%]">
        <h1 className="text-2xl font-semibold">{bookName}</h1>
        <p className="text-lg font-medium">By : {author}</p>
        <div className="divider"></div>
        <p className="text-lg  font-medium">Fiction</p>
        <div className="divider"></div>
        <p>
          <span className="font-bold">Review :</span> {review}
        </p>
        <div className="flex gap-5 mt-5">
          <h2 className="font-bold">Tag</h2>
          <p className="text-green-600 text-md font-semibold">
            {findData.tags[0]}
          </p>
          <p className="text-green-600 text-md font-semibold">
            {findData.tags[1]}
          </p>
        </div>
        <div className="divider"></div>

        <div className="">
          <p className="mt-3">
            Number of Pages :{" "}
            <span className="text-md font-semibold">{totalPages}</span>
          </p>
          <p className="mt-3">
            Publisher:{" "}
            <span className="text-md font-semibold">{publisher}</span>
          </p>
          <p className="mt-3">
            Year of Publishing :{" "}
            <span className="text-md font-semibold">{yearOfPublishing}</span>
          </p>
          <p className="mt-3">
            Rating : <span className="text-md font-semibold">{rating}</span>
          </p>
        </div>
        <div className="flex gap-4 mt-5">
          <button onClick={() => handleSetLS(id)} className="btn btn-outline">
            Mark to Read
          </button>
          <button
            onClick={() => handelWhistList(id)}
            className="btn btn-info text-white "
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetlise;
