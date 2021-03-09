import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import AlbumCard from "../albums/AlbumCard";



const Pagination = ({ data,isFavorite }) => {
    const [perPage, setPerPage] = useState(12);
    const [offset, setOffset] = useState(0);
    const [elements, setElements] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setElementsForCurrentPage()
        setPageCount(Math.ceil(data.length / perPage))
    }, [data, currentPage])

    const setElementsForCurrentPage = () => {
        const elements = data
            .slice(offset, offset + perPage)
            .map(item => {
                return (
                    <AlbumCard
                        key={item._id}
                        item={item}
                        albumIsFavorite={isFavorite} />
                )
            });
        setElements(elements);
    }

    const handlePageClick = data => {
        const selectedPage = data.selected;
        const offset = selectedPage * perPage;
        setCurrentPage(selectedPage)
        setOffset(offset)
        setElementsForCurrentPage();
        window.scrollTo(0, 0);
    }

    const previousLabel = <button
        className="btn btn-dark specialColor paginationButton"
    >prev</button>

    const nextLabel = <button
        className="btn btn-dark specialColor paginationButton"
    >next</button>

    let paginationElement;
    if (pageCount > 1) {
        paginationElement = (
            <ReactPaginate
                previousLabel={previousLabel}
                nextLabel={nextLabel}
                breakLabel={<span className="gap">...</span>}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                forcePage={currentPage}
                containerClassName={"pagination d-flex justify-content-center align-items-center text-light mb-5"}
                previousLinkClassName={""}
                nextLinkClassName={""}
                disabledClassName={"disabled"}
                activeClassName={"specialBg"}
            />
        );
    };


    return (
        < >
            <div className="row mt-5">
                {elements}
            </div>
            {paginationElement}
        </>
    );
};



export default Pagination;
