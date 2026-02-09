import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';
import ServicesComponent from './components/Services';
import './index.css'
function App() {
  return (
    <div className='flex flex-col items-center'>
      <BodyComponent />
      <ServicesComponent />
    </div>
  )
}

export default App