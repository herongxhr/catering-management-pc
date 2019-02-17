export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
        }]
    ],
    routes: [{
        path: '/',
        component: '../layouts/BasicLayout.js',
        routes: [
            {
                path: 'helloworld',
                component: './HelloWorld',
            }
        ]
    }]
}