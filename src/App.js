import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { ChatComponent } from './AllChats/ChatComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<ChatComponent />} />
         <Route path='/Groupes' element={<ChatComponent />} />
         <Route path='/AskAI' element={<ChatComponent />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
