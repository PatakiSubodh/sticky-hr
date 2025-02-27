import Footer from "./components/Footer.jsx"
import MainContent from "./components/MainContent.jsx"
import Navbar from "./components/Navbar.jsx"


function App() {

  return (
    <>
      <Navbar />
      <MainContent />
      <Footer className="fixed w-screen bottom-0" />
    </>
  )
}

export default App
