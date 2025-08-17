import { useEffect, useState } from 'react';


export default function TicketsList(){
  const [items,setItems] = useState([]);
  const [q,setQ] = useState('');
  const fetchIt = async ()=>{ const {data} = await api.get('/tickets',{ params:{ q } }); setItems(data); };
  useEffect(()=>{ fetchIt(); },[]);
  return (
    <div style={{padding:'1rem'}}>
      <a href="/login">Login</a>
      <h2>Tickets</h2>
      <input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
      <button onClick={fetchIt}>Search</button>
      <table><thead><tr><th>Title</th><th>Priority</th><th>Status</th></tr></thead>
        <tbody>{items.map(t=><tr key={t._id}><td><a href={`/ticket/${t._id}`}>{t.title}</a></td><td>{t.priority}</td><td>{t.status}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
