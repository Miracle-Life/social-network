import React, {useState} from 'react';


const Paginator = ({
                       currentPage,
                       totalUsersCount,
                       onPageChange,
                       pageSize,
                       portionSize = 5,
                       ...props
                   }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <nav className="d-flex p-3 justify-content-center" aria-label="Page navigation">

            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <button
                        disabled={portionNumber === 1}
                        onClick={() => {
                            setPortionNumber(portionNumber = 1)
                        }}
                        aria-hidden="true"
                        className="btn btn-btn-success"
                        aria-label="Previous"
                    >
                        &laquo;
                    </button>
                    <button
                        disabled={portionNumber === 1}
                        onClick={() => {
                            setPortionNumber(portionNumber - 1)
                        }}
                        aria-hidden="true"
                        className="btn btn-btn-success"
                        aria-label="Previous"
                    >
                        &lt;
                    </button>
                </li>
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map((page) => (
                        <li key={page} className={`page-item ${currentPage === page && "active"}`}
                            aria-current="page">
                            <span onClick={() => {
                                onPageChange(page)
                            }}
                                  className="page-link">{page}</span>
                        </li>)
                    )}
                <li>

                    <button
                        disabled={portionCount === portionNumber}
                        onClick={() => {
                            setPortionNumber(portionNumber + 1)
                        }}
                        aria-hidden="true"
                        className="btn btn-btn-success"
                        aria-label="Previous">
                        &gt;
                    </button>
                    <button
                        disabled={portionCount === portionNumber}
                        onClick={() => {
                            setPortionNumber(portionCount)
                        }}
                        aria-hidden="true"
                        className="btn btn-btn-success"
                        aria-label="Previous">
                        &raquo;
                    </button>

                </li>
            </ul>
        </nav>

    );
};

export default Paginator;
