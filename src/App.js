import store from './Store'
import { Provider } from 'react-redux'
import Conter from './Conter'

const App = () => (
  <Provider store={store}>
    <Conter />
  </Provider>
);

export default App;
