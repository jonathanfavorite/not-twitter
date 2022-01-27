import './App.scss';
import Footer from './components/global/footer/Footer';
import Sidebar from './components/global/sidebar/Sidebar';
import StickySearch from './components/global/sticky_search/StickySearch';
import WhatsHappening from './components/global/whats_happening/WhatsHappening';
import WhoToFollow from './components/global/who_to_follow/WhoToFollow';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
        <div id="master_container">
          <Sidebar />
          <div id='main_content'>
              <div id='main_left'>
                <Dashboard />
              </div>
              <div id='main_right'>
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

export default App;
