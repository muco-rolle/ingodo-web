const { override, addLessLoader } = require('customize-cra');

module.exports = override(
    addLessLoader({
        // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
        lessOptions: {
            javascriptEnabled: true,

            modifyVars: {
                '@base-color': '#3182CE',
                '@text-color': '#718096',
                '@font-family-base': `'HK Grotesk', sans-serif`,
            },
        },
    })
);
