import {Button, Dropdown, Menu} from "antd";
import {wallet} from "@/domain/near/global";
import getConfig from "@/domain/near/config";
import styles from "./AccountEntry.less"

export default function AccountEntry() {
  return wallet.isSignedIn()?<Account/>:<RequireLogin/>
}

function Account() {
  return <Dropdown overlay={AccountMenu}>
    <a className={styles.AccountEntryItem} onClick={e => e.preventDefault()}>
      {wallet.getAccountId()}
    </a>
  </Dropdown>
}

function AccountMenu() {
  let sign_out = ()=>{
    setTimeout(() => {
      wallet.signOut();
      window.location.href = "/";
    }, 1000);
  }
  return <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={sign_out} >
        sign out
      </a>
    </Menu.Item>
  </Menu>
}

function RequireLogin() {
  return <Button type="primary" onClick={()=>wallet.requestSignIn(getConfig().CONVERTOR_CONTRACT_ID)}>
    Connect to NEAR
  </Button>
}
