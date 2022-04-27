import { IRouteComponentProps } from 'umi'
import Header from "@/layouts/header/Header";

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (<div>
    <Header/>
      {children}
  </div>
    );
}
