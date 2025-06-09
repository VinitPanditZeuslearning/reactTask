import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './pages/Login'
import styled from 'styled-components';
import DashBoard from './pages/DashBoard';
import './index.css'
const Root = styled.div`
display: flex;
`

function App() {

  return (
    <>
      <div className='container'>
        <Header></Header>

        {/* <Login></Login> */}
        <DashBoard></DashBoard>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
