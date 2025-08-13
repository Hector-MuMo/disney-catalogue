import { MoveLeft, MoveRight } from 'lucide-react';
import { type JSX } from 'react';

type PaginationProps = {
  onPageChange: (page: any) => any;
  totalPages: any;
  initialPage?: any;
};

export function Pagination({ onPageChange, totalPages, initialPage = 0 }: PaginationProps): JSX.Element {
  const currentPage = initialPage;

  const handlePageChange = (newPage: number): void => {
    if (newPage < 0 || newPage >= totalPages) return;

    onPageChange(newPage);
  };

  const getDisplayedPages = (): (number | 'dots')[] => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    const pages: (number | 'dots')[] = [0]; // First page (0-based)

    if (currentPage > 2) {
      pages.push('dots');
    }

    // Calculate range around current page
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages - 2, currentPage + 1);

    for (let i = start; i <= end; i++) {
      if (i !== 0 && i !== totalPages - 1) {
        pages.push(i);
      }
    }

    if (currentPage < totalPages - 3) {
      pages.push('dots');
    }

    pages.push(totalPages - 1); // Last page

    return pages;
  };

  return (
    <div aria-label="Pagination" className="flex items-center justify-end gap-4 px-4 py-3">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
        aria-label="Previous page"
        className="p-2 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white cursor-pointer"
      >
        <MoveLeft aria-hidden="true" />
      </button>

      <div className="flex items-center gap-1">
        {getDisplayedPages().map((item, index) =>
          item === 'dots' ? (
            <span key={`dots-${index}`} className="px-2 text-gray-500 select-none">
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => handlePageChange(item)}
              aria-current={currentPage === item ? 'page' : undefined}
              className={`px-3 py-1 rounded-md text-sm text-white cursor-pointer ${
                currentPage === item ? 'bg-blue-600 text-white font-semibold' : ' hover:bg-gray-700'
              }`}
            >
              {item + 1}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
        aria-label="Next page"
        className="p-2 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white cursor-pointer"
      >
        <MoveRight aria-hidden="true" />
      </button>
    </div>
  );
}
