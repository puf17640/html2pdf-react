import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DocumentWrapper } from '../.';

const App = () => {
  return (
    <DocumentWrapper>
      <div>Hallo!</div>
    </DocumentWrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
