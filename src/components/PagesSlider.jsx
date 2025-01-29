export default function PagesSlider({ handleClick, page, numPages }) {

    return (

        <nav className="col-12 mt-3">
            <ul className="pagination">
                <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => handleClick(page - 1)}
                    >
                        Previous
                    </button>
                </li>
                {new Array(numPages).fill("").map((num, index) => (
                    <li
                        className={`page-item ${page === index + 1 ? "active" : ""} `}
                        aria-current="page"
                        key={index + 1}
                    >
                        <button
                            className="page-link"
                            onClick={() => handleClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${page >= numPages ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => handleClick(page + 1)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}