import './Sass/App.scss';
import { Main, Return, NewIdea, Footer, Separator } from './blocks';
import Header from './components/Header/Header';

import { PluginsCards } from './components/PluginsCards';
import { ReactComponent as MultiplayerOne } from './assets/Multiplayer.svg';
import { ReactComponent as MultiplayerTwo } from './assets/Multiplayer-1.svg';
import { ReactComponent as MultiplayerThree } from './assets/Multiplayer-2.svg';
import { ReactComponent as MultiplayerFour } from './assets/Multiplayer-3.svg';
import { ReactComponent as MultiplayerFive } from './assets/Multiplayer-4.svg';
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='arrows'>
        <MultiplayerOne className='multiplayer-1 multiplayer' />
        <MultiplayerTwo className='multiplayer-2 multiplayer' />
        <MultiplayerThree className='multiplayer-3 multiplayer' />
        <MultiplayerFour className='multiplayer-4 multiplayer' />
        <MultiplayerFive className='multiplayer-5 multiplayer' />
        <Main />
        <PluginsCards />
      </div>
      <Return />
      <Separator />
      <NewIdea />
      <Footer />
    </div>
  );
}

export default App;
