import { useState } from 'react';
import Toggle from './components/Toggle'
import './css/App_mio.css'

const arr = []

function App() {
  const [estados,setEstados] = useState([false,false,false])
  const style0 = {fontWeight: estados[0]? "bold" : null}
  const style1 = {fontWeight: estados[1]? "bold" : null}
  const style2 = {fontWeight: estados[2]? "bold" : null}
  return (
    <section className="container">
      <Toggle arr={arr} num={0} checked={estados} setEstados={setEstados}/>
      <p className="word" style={style0}>Fast</p>
      <Toggle arr={arr} num={1} checked={estados} setEstados={setEstados}/>
      <p className="word" style={style1}>Cheap</p>
      <Toggle arr={arr} num={2} checked={estados} setEstados={setEstados}/>
      <p className="word" style={style2}>Good</p>
    </section>
  );
}

export default App;
