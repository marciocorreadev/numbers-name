module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                "@config": "./src/config/index",
                "@controllers": "./src/controllers",
                "@errors": "./src/errors",
                "@services": "./src/services",
                "@utils": "./src/utils",
                "@validators": "./src/validators/",
                "@app": "./src/app"
            }
        }]
    ],
    ignore: [
        '**/*.spec.js'
    ]
}