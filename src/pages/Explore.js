
import { Link } from 'react-router-dom';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg' 
function Explore() {
    return (
        <div>
           <div className='explore'>
               <header>
           <p  className='pageHeader'> Explore</p>
               </header>
               <main>
                <p className='exploreCategoryHeading'> categories</p>   
               <div className='exploreCategories'>
                  <Link to="/category/rent">
                      <img src={rentCategoryImage}
                      alt="rent"
                      className='exploreCategoryImg'/>
                      <p className='exploreCategoryName'>places to rent</p>
                  </Link>
                  <Link to="/category/sell">
                      <img src={sellCategoryImage}
                      alt="sell"
                      className='exploreCategoryImg'/>
                  <p className='exploreCategoryName'places to rent>places for sell</p>
                
                  </Link>
               </div>
               </main>

           </div>
        </div>
    )
}

export default Explore
