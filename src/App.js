import Nav from "./components/Nav"
import Main from "./components/Main"
import Card from "./components/Card"
import CardDt from "./components/cardData"
import "./css/App.css"
function App() {
  const cardData = CardDt.map(elem=>{
    console.log(elem);
    return <Card key= {elem.id} elem ={elem}/>
    
  })

  
  return (
      <>
        <Nav/>
        <Main/>
        <div className="cards">
        {cardData}
        </div>
      
      </>
  );
}

export default App;
