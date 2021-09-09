const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const withImages = require('next-images')

module.exports = withImages(
    withBundleAnalyzer({
        webpack: (config) => {
            return {
                ...config,
                plugins: [...config.plugins, new AntdDayjsWebpackPlugin()],
            }
        },
    })
)

// const withAntdLess = require('next-plugin-antd-less')
// const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
// const withTM = require('next-transpile-modules')([
//     '@ant-design/colors',
//     '@ant-design/icons',
//     '@ant-design/icons-svg',
//     '@ant-design/react-slick',
//     'antd',
//     'rc-util',
//     'rc-pagination',
//     'rc-align',
//     'rc-cascader',
//     'rc-checkbox',
//     'rc-collapse',
//     'rc-dialog',
//     'rc-drawer',
//     'rc-dropdown',
//     'rc-field-form',
//     'rc-image',
//     'rc-input-number',
//     'rc-mentions',
//     'rc-menu',
//     'rc-motion',
//     'rc-notification',
//     'rc-overflow',
//     'rc-pagination',
//     'rc-picker',
//     'rc-progress',
//     'rc-rate',
//     'rc-resize-observer',
//     'rc-select',
//     'rc-slider',
//     'rc-steps',
//     'rc-switch',
//     'rc-table',
//     'rc-tabs',
//     'rc-textarea',
//     'rc-tooltip',
//     'rc-tree',
//     'rc-tree-select',
//     'rc-trigger',
//     'rc-upload',
//     'rc-util',
//     'rc-virtual-list',
// ])

// module.exports = withTM(
//     withAntdLess({
//         // optional
//         modifyVars: { '@primary-color': '#04f' },

//         webpack: (config) => {
//             return {
//                 ...config,
//                 plugins: [...config.plugins, new AntdDayjsWebpackPlugin()],
//             }
//         },

//         // ONLY for Next.js 10, if you use Next.js 11, delete this block
//         future: {
//             webpack5: true,
//         },
//     })
// )