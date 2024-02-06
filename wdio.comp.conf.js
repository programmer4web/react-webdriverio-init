import { config as baseConfig } from './wdio.conf.js'

export const config = {
    ...baseConfig,

    runner: ['browser', {
        preset: 'react',

        coverage: {
            enabled: true,
            statements: 100,
            branches: 50,
            functions: 100,
            lines: 100
        }
    }]
}