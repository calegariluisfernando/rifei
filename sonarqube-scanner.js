import scanner from 'sonarqube-scanner';

scanner({
    serverUrl: `${SONAR_URL}`,
    token: `${SONAR_TOKEN}`,
    options: {
        "sonar.sources": "./src",
        "sonar.projectKey": `${SONAR_PROJECT_KEY}`,
        "sonar.exclusions": "**/*.test.tsx",
        "sonar.tests": "./src",
        "sonar.test.inclusions": "**/*.test.tsx,**/ *.test.ts",
        "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
        "sonar.testExecutionReportPaths": "test-report.xml",
        "sonar.eslint.reportPaths": "eslint-report.json"
    },
}, () => process.exit()
);