// Publishable client key: database grants and RLS control access, not key secrecy.
const URL='https://tkowkkymoecmhpnktcli.supabase.co';
const KEY='sb_publishable_yeBjtVW6D_D2CyAtlbuTAg_ITkYWcNw';
let visitor;
function visitorId(){
 if(visitor)return visitor;
 try{visitor=localStorage.getItem('kiki-visitor');}catch{}
 if(!/^[0-9a-f-]{36}$/i.test(visitor||''))visitor=crypto.randomUUID();
 try{localStorage.setItem('kiki-visitor',visitor);}catch{}
 return visitor;
}
async function request(path,options={}){
 let response;
 try{response=await fetch(URL+'/rest/v1/'+path,{...options,headers:{apikey:KEY,'Content-Type':'application/json'},signal:AbortSignal.timeout(15000)});}
 catch{throw new Error('Could not reach the garden. Please check your connection and try again.');}
 const data=await response.json();
 if(!response.ok){
  if(data.code==='P0001')throw new Error(data.message);
  throw new Error('The garden could not save or load messages. Please try again shortly.');
 }
 return data;
}
export async function loadMessages(){
 const rows=await request('kiki_messages?select=id,name,message,created_at&order=created_at.desc,id.desc&limit=200');
 return rows.reverse();
}
export async function saveMessage(name,message,id){
 const rows=await request('rpc/leave_kiki_message',{method:'POST',body:JSON.stringify({p_id:id,p_visitor:visitorId(),p_name:name.trim(),p_message:message.trim()})});
 if(!rows?.[0]?.id)throw new Error('No save confirmation received. Please try again.');
 return rows[0];
}
