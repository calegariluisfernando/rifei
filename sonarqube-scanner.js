const scanner = require('sonarqube-scanner');

scanner({
    serverUrl: `https://sonarcloud.io`,
    token: `b537e6b0aebdc140db245248ca80fa6ce051e544`,
    options: {
        "sonar.organization": `calegariluisfernando`,
        "sonar.projectKey": `calegariluisfernando_rifei-frontend`,
        "sonar.exclusions": "**/*.test.tsx",
        "sonar.sources": "./src",
        "sonar.tests": "./src",
        "sonar.test.inclusions": "**/*.test.tsx,**/ *.test.ts",
        "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
        "sonar.testExecutionReportPaths": "test-report.xml",
        "sonar.eslint.reportPaths": "eslint-report.json"
    },
}, () => process.exit()
);