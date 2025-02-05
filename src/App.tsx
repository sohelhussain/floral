import Nav from "./components/Nav"
import vase from "./assets/vase.png";

function App() {

  return (
    <div className="w-full min-h-screen pt-[20vw] bg-[salmon] text-amber-50">
     <Nav />
     {/* <img src={vase} alt="" /> */}
     <h1 className="text-9xl font-[voyage]">Floral</h1>
    </div>
  )
}

export default App
