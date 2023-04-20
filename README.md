# Biesse Group UI

This project is a React component library for Biesse Group websites:

- [HSD Mechatronics](https://www.hsd.it/)
- [Biesse Group](https://www.biessegroup.com/it/)

The library is written in [React](https://it.reactjs.org/) and [Typescript](https://www.typescriptlang.org/), and it uses [Styled Components](https://styled-components.com/) as CSS-in-JS framework for styling and theming.

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the storybook documentation app in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test-storybook`

With the Storybook app running on [http://localhost:6006](http://localhost:6006), you can run this command to execute test-runner over each component Story.

#### **Arguments**

| Command      | Description                |
| ------------ | -------------------------- |
| `--coverage` | will collect coverage data |

View documentation at: [Storybook - Test Runner](https://storybook.js.org/docs/react/writing-tests/test-runner).

### `npm run build-storybook`

Build the Storybook app, so it can be deployed on GitHub pages.\
This is for the Component Library documentation.

### `npm run test`

Executes every test file in the `src` folder.\
In particular, you can run:

```sh
npm run test -- storybook.test.ts
```

It will execute [Storyshots](https://storybook.js.org/docs/react/writing-tests/snapshot-testing) for having snapshot tests over each story.

### `npm run build`

Builds the component library to publish it on GitHub Packages for production to the `dist` folder.\
It will export components, themes and global styles.

## Learn More

You can learn more in the following documentation pages:

- [React](https://it.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/)
- [Styled Components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
