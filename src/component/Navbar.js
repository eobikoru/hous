import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocalOffer } from 'react-icons/md';
import { AiOutlineAlignRight } from 'react-icons/ai';

function Navbar() {

   
    return (
        <footer className='navbar'>
          <nav className='navbarNav'>
              
          <ul className='navbarListItems'>
                   <Link to="/" className='navbarListItem'><li className='navbarListItem' fill="black">   < BsFillPersonFill fill='black' width="36px" height="36px" />
                   <p>Explore</p></li></Link>
                   <Link to="/offers" className='navbarListItem'><li className='navbarListItem' fill="black">  <MdLocalOffer fill='black' width="36px" height="36px" />
              <p>Offers</p></li></Link>
                   <Link to="/signin" className='navbarListItem'><li className='navbarListItem'fill="black"> <AiOutlineAlignRight fill='black' width="36px" height="36px" />
              <p>profile</p></li></Link>
                   
          </ul>
              
              </nav>  
         
        </footer>
    )
}

export default Navbar
