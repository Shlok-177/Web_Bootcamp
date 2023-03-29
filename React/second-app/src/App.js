import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import  About  from './About';
import { API } from './API';
import './App.css';
import { Contact } from './Contact';
import Error from './Error';
import { Footer } from './Footer';
import  Homepage from './Homepage';
import { Navbar } from './Navbar';
import SubmitForm from './SubmitForm';
import { User } from './User';

function App() {


  const Navigate = useNavigate();
  return (
    <>
    {/* <SubmitForm /> */}
    {/* <API /> */}

    <Navbar />
    <Routes>
      <Route path='/' element = {<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact/:num' element={<Contact />} />
      <Route path = "/user/:name/:age" element={<User />} />
      {/* <Route path='/*' element={<Error />} /> */}
    </Routes>
    {/* <h1>Hello</h1> */}
    <button className='border broder-black bg-blue-800 text-white rounded-md p-2' onClick={()=>{Navigate('/user/manav/20')}}>User/manav/20</button>
    <button className='border broder-black bg-blue-800 text-white rounded-md p-2' onClick={()=>{Navigate('/user/xyz/21')}}>User/xyz/21</button>
    <button className='border broder-black bg-blue-800 text-white rounded-md p-2' onClick={()=>{Navigate('/user/jay/19')}}>User/jay/19</button>

    <Footer />

    </>
  );
}

export default App;
