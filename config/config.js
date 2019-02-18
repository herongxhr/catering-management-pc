export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
        }]
    ],
    routes: [{
        path: '/',
        component: '../layouts/BasicLayout.js',
        //权限路由
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
            //dashboard
            { path: '/', redirect: '/dashboard/analysis' },
            {
                path: '/menubar',
                icon: 'menu',
                name: 'menubar',
                component: './HelloWorld',
            }
        ]
    }]
}