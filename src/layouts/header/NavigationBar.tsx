import React from "react";
import styles from './NavigationBar.less';
import {Link} from "umi";

type NavigationBarProps = {}

export default function NavigationBar(props: NavigationBarProps) {
  return <div className={styles.NavigationBar}>
    <Link  to="/">
      <Item name={'Convert'}/>
    </Link>
  </div>
}


type ItemType = {name: string}
function Item(props:ItemType) {
  return (<div className={styles.NavigationBarItem}>{props.name}</div>)
}
