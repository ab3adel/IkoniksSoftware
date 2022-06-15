const withImages = require('next-images')
const { i18n } = require('./next-i18next.config')
const path = require('path')
module.exports = withImages(
    {
        images: {
            disableStaticImages: true
        },
        experimental: {
            // Enables the styled-components SWC transform
            styledComponents: true
        }
        ,
        esModule: false,
        i18n
        , distDir: 'build',

    }
);


// "next": "^10.0.0",