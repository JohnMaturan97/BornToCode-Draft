import { useState, useEffect  } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  CloudServerOutlined,
  BookOutlined,
  RestOutlined,
  UserAddOutlined,
  WechatOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item key="/"
    onClick={e => setCurrent(e.key)} 
      icon={<CloudServerOutlined />}>
        <Link href="/">
          <a>BornToCode Academy</a>
        </Link>
      </Item>

      <Item key="/login" 
      onClick={e => setCurrent(e.key)} 
      icon={<RestOutlined/>}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Item>

      <Item key="/register" 
      onClick={e => setCurrent(e.key)} 
      icon={<UserAddOutlined />}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Item>

      <Item key="/messenger" 
      onClick={e => setCurrent(e.key)}  
      icon={<WechatOutlined />}>
        <Link href="https://bugchat.netlify.app/">
          <a>Messenger</a>
        </Link>
      </Item>
     
    </Menu>
  );
};

export default TopNav;
