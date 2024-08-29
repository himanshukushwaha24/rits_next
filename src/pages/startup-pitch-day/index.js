const { useEffect } = require("react")

const Index = ()=>{
    useEffect(()=>{
        window.location.href = "/startup-pitch-day/index.html";
    },[])
    return (
        <div>
            <h1></h1>
        </div>
    )
}


export default Index;