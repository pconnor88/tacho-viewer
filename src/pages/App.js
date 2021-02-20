import './App.css';
import { MenuBar } from '../components/menu-bar';
import { FileTabs } from '../components/file-tabs';
import { ContentsTabs } from '../components/contents-tabs';

function App() {
  return (
    <div className="app">

      <MenuBar />
      <FileTabs />
      <div class="file-contents">
        <div class="file-sections">
          <ContentsTabs></ContentsTabs>
        </div>
      </div>

    </div>
  );
}

export default App;
