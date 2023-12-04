import type { TestRunnerConfig } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  postVisit: async (page, context) => {
    const elementHandler = await page.$("#storybook-root");
    const innerHTML = await elementHandler?.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
