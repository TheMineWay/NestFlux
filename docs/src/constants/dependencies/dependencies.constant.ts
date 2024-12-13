import { Dependency } from "@site/src/types/dependencies/dependency.type";

export const DEPENDENCIES = [
  {
    code: "@tanstack/react-query",
    name: "Tanstack React Query",
    url: "https://www.npmjs.com/package/react-query",
    docsUrl: "https://tanstack.com/query/",
  },
  {
    code: "@tanstack/react-router",
    name: "Tanstack React Router",
    url: "https://www.npmjs.com/package/@tanstack/react-router",
    docsUrl: "https://tanstack.com/router/",
    alternatives: [
      {
        code: "react-router-dom",
        name: "React Router DOM",
        url: "https://www.npmjs.com/package/react-router-dom",
      },
    ],
  },
  {
    code: "antd",
    name: "Ant Design",
    url: "https://www.npmjs.com/package/antd",
    docsUrl: "https://ant.design/",
  },
  {
    code: "clsx",
    name: "CLSX",
    url: "https://www.npmjs.com/package/clsx",
    docsUrl: "https://github.com/lukeed/clsx#readme",
    alternatives: [
      {
        code: "classnames",
        name: "Classnames",
        url: "https://www.npmjs.com/package/classnames",
      },
    ],
  },
  {
    code: "luxon",
    name: "Luxon",
    url: "https://www.npmjs.com/package/luxon",
    docsUrl: "https://moment.github.io/luxon/#/",
  },
  {
    code: "rc-picker",
    name: "React Picker",
    url: "https://www.npmjs.com/package/rc-picker",
    docsUrl: "https://react-component.github.io/picker",
  },
  {
    code: "react",
    name: "ReactJS",
    url: "https://www.npmjs.com/package/react",
    docsUrl: "https://react.dev/",
  },
  {
    code: "react-dom",
    name: "React DOM",
    url: "https://www.npmjs.com/package/react-dom",
  },
  {
    code: "@shared/utils",
    name: "Shared Utils",
    url: "workspace:*", // This is a workspace dependency.
  },
  {
    code: "react-dom",
    name: "React DOM",
    url: "https://www.npmjs.com/package/react-dom",
    docsUrl: "https://reactjs.org/docs/react-dom.html",
  },
  {
    code: "@tanstack/router-devtools",
    name: "Tanstack Router DevTools",
    url: "https://www.npmjs.com/package/@tanstack/router-devtools",
    docsUrl: "https://tanstack.com/router/devtools",
  },
  {
    code: "@tanstack/router-plugin",
    name: "Tanstack Router Plugin",
    url: "https://www.npmjs.com/package/@tanstack/router-plugin",
    docsUrl: "https://tanstack.com/router/plugin",
  },
  {
    code: "@testing-library/jest-dom",
    name: "Testing Library Jest DOM",
    url: "https://www.npmjs.com/package/@testing-library/jest-dom",
    docsUrl: "https://testing-library.com/docs/ecosystem-jest-dom/",
  },
  {
    code: "@testing-library/react",
    name: "Testing Library React",
    url: "https://www.npmjs.com/package/@testing-library/react",
    docsUrl: "https://testing-library.com/docs/react-testing-library/intro/",
  },
  {
    code: "@testing-library/user-event",
    name: "Testing Library User Event",
    url: "https://www.npmjs.com/package/@testing-library/user-event",
    docsUrl: "https://testing-library.com/docs/user-event/intro/",
  },
  {
    code: "@types/luxon",
    name: "@types Luxon",
    url: "https://www.npmjs.com/package/@types/luxon",
  },
  {
    code: "@types/react",
    name: "@types React",
    url: "https://www.npmjs.com/package/@types/react",
  },
  {
    code: "@types/react-dom",
    name: "@types React DOM",
    url: "https://www.npmjs.com/package/@types/react-dom",
  },
  {
    code: "@vitejs/plugin-react-swc",
    name: "Vite Plugin React SWC",
    url: "https://www.npmjs.com/package/@vitejs/plugin-react-swc",
    docsUrl: "https://vitejs.dev/plugins/#react",
  },
  {
    code: "@eslint/js",
    name: "Eslint JS",
    url: "https://www.npmjs.com/package/eslint",
    docsUrl: "https://eslint.org/",
  },
  {
    code: "autoprefixer",
    name: "Autoprefixer",
    url: "https://www.npmjs.com/package/autoprefixer",
    docsUrl: "https://github.com/postcss/autoprefixer",
  },
  {
    code: "eslint",
    name: "ESLint",
    url: "https://www.npmjs.com/package/@eslint/js",
    docsUrl: "https://eslint.org/",
  },
  {
    code: "eslint-import-resolver-typescript",
    name: "ESLint Import Resolver TypeScript",
    url: "https://www.npmjs.com/package/eslint-import-resolver-typescript",
    docsUrl:
      "https://github.com/benmosher/eslint-plugin-import/blob/master/resolvers/typescript/README.md",
  },
  {
    code: "eslint-plugin-react-hooks",
    name: "ESLint Plugin React Hooks",
    url: "https://www.npmjs.com/package/eslint-plugin-react-hooks",
    docsUrl:
      "https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks",
  },
  {
    code: "eslint-plugin-react-refresh",
    name: "ESLint Plugin React Refresh",
    url: "https://www.npmjs.com/package/eslint-plugin-react-refresh",
    docsUrl: "https://github.com/facebook/react-refresh",
  },
  {
    code: "globals",
    name: "Globals",
    url: "https://www.npmjs.com/package/globals",
    docsUrl: "https://github.com/sindresorhus/globals",
  },
  {
    code: "jsdom",
    name: "jsdom",
    url: "https://www.npmjs.com/package/jsdom",
    docsUrl: "https://github.com/jsdom/jsdom",
  },
  {
    code: "postcss",
    name: "PostCSS",
    url: "https://www.npmjs.com/package/postcss",
    docsUrl: "https://postcss.org/",
  },
  {
    code: "tailwindcss",
    name: "Tailwind CSS",
    url: "https://www.npmjs.com/package/tailwindcss",
    docsUrl: "https://tailwindcss.com/docs",
  },
  {
    code: "typescript",
    name: "TypeScript",
    url: "https://www.npmjs.com/package/typescript",
    docsUrl: "https://www.typescriptlang.org/",
  },
  {
    code: "typescript-eslint",
    name: "TypeScript ESLint",
    url: "https://www.npmjs.com/package/typescript-eslint",
    docsUrl: "https://typescript-eslint.io/",
  },
  {
    code: "vite",
    name: "Vite",
    url: "https://www.npmjs.com/package/vite",
    docsUrl: "https://vitejs.dev/",
  },
  {
    code: "vitest",
    name: "Vitest",
    url: "https://www.npmjs.com/package/vitest",
    docsUrl: "https://vitest.dev/",
  },
  {
    code: "@nestjs/common",
    name: "@nestjs/common",
    url: "https://www.npmjs.com/package/@nestjs/common",
  },
  {
    code: "@nestjs/core",
    name: "@nestjs/core",
    url: "https://www.npmjs.com/package/@nestjs/core",
  },
  {
    code: "@nestjs/platform-express",
    name: "@nestjs/platform-express",
    url: "https://www.npmjs.com/package/@nestjs/platform-express",
  },
  {
    code: "reflect-metadata",
    name: "Reflect Metadata",
    url: "https://www.npmjs.com/package/reflect-metadata",
  },
  {
    code: "@nestjs/cli",
    name: "@nestjs/cli",
    url: "https://www.npmjs.com/package/@nestjs/cli",
  },
  {
    code: "@nestjs/schematics",
    name: "@nestjs/schematics",
    url: "https://www.npmjs.com/package/@nestjs/schematics",
  },
  {
    code: "@types/node",
    name: "@types/node",
    url: "https://www.npmjs.com/package/@types/node",
  },
  {
    code: "fs",
    name: "Filesystem",
    url: "https://nodejs.org/api/fs.html",
  },
  {
    code: "@inquirer/prompts",
    name: "Inquirer Prompts",
    url: "https://www.npmjs.com/package/@inquirer/prompts",
  },
] as const satisfies Array<Dependency>;