export default function Home() {
  const sections = [
    { title: "☕ قهوة سخونة", items: [ {n:"إسبرسو", p:"10 د.م"}, {n:"نص نص", p:"13 د.م"}, {n:"قهوة معصرة", p:"15 د.م"}, {n:"كابوتشينو", p:"20 د.م"} ] },
    { title: "🧃 عصائر طبيعية", items: [ {n:"أفوكادو", p:"28 د.م"}, {n:"باناشي", p:"25 د.م"}, {n:"مانغو", p:"22 د.م"} ] },
    { title: "🥐 فطور بني رزين", items: [ {n:"فطور بلدي كامل", p:"38 د.م"}, {n:"مسمن + عسل", p:"20 د.م"}, {n:"بيض + خليع", p:"30 د.م"} ] },
  ];
  return (
    <div style={{background:'#fdf8f0',minHeight:'100vh',padding:'12px',fontFamily:'system-ui'}}>
      <div style={{maxWidth:'420px',margin:'0 auto',background:'#fff',borderRadius:'28px',overflow:'hidden',boxShadow:'0 15px 40px rgba(0,0,0,0.1)'}}>
        <div style={{background:'#111',color:'#fff',padding:'28px',textAlign:'center'}}>
          <h1 style={{margin:0,fontSize:'26px',letterSpacing:'1px'}}>CAFÉ BNI RZIN</h1>
          <p style={{margin:'6px 0 0',color:'#d4b483'}}>مقهى بني رزين - Oulad Hamida</p>
        </div>
        <div style={{padding:'18px'}}>
          {sections.map(s=>(
            <div key={s.title} style={{marginBottom:'26px'}}>
              <h2 style={{fontSize:'14px',borderLeft:'4px solid #d4b483',paddingLeft:'10px',marginBottom:'12px'}}>{s.title}</h2>
              {s.items.map(i=>(
                <div key={i.n} style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px dashed #eee'}}>
                  <span style={{fontWeight:600}}>{i.n}</span>
                  <span style={{background:'#111',color:'#fff',padding:'3px 10px',borderRadius:'20px',fontSize:'12px'}}>{i.p}</span>
                </div>
              ))}
            </div>
          ))}
          <a href="https://wa.me/212600000000" style={{display:'block',background:'#25D366',color:'#fff',textAlign:'center',padding:'16px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',marginTop:'10px'}}>كوموندي عبر واتساب 📱</a>
        </div>
      </div>
    </div>
  )
}
