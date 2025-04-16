
const Book = ({ allBooks, singleBook }) => {

    // console.log(allBooks);
    console.log(singleBook);

    const { bookName, category, image, publisher, rating, review, yearOfPublishing, tags } = singleBook;

    return (
        <div className="card bg-gray-100 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-200px w-[99%]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {publisher}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Book;