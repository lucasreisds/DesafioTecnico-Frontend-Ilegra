import React from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./PaginationStyle";

const Pagination = (props) => {
  return (
    <Container>
      <ReactPaginate
        previousClassName={"Previous"}
        nextLabel={"Next"}
        pageCount={props.pageCount}
        onPageChange={props.changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Container>
  );
};

export default Pagination;
