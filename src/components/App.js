import Article from './Article.js';
import List from './ResourceList.js';
import resources from '../resources-list.json';
import Header from './Header.js';
import Cover from './Cover.js';

const App =() => {
  return (
    <div className="App tc">
      <header className="App-header">
          <Header />
          <Cover />
          <List />
      </header>
    </div>
  );
}

export default App;
