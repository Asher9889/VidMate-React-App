import Home from "./components/Home"
import Trending from "./components/Trending"
import SideNav from "./components/partials/SideNav"
import Routing from "./utils/Routing"

function App() {

// primary color : #1F1E24
// secondary color: #6556CD
  return (
    <div className="w-full h-screen bg-[#1F1E24]">
     
      <Routing/>
    </div>
  )
}

export default App
