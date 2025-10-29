import './Mainarea.css'

function MainArea(){
    return (
    <div style={{ color:"darkblue",display:"flex",alignItems:"center",paddingTop:"4%",marginLeft:"10%"}}>
     <div style={{fontSize:"1.5em",display:"flex",flexDirection:"column",width:"30%",alignItems:"center"}}>
            <h1>Landing page template for developers & startups</h1>
            <h6 style={{marginTop:"0%",fontFamily:"sans-serif"}}>Beautifully designed templates using React.js,ant design and styled-components</h6>
            <div>
            <button id="d1">Explore</button>
            <button id="d2">Learn more</button>
             </div>
        </div>
        <div style={{width:"50%"}}>
            <img style={{width:"450px",marginLeft:"10%"}}src="https://landy-web.netlify.app/img/svg/developer.svg"/>
        </div>
        
    </div>
    )
}

export default MainArea;