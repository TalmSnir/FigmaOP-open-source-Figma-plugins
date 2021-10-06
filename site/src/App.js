import './Sass/App.scss';
import { Main, Return, NewIdea, Footer ,Separator} from './blocks';
import Header from './components/Header/Header';

import { PluginsCards } from './components/PluginsCards';

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <PluginsCards />
      <Return />
    <Separator/>
      <NewIdea />
      <Footer />
    </div>
  );
}

export default App;
