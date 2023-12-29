import './App.css'
import {MyComponent,defineCustomElements} from '../../react-library'
defineCustomElements();
function App() {


  return (
    <>
      <MyComponent first='Fady' last='Youssef'></MyComponent>
    </>
  )
}

export default App
