import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
    roots: [
        "<rootDir>/test",
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        //when find this kind of files, do nothing and move on
        "\\.(jpg)$":"<rootDir>/test/mockFile.ts",
        "\\.(css)$":"<rootDir>/test/mockFile.ts"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/services/**', //Not collect coverage from this folder(!)
        '!src/react-app-env.d.ts' //Not collect coverage from this folder(!)
    ]
}

export default config; 