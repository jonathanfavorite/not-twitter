import react, { useEffect } from "react";
import Footer from "../../global/footer/Footer";
import Sidebar from "../../global/sidebar/Sidebar";
import StickySearch from "../../global/sticky_search/StickySearch";
import WhatsHappening from "../../global/whats_happening/WhatsHappening";
import WhoToFollow from "../../global/who_to_follow/WhoToFollow";
import Dashboard from "../../../pages/Dashboard/Dashboard";
import './DashboardScreen.scss';
export default function DashboardScreen() {

  useEffect(() => {

  },[]);

  return (
    <>
      <div id="master_container">
        <Sidebar />
        <div id="main_content">
          <div id="main_left">
            <Dashboard />
          </div>
          <div id="main_right">
            <StickySearch />
            <WhatsHappening />
            <WhoToFollow />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
