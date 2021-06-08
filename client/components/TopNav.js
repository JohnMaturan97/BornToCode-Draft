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
  SketchOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Item, SubMenu,ItemGroup } = Menu;

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
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            className="float-right"
            icon={<UserAddOutlined />}
          >
            <Link href="/register">
              <a>Register</a>
            </Link>
          </Item>

          <Item
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            className="float-right"
            icon={<CoffeeOutlined />}
          >
            <Link href="/login">
              <a>Login</a>
            </Link>
          </Item>
        </>
      )}

      {user !== null && (
        <SubMenu
          icon={<BarsOutlined/>}
          title={user && user.name}
          className="float-right"
        >
          <ItemGroup>
            <Item key="/user" icon={<ClusterOutlined />}>
              <Link href="/user">
                <a>DashBoard</a>
              </Link>
            </Item>

          <Item
            onClick={logout}
            className="float-center"
            icon={<LogoutOutlined />}
          >
            Logout
          </Item>

          <Item
            onClick={(e) => setCurrent(e.key)}
            icon={<SketchOutlined/>}
            className="float-center"
          >
            <Link href="https://codeverse-network-site.herokuapp.com/login">
              <a target="_blank">Refactor</a>
            </Link>
          </Item>
          </ItemGroup>
          
        </SubMenu>
      )}
    </Menu>
  );
};

export default TopNav;
