import React, { useEffect, useState, useCallback } from "react";
import ReactPaginate from 'react-paginate';
import AlbumCard from "../albums/AlbumCard";
import "./pagination.scss";



const Pagination = ({ data, isFavorite }) => {
    const userOffset = JSON.parse(sessionStorage.getItem("offset")) || 0;
    const userPage = JSON.parse(sessionStorage.getItem("page")) || 0;
    const userFavoriteOffset = JSON.parse(sessionStorage.getItem("favOffset")) || 0;
    const userFavoritePage = JSON.parse(sessionStorage.getItem("favPage")) || 0;

    const [perPage] = useState(8);
    const [offset, setOffset] = useState(isFavorite ? userFavoriteOffset : userOffset);
    const [elements, setElements] = useState([]);
    const [currentPage, setCurrentPage] = useState(isFavorite ? userFavoritePage : userPage);
    const [pageCount, setPageCount] = useState(0);

    const setElementsForCurrentPage = useCallback(() => {
        const elements = data
            .slice(offset, offset + perPage)
            .map(item => {
                return (
                    <AlbumCard
                        key={item._id}
                        item={item}
                        albumIsFavorite={isFavorite} />
                );
            });
        setElements(elements);
    }, [data, isFavorite, offset, perPage]);

    useEffect(() => {
        setElementsForCurrentPage();
        setPageCount(Math.ceil(data.length / perPage));
    }, [data, currentPage, perPage, setElementsForCurrentPage]);

    const handlePageClick = data => {
        const selectedPage = data.selected;
        isFavorite ? sessionStorage.setItem("favPage", selectedPage) : sessionStorage.setItem("page", selectedPage);
        const offset = selectedPage * perPage;
        isFavorite ? sessionStorage.setItem("favOffset", offset) : sessionStorage.setItem("offset", offset);
        setCurrentPage(selectedPage);
        setOffset(offset);
        setElementsForCurrentPage();
        window.scrollTo(0, 0);
    };

    const btnLabel = label => {
        return (
            <button
                className="btn btn-dark specialColor paginationButton"
            >{label}</button>
        );
    };

    let paginationElement;
    if (pageCount > 1) {
        paginationElement = (
            <ReactPaginate
                previousLabel={btnLabel("prev")}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                nextLabel={btnLabel("next")}
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
        <>
            <div className="row mt-5">
                {elements}
            </div>
            {paginationElement}
        </>
    );
};



export default Pagination;
