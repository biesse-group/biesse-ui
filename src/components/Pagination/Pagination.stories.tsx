import { type Meta, type StoryObj } from "@storybook/react";
import { useState } from "react";

import { Pagination, type PaginationProps } from "./Pagination";

const PaginationWrapper = ({ currentPage, ...props }: PaginationProps) => {
  const [page, setPage] = useState(currentPage);

  return <Pagination {...props} currentPage={page} onChangePage={setPage} />;
};

const meta: Meta<typeof Pagination> = {
  title: "Layout/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  render: (args) => <PaginationWrapper {...args} />,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    pagesCount: 100,
    currentPage: 1,
  },
};
