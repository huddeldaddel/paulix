import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './components/GameContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GameContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
