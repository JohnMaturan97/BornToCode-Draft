import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  CodeSandboxOutlined,
  CoffeeOutlined,
  CommentOutlined,
  ClusterOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("");

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast.success(data.message);
    router.push("/login");
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<CodeSandboxOutlined />}
      >
        <Link href="/">
          <a>BornToCode Academy</a>
        </Link>
      </Item>

      {user === null && (
        <>
          <Item
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            icon={<CoffeeOutlined />}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Item>

          <Item
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Item>

        </>
      )}

      {user !== null && (
  
        <SubMenu
          icon={<ClusterOutlined/>} 
          title={user && user.name}
          className="float-right"
        > 
          <Item onClick={logout} className="float-center"
          icon={<LogoutOutlined/>}
          >
            Logout
          </Item>   

          <Item
            onClick={(e) => setCurrent(e.key)}
            icon={<CommentOutlined />} className="float-center"
          >
            <Link href="https://bugchat.netlify.app/">
              <a target="_blank">Messenger</a>
            </Link>
          </Item>   
          
        </SubMenu>
      )}

     
    </Menu>
  );
};

export default TopNav;

