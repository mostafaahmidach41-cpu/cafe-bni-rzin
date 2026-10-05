export default function Home() {
  return (
    <div style={{background:'#fdf8f0', minHeight:'100vh', padding:'12px', fontFamily:'system-ui'}}>
      <div style={{maxWidth:'420px', margin:'0 auto', background:'#fff', borderRadius:'28px', overflow:'hidden', boxShadow:'0 15px 40px rgba(0,0,0,0.1)'}}>
        <div style={{background:'#111', color:'#fff', padding:'28px', textAlign:'center'}}>
          <h1 style={{margin:0, fontSize:'26px', letterSpacing:'1px'}}>CAFÉ BNI RZIN</h1>
          <p style={{margin:'8px 0 0', color:'#d4b483', fontSize:'14px'}}>مقهى بني رزين - Oulad Hamida</p>
        </div>
        <div style={{padding:'18px'}}>
          <h3 style={{fontSize:'14px', borderLeft:'4px solid #d4b483', paddingLeft:'10px', margin:'20px 0 10px'}}>☕ قهوة سخونة</h3>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>إسبرسو</span><b>10 د.م</b></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>نص نص</span><b>13 د.م</b></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>كابوتشينو</span><b>20 د.م</b></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>قهوة معصرة</span><b>15 د.م</b></div>

          <h3 style={{fontSize:'14px', borderLeft:'4px solid #d4b483', paddingLeft:'10px', margin:'20px 0 10px'}}>🧃 عصائر طبيعية</h3>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>أفوكادو</span><b>28 د.م</b></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>ليمون</span><b>15 د.م</b></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>مانكو</span><b>22 د.م</b></div>

          <h3 style={{fontSize:'14px', borderLeft:'4px solid #d4b483', paddingLeft:'10px', margin:'20px 0 10px'}}>🥐 فطور بني رزين</h3>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>فطور بلدي كامل</span><b>38 د.م</b></div>
          <div style={{display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px dashed #eee'}}><span>مسمن + عسل</span><b>20 د.م</b></div>

          <a href="https://wa.me/212600000000" style={{display:'block', background:'#25D366', color:'#fff', textAlign:'center', padding:'16px', borderRadius:'50px', textDecoration:'none', fontWeight:'bold', marginTop:'24px'}}>كوموندي واتساب 📱</a>
          <p style={{textAlign:'center', fontSize:'12px', color:'#999', marginTop:'12px'}}>حلال - حي أولاد حميدة، بني رزين</p>
        </div>
      </div>
    </div>
  )
}
