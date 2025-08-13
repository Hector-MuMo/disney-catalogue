import { MoveLeft, MoveRight } from 'lucide-react';
import type { JSX } from 'react';

export function Pagination({
  pagination,
  setPagination,
  data,
}: {
  pagination: any;
  setPagination: any;
  data?: any;
}): JSX.Element {
  const currentPage = pagination.pageIndex + 1;
  const totalPages = data?.totalPages ?? 0;

  const goToPage = (page: number): void => {
    if (page < 0 || page > totalPages) return;
    setPagination((prev) => ({ ...prev, pageIndex: page }));
  };

  const getDisplayedPages = (): (number | 'dots')[] => {
    const total = totalPages;
    const current = currentPage;

    const pages: (number | 'dots')[] = [];

    if (total <= 4) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    // Always show the first page
    pages.push(1);

    if (current > 3) {
      pages.push('dots');
    }

    // Show central pages
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== total) {
        pages.push(i);
      }
    }

    if (current < total - 2) {
      pages.push('dots');
    }

    // Last page is always shown
    pages.push(total);

    return pages;
  };

  return (
    <div className="flex items-center justify-end gap-4 px-4 py-3">
      {/* Previous */}
      <button
        onClick={() => currentPage > 1 && goToPage(currentPage - 2)}
        disabled={currentPage === 1}
        className="text-sm text-base-base hover:underline disabled:opacity-30 disabled:cursor-not-allowed disabled:text-zinc-500 cursor-pointer"
      >
        <MoveLeft />
      </button>

      {/* Page buttons */}
      <div className="flex flex-wrap items-center gap-1">
        {getDisplayedPages().map((item, index) =>
          item === 'dots' ? (
            <span key={`dots-${index}`} className="px-2 text-gray-500 select-none">
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => goToPage(item - 1)}
              className={`px-3 py-1 rounded-md text-sm ${
                currentPage === item
                  ? 'bg-main-button-700 text-white font-semibold'
                  : ' text-gray-700 hover:bg-gray-300 cursor-pointer'
              }`}
            >
              {item}
            </button>
          ),
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => currentPage < totalPages && goToPage(currentPage)}
        disabled={currentPage === totalPages}
        className="text-sm text-base-base hover:underline disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      >
        <MoveRight className="inline-block" />
      </button>
    </div>
  );
}
