import React from 'react';



const Paginator = ({currentPage, totalUsersCount, onPageChange, pageSize,...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <nav className="d-flex p-3 align-items-center" aria-label="Page navigation">
                <ul className="pagination pagination-sm">
                    {pages.map(page => (
                        <li key={page} className={`page-item ${currentPage === page && "active"}`}
                            aria-current="page">
                                <span onClick={() => {
                                    onPageChange(page)
                                }}
                                      className="page-link">{page}</span>
                        </li>
                    ))}
                </ul>
            </nav>

    );
};

export default Paginator;
