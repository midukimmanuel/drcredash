import React, { Component } from "react";
import "./style.css";
import { Layout, Menu, Icon } from "antd";
import {Route, Switch} from 'react-router-dom';
import pageRoutes from "../../../config/router/index"

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";


const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false,
  };

  nav 

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {pageRoutes.map((data, i) => {
            return(
              <Menu.Item key={i} icon={data.icon}>
              {data.name}
              </Menu.Item>
            )
          })
          }
            
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
          <Switch>
            <Route exact path="/" component={() => <h1>Ini Route</h1>}  />
            <Route path="/about" component={() => <h1>Ini Halaman About</h1>} exact />
            <Route path="/contact" component={() => <h1>Ini Halaman Kontak</h1>} exact />
          </Switch>
              
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
