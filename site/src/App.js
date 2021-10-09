import './Sass/App.scss';
import { Main, Return, NewIdea, Footer, Separator } from './blocks';
import Header from './components/Header/Header';
import Multiplayer from './components/Multiplayer';
import { PluginsCards } from './components/PluginsCards';

function App() {
  return (
    <div className='App'>
      <Header />
      <Multiplayer>
        <Main />
        <PluginsCards />
      </Multiplayer>
      <Return />
      <Separator />
      <NewIdea />
      <Footer />
    </div>
  );
}

export default App;
