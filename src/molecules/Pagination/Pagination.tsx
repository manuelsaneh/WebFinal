import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import "./pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  handlePage,
}: PaginationProps) => {
  const handleNextPage = () => {
    handlePage(currentPage + 1);
  };

  const handlePrevPage = () => {
    handlePage(currentPage - 1);
  };

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={handlePrevPage}
        className="arrow-btn"
      >
        <MdOutlineKeyboardDoubleArrowLeft className="arrow-btn_icon" />
      </button>
      <p className="page-number">{currentPage}</p>
      <button
        disabled={currentPage === totalPages ? true : false}
        onClick={handleNextPage}
        className="arrow-btn"
      >
        <MdOutlineKeyboardDoubleArrowRight className="arrow-btn_icon" />
      </button>
    </div>
  );
};

export default Pagination;
