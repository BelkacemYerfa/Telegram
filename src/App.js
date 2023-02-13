import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { ChatComponent } from './AllChats/ChatComponent';
import { NavBar } from './Navigation/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
       <Routes>
         <Route path='/' element={<ChatComponent />} />
         <Route path='/Groupes' element={<ChatComponent />} />
         <Route path='/Personal' element={<ChatComponent />}/>
         <Route path='/AskAI' element={<ChatComponent />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
