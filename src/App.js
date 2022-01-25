import './App.scss';
import Sidebar from './components/global/sidebar/Sidebar';
import StickySearch from './components/global/sticky_search/StickySearch';
import WhatsHappening from './components/global/whats_happening/WhatsHappening';
import Dashboard from './components/specific/Dashboard/Dashboard';

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
                
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
