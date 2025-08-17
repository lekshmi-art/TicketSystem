import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketsList from './pages/TicketsList';
import Login from './pages/Login';
import TicketDetail from './pages/TicketDetail';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<TicketsList/>}/>
        <Route path="/ticket/:id" element={<TicketDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}
