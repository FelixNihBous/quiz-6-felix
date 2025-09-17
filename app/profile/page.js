"use client"

import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

export default function ProfilePage() {
    const menuItems = [
        {
            key: '1',
            label: <Link href="/">Home</Link>,
        },
        {
            key: '2',
            label: <Link href="/profile">Profile</Link>,
        },
    ];

    const breadcrumbItems = [
        {
            title: <Link href="/">Home</Link>,
        },
        {
            title: 'Profile',
        },
    ];
    return (
        <Layout style={{ height: '100vh' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                    items={menuItems}
                >
                </Menu>
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                    items={breadcrumbItems}
                >
                </Breadcrumb>
                <div
                    style={{
                        background: "white",
                        minHeight: 280,
                        padding: 24,
                        borderRadius: 16,
                    }}
                >
                    <h1>Profile Page</h1>
                    <p>This page displays user profile information.</p>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
}