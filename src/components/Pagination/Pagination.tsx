import { FC } from "react";
import styled from "styled-components";

import { IconButton } from "../IconButton";
import { PageButton } from "./PageButton";

const MAX_VISIBLE_PAGES = 5;

export type PaginationProps = {
  /**
   * Total number of pages
   */
  pagesCount: number;
  /**
   * Current page index (starts from `1`)
   */
  currentPage: number;
  /**
   * Callback when clicking on a new page
   * @param newPage the new page index
   */
  onChangePage?: (newPage: number) => void;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.primary};
`;

const PrevButton = styled(IconButton)`
  margin-right: 12px;
`;
const NextButton = styled(IconButton)`
  margin-left: 12px;
`;

export const Pagination: FC<PaginationProps> = ({
  pagesCount,
  currentPage,
  onChangePage,
  ...props
}) => {
  const visiblePagesCount = Math.min(pagesCount, MAX_VISIBLE_PAGES);

  const firstVisiblePage =
    visiblePagesCount < MAX_VISIBLE_PAGES
      ? 1
      : Math.min(Math.max(currentPage - 2, 1), pagesCount - MAX_VISIBLE_PAGES + 1);

  const visiblePages = new Array(visiblePagesCount)
    .fill(0)
    .map((_, index) => firstVisiblePage + index);

  const handleChange = (newPage: number) => {
    if (newPage < 1) {
      newPage = 1;
    } else if (newPage > pagesCount) {
      newPage = pagesCount;
    }
    if (newPage !== currentPage) {
      onChangePage?.(newPage);
    }
  };

  return (
    <Container {...props}>
      <PrevButton
        aria-label="prev"
        icon="chevron-left"
        variant="primary-naked"
        onClick={() => handleChange(currentPage - 1)}
      />
      {visiblePagesCount < pagesCount && (
        <>
          {firstVisiblePage > 1 && <PageButton onClick={() => handleChange(1)}>1</PageButton>}
          {firstVisiblePage > 2 && (
            <PageButton onClick={() => handleChange(currentPage - MAX_VISIBLE_PAGES)}>
              ...
            </PageButton>
          )}
        </>
      )}
      {visiblePages.map((page) => (
        <PageButton selected={page === currentPage} onClick={() => handleChange(page)} key={page}>
          {page}
        </PageButton>
      ))}
      {visiblePagesCount < pagesCount && (
        <>
          {firstVisiblePage + MAX_VISIBLE_PAGES < pagesCount && (
            <PageButton onClick={() => handleChange(currentPage + MAX_VISIBLE_PAGES)}>
              ...
            </PageButton>
          )}
          {firstVisiblePage + MAX_VISIBLE_PAGES - 1 < pagesCount && (
            <PageButton onClick={() => handleChange(pagesCount)}>{pagesCount}</PageButton>
          )}
        </>
      )}
      <NextButton
        aria-label="next"
        icon="chevron-right"
        variant="primary-naked"
        onClick={() => handleChange(currentPage + 1)}
      />
    </Container>
  );
};
