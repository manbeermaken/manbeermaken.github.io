import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="m-0 mx-auto flex h-dvh max-w-7xl flex-col">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
