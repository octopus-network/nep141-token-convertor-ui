import NavigationBar from "@/layouts/header/NavigationBar";
import styles from './Header.less';
import logSrc from '@/assets/Convert-logo.svg';
import {Dropdown, Menu} from "antd";
import AccountEntry from "@/layouts/header/AccountEntry";


export default function Header() {
  return <div className={styles.Hearer}>
    <div style={{width: "10%",padding: "20px"}}>
      <img style={{height: "80%",width:"80%"}} src={logSrc} alt="svg"/>
    </div>
    <div style={{width: "70%"}}>
      <NavigationBar/>
    </div>
    <div style={{width: "20%"}} >
      <AccountEntry/>
    </div>
  </div>
}

function menu() {
  return (<Menu>
    <Menu.Item>
      <a target="" rel="noopener noreferrer"/>
    </Menu.Item>
  </Menu>)
}

