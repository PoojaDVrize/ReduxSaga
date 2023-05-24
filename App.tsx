import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { thunkStore } from './src/redux-thunk/thunkStore';
//import PersonDetail from './src/screens/PersonDetail';
import PostDetails from './src/screens/PostDetails';
// import { store } from './src/redux/store';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

//let persistor = persistStore(store);

function App(): JSX.Element {

  return (
    <Provider store={thunkStore}>
      <PostDetails/>
      {/* <PersistGate persistor={persistor}>
        <PersonDetail />
      </PersistGate> */}
    </Provider>
  );
}

export default App;
