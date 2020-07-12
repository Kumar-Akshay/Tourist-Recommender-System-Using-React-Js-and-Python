import {Menu} from 'antd';
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";


Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


function Header({ user }) {

const router = useRouter();

return (
  <Menu  mode="horizontal" theme="dark">
     
    <Menu.Item key="login" style={{float:"right"}}>
      <Link href='/login'>
        <a>Login</a>    
      </Link>
    </Menu.Item>


    <Menu.Item key="signup" style={{float:"right"}}>
      <Link href='/signup'>
        <a>Signup</a>    
      </Link>
    </Menu.Item>

    <Menu.Item key="home" style={{float:"right"}}>
      <Link href='/index'>
        <a>Home</a>    
      </Link>
    </Menu.Item>

  </Menu>
);



}

export default Header;
