import { FC } from "react";
import styled from "styled-components";

import { IconButton } from "../IconButton";
import { PageButton } from "./PageButton";

export type PaginationProps = {
  pagesCount: number;
  currentPage: number;
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

export const Pagination: FC<PaginationProps> = ({ pagesCount, currentPage, onChangePage }) => {
  const visiblePages = new Array(pagesCount).fill(0).map((_, i) => i + 1);

  const handleChange = (newPage: number) => {
    if (newPage !== currentPage && newPage >= 1 && newPage <= pagesCount) {
      onChangePage?.(newPage);
    }
  };

  return (
    <Container>
      <PrevButton
        aria-label="prev"
        icon="chevron-left"
        variant="primary-naked"
        onClick={() => handleChange(currentPage - 1)}
      />
      {visiblePages.map((page) => (
        <PageButton selected={page === currentPage} onClick={() => handleChange(page)}>
          {page}
        </PageButton>
      ))}
      <NextButton
        aria-label="next"
        icon="chevron-right"
        variant="primary-naked"
        onClick={() => handleChange(currentPage + 1)}
      />
    </Container>
  );
};
