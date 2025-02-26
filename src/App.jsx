import Footer from "./components/Footer.jsx"
import MainContent from "./components/MainContent.jsx"
import Navbar from "./components/Navbar.jsx"


function App() {

  return (
    <>
      <Navbar />
      <MainContent />
      <br />
      <hr className=" border-black"/>
      <br />
      <p className="border-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio officiis fuga, laudantium incidunt veniam quam! Accusamus, iusto nobis molestiae non asperiores minima a error voluptates explicabo voluptate dignissimos voluptatem.</p>
      <Footer className="fixed w-screen bottom-0" />
    </>
  )
}

export default App
