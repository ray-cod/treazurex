import { ChevronsRight } from "lucide-react";
import { ChevronsLeft } from "lucide-react";

const Pagination = ({
  totalPosts,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  // Calculate the total number of pages
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`px-4 py-2 border rounded-lg cursor-pointer ${
          currentPage === i ? "text-blue-600 border-blue-600" : ""
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-4 py-2 border rounded-lg cursor-pointer"
      >
        <ChevronsLeft />
      </button>

      <ul className="flex justify-center gap-2">
        {pages.map((page, i) => (
          <li key={i}>{page}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, Math.ceil(totalPosts / itemsPerPage))
          )
        }
        className="px-4 py-2 border rounded-lg cursor-pointer"
      >
        <ChevronsRight />
      </button>
    </div>
  );
};

export default Pagination;
