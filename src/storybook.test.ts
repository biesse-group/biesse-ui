import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { styleSheetSerializer } from "jest-styled-components/serializer";
import path from "path";

initStoryshots({
  test: (story) => {
    // FIXME Workaround for https://github.com/storybookjs/storybook/issues/16692
    const fileName = path.resolve(__dirname, "..", story.context.fileName);
    return multiSnapshotWithOptions()({
      ...story,
      context: { ...story.context, fileName },
    });
  },
  framework: "react",
  renderer: render,
  storyKindRegex: /^((?!.*?Pages\/).)*$/,
  snapshotSerializers: [styleSheetSerializer],
});
