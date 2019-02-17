import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default BasicLayout;