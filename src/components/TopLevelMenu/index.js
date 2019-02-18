import React from 'react';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';
import { getFlatMenuKeys } from './MenuUtils';

// React.memo()可接受2个参数，第一个参数为纯函数的组件，
// 第二个参数用于对比props，控制是否刷新，与shouldComponentUpdate()功能类似
// https://www.jianshu.com/p/b3d07860b778
const SiderMenuWrapper = React.memo(props => {
    const { isMobile, menuData, collapsed, onCollapse } = props;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return isMobile ? (
        <Drawer
            visible={!collapsed}
            placement="left"
            onClose={() => onCollapse(true)}
            style={{
                padding: 0,
                height: '100vh',
            }}
        >
            <SiderMenu {...props} flatMenuKeys={flatMenuKeys} collapsed={isMobile ? false : collapsed} />
        </Drawer>
    ) : (
            <SiderMenu {...props} flatMenuKeys={flatMenuKeys} />
        );
});

export default SiderMenuWrapper;
