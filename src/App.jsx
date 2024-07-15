import { useState } from 'react'
import './App.css'
import Navigator from './components/Containers/Navigator'
import SolarSystemScene from './components/Containers/SolarSystemScene'
import { FocusContext } from './utils/contexts/Contexts';

function App() {

  const [focus, setFocus] = useState("sun");

  return (
    <section className='w-screen h-screen relative'>
      
      <FocusContext.Provider value={[focus, setFocus]}>

      <SolarSystemScene/>

      <Navigator/>

      </FocusContext.Provider>

      
    </section>
  )
}

export default App
