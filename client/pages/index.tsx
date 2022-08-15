import type { NextPage } from "next";
import Chat from "../components/Chat";
import { connect } from "react-redux";
import Router from "next/router";
import Sidebar from "../components/Sidebar";
import CurrentDialog from "../components/CurrentDialog";
import { useEffect } from "react";

type Props = {
  isAuth: boolean;
};

const Home: NextPage<Props> = ({ isAuth }) => {
  useEffect(() => {
    if (!isAuth) {
      Router.push("/signin");
    }
  }, []);
  return (
    <>
      <Chat>
        <Sidebar />
        <CurrentDialog />
      </Chat>
    </>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(Home);
