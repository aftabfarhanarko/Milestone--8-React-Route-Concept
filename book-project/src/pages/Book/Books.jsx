import Book from "../SingleBook.jsx/Book";

const Books = ({ promiseData }) => {
  return (
    <div>
      <h1 className="text-3xl text-center p-4">Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {promiseData.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
