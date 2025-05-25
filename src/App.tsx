import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-semibold text-2xl">Vite + React</h1>
      <p className="text-amber-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
