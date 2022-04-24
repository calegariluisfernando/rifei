const scanner = require('sonarqube-scanner');

scanner({
    serverUrl: `${process.env.SONAR_URL}`,
    token: `${process.env.SONAR_TOKEN}`,
    options: {
        "sonar.sources": "./src",
        "sonar.projectKey": `${process.env.SONAR_PROJECT_KEY}`,
        "sonar.exclusions": "**/*.test.tsx",
        "sonar.tests": "./src",
        "sonar.test.inclusions": "**/*.test.tsx,**/ *.test.ts",
        "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
        "sonar.testExecutionReportPaths": "test-report.xml",
        "sonar.eslint.reportPaths": "eslint-report.json"
    },
}, () => process.exit()
);