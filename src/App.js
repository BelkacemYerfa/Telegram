import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { ChatComponent } from './AllChats/ChatComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/hello' element={<ChatComponent />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
