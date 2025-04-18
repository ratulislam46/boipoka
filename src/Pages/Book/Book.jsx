import { IoIosStarHalf } from "react-icons/io";
import { LuBookImage } from "react-icons/lu";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
    // console.log(singleBook);

    const { bookId, bookName, category, image, publisher, rating, tags } = singleBook;

    return (
        <Link to={`bookDetails/${bookId}`}>
        <div className="card shadow-sm">
            <figure className="bg-[#f1faee] m-5 rounded-xl">
                <img className="h-[300px] py-8"
                    src={image}
                    alt="Book" />
            </figure>
            <div className="card-body">
                <div className="flex justify-center gap-10"> 
                    {
                        tags.map(tag => <button className="bg-[#f1faee] py-1 px-4 text-black rounded-md"> {tag}</button>)
                    }
                </div>
                
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p className="text-gray-700">By : {publisher}</p>
                <div className="flex justify-between border-t border-dashed text-gray-700">
                    <div className="mt-4">Fiction</div>
                    <div className="mt-4 flex gap-1">{rating} <IoIosStarHalf  className="h-[20px]"/></div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;