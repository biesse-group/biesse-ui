import { toMatchImageSnapshot } from "jest-image-snapshot";
import { addSerializer } from "jest-specific-snapshot";
import "jest-styled-components";
import { styleSheetSerializer } from "jest-styled-components/serializer";

const snapshotDir = `${process.cwd()}/src/stories/__snapshots__`;

module.exports = {
  setup() {
    addSerializer(styleSheetSerializer);
    expect.extend({ toMatchImageSnapshot });
    expect.addSnapshotSerializer(styleSheetSerializer);
  },
  async postRender(page, context) {
    // const image = await page.screenshot();
    // expect(image).toMatchImageSnapshot({
    //   customSnapshotsDir: snapshotDir,
    //   customSnapshotIdentifier: context.id,
    // });
    const elementHandler = await page.$("#root");
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSpecificSnapshot(`${snapshotDir}/${context.id}.shot`);
  },
};
