import React from 'react';

const Pagination = ({ currentPage, totalPages, totalItems, handlePageChange }) => {
  return (
    <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
      <span>{totalItems} results</span>
      <div className="flex gap-1 items-center">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 disabled:opacity-100 text-gray-500"
          style={{ backgroundColor: "transparent" }}
        >
          &lt;
        </button>

        {(() => {
          const pages = [];
          const startPage = Math.max(1, currentPage);
          const endPage = Math.min(startPage + 4, totalPages);

          for (let i = startPage; i <= endPage; i++) {
            pages.push(
              <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 ${
                  currentPage === i
                    ? "bg-pink-500 text-white"
                    : "text-gray-500"
                }`}
                style={{
                  backgroundColor:
                    currentPage === i ? "#FF1493" : "transparent",
                }}
              >
                {i}
              </button>
            );
          }

          if (endPage < totalPages) {
            pages.push(
              <span key="ellipsis" className="text-gray-500">
                ...
              </span>
            );
          }

          if (endPage < totalPages) {
            pages.push(
              <button
                key={totalPages}
                onClick={() => handlePageChange(totalPages)}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500"
                style={{
                  backgroundColor:
                    currentPage === totalPages ? "#FF1493" : "transparent",
                }}
              >
                {totalPages}
              </button>
            );
          }

          return pages;
        })()}

        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 disabled:opacity-100 text-gray-500"
          style={{ backgroundColor: "transparent" }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;