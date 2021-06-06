import {Menu} from 'antd';
import Link from 'next/link';
import {CloudServerOutlined, BookOutlined, LoginOutlined, LogoutOutlined, WechatOutlined} from '@ant-design/icons';

const {Item} = Menu;

const TopNav = () => {
    return (
        <Menu className='navbar'  mode='horizontal' >
            
            <Item icon={<CloudServerOutlined/>}>
                <Link href='/'>
                    <a>BornToCode Academy</a>
                </Link>
            </Item>

            <Item icon={<BookOutlined/>}>
                <Link href='/'>
                    <a>Study Tracker</a>
                </Link>
            </Item>

            <Item icon={<LoginOutlined/>}>
                <Link href='/login'>
                    <a>Login</a>
                </Link>
            </Item>

            <Item icon={<LogoutOutlined/>}>
                <Link href='/register'>
                    <a>Register</a>
                </Link>
            </Item>

            

            <Item icon={<WechatOutlined/>}>
                <Link href='https://bugchat.netlify.app/'>
                    <a>Messenger</a>
                </Link>
            </Item>

            

        </Menu>
    )
}

export default TopNav;