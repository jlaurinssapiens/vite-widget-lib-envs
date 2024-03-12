import reactLogo from './assets/react.svg'
import './App.css'
// import Main from 'widget/Main';
// import { RemoteAppWrapper } from 'remote'
import { RemoteAppWrapper } from 'shared'
import { store } from './store';

function App() {
  return (
    <div className="App border-4 border-green-600 p-24 gap-6 flex flex-col w-full h-full">
      <div id="scroll" className='text-xl text-green-600'>This is Studio</div>
      <div className='border-2 border-green-400 w-64 h-96'></div>
      <div className='border-2 border-green-400 w-64 h-96'></div>
      {/* <Main store={store} /> */}
      <RemoteAppWrapper store={store} />


    </div>
  )
}

export default App