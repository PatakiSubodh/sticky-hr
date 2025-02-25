import NavLogo from './NavLogo.jsx'
import Navoptions from './Navoptions.jsx'
import Navcontactbutton from './Navcontactbutton.jsx'

function Navbar() {

    return (
        <div className="main-nav flex px-16 py-5 justify-between">
            <NavLogo />
            <Navoptions />
            <Navcontactbutton />
        </div>
    )
}

export default Navbar