import './App.css';
import Header from './components/Header/Header';
import Main from './blocks/Main';
import Return from './blocks/Return';
import PluginsCards from './components/PluginsCards/PluginsCards';
import NewIdea from './blocks/NewIdea';
import Footer from './blocks/Footer';
function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <PluginsCards />
      <Return />
      <NewIdea />
      <Footer />
    </div>
  );
}

export default App;
