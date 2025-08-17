import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function TicketDetail(){
  const { id } = useParams();
  const [t,setT] = useState(null);
  useEffect(()=>{ api.get(`/tickets/${id}`).then(r=>setT(r.data)); },[id]);
  if(!t) return null;
  return <div style={{padding:'1rem'}}><h2>{t.title}</h2><p>{t.description}</p></div>;
}
