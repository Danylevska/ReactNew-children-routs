import React from 'react'
import { Link as RouterLink} from "react-router-dom"
import { FlexRow } from '../shared/Flex'
import { ScrollPoint, ScrollTopContextProvider, Link } from 'react-use-scroll-to'
import { ScrollPointStyled } from '../shared/scrollPointStyle'

export const Landing = () => {
   return (
      <div className="wrapper">

         
          <FlexRow as="header" width="100%" alignItems='center'>
   <RouterLink to="/login" className='login'><img src="icons8-login-67.png" width="20px" alt="Icon" /> Login</RouterLink> 
</FlexRow>  
          
<ScrollTopContextProvider>

            <div className="montenergo">

              
                  <div className="header">
                     <span className="seeUp">SeeUp</span>
                     <div className="nav">
                     <Link  elementTag="aboutUs"><span className='a-nav'>About Us</span></Link>
                     <Link  elementTag="tours"><span className='a-nav'>Tours</span></Link>
                     <Link  elementTag="contacts"><span className='a-nav'>Contacts</span></Link>
                        <a href="#"> <img className='gamburger' src="menu.png" alt="Gamburger menu" height="50px" /></a>
                     </div>

                  </div>
           
               <h1 className='landing-h1'>Montenegro</h1>
               <p className='p-montenergo'>Welcome to magical Montenegro: where the blue Adriatic waves lap the mountain peaks and cultural
                   treasures have long beckoned travelers. Go on an unforgettable journey with us!</p>

                   <div className="button-montenergo">
                     <span>Letʼs  go!</span>
                   </div>

            </div>

<ScrollPoint tag="aboutUs">            

<div className="offer">
<div className="left">
   <h2 className='landing-h2'>What we offer</h2>
   <p className='p-left'>The incredible landscapes of Montenegro are a fairy-tale world of natural beauty. </p>
<img className='img-left' src="unsplash__MI7ZJ1rOCA.png" width="62.5%"  alt="" />

</div>

<div className="right">
<img className='img-right' src="unsplash_lbMZntt_fH4.png" width="62.5%"  alt="" />
<p className='p-right'>Mountain lakes, waterfalls, green valleys and clean beaches - all this
 awaits you. Feel the harmony with nature.</p>

</div>

</div>



<div className="offer">
<div className="left">
   <p className='p-left'>Delicious local cuisine Montenegro is famous for its unique cuisine.
    Try dishes made from local products and enjoy authentic flavors. </p>
<img className='img-left' src="unsplash_wAOJH0ZE5S4.png" width="62.5%"  alt="" />

</div>

<div className="right">
<img className='img-right' src="unsplash_AGIQPxzY3s4.png" width="62.5%"  alt="" />
<p className='p-right-long'>Historical assets Ancient cities, castles and fortresses will tell you
 the history of Montenegro. You will immerse yourself in the feeling of the past and discover
  the secrets of this unique country</p>

</div>
</div>
</ScrollPoint>


<ScrollPoint tag="tours">
<div className="reviews-header">
   <h2 className='landing-h2'>Reviews</h2>
   <img className='arrow' src="Arrow 1.png" alt="" />
</div>

<div className="reviews">

<div className="reviews-image">
<p className="data">May 29th, 2023</p>

<div className="aboutPerson">
<img className='ellipse-img' src="Ellipse 3.png" width="28.5%" alt="" />
<div className="name-stars">
<p className='person-name' >Pedro Fabia</p>
<div className="stars">
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
</div>
</div>
</div>

<p className='p-reviews-image' >I have always dreamed of seeing the Adriatic coast and this tour exceeded all my expectations.
 Visiting mountain lakes and beach areas was an unparalleled experience.
  Best of all, the tour was well planned and the local food left an unforgettable taste</p>
</div>

<div className="reviews-image">
<p className="data">June 16th, 2023</p>
<div className="aboutPerson">
<img className='ellipse-img' src="Ellipse 1.png" width="28.5%" alt="" />

<div className="name-stars">
<p className='person-name' >Ivan Vaseva</p>
<div className="stars">
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
   <img src="Star 10.png" alt="" />
</div>
</div>
</div>

<p className='p-reviews-image' >My trip to Montenegro was unforgettable! From mountain scenery to
 enchanting beaches, this tour had it all. Especially memorable were the visits to ancient cities,
  where the atmosphere of ancient times was felt. The guides were very professional and friendly,
   they made me feel at home</p>
</div>

</div>

</ScrollPoint>


<div className="form">

<div className="text-form">
   <div className="text">
<p className="p-text">Don't waste time - choose the best for your trip to Montenegro with us. Plan your adventure today!</p>
</div>

<div className="form-wrapper">


<input name="city" list="cities" placeholder='SELECT TOUR' className="input1 landing-input"/>
<datalist id="cities">
   <option value="Naples" />
   <option value="London" />
   <option value="Berlin" />
   <option value="New York" />
   <option value="Frattamaggiore" />
</datalist>

<input name="date" list="dates" placeholder='SELECT DATE' className="input2 landing-input"/>
<datalist id="dates">
   <option value="21.06.2023" />
   <option value="25.07.2023" />
   <option value="04.08.2023" />
   <option value="29.08.2023" />
   <option value="15.09.2023" />
</datalist>

<input name="guests" list="guests" placeholder='NUMBER OF GUECTS' className="input3 landing-input"/>
<datalist id="guests">
   <option value="5" />
   <option value="10" />
   <option value="15" />
   <option value="25" />
   <option value="30" />
</datalist>

<button className='button-form' >BOOK TOUR</button>

</div>

</div>


</div>



<ScrollPointStyled tag="contacts" >

<div className="contacts">
  
<div className="contacts-seeUp">
   <span className="seeUp-footer">SeeUp</span>
</div>
   <div className="contacts-detail">
   <h4 className='landing-h4'>Contacts</h4>
   <span className='span-footer'>montenegrotour@gmail.com</span>
   <span className='span-footer'>+38 096 897 89 99</span>
</div>

<div className="social">
   <img className='social-img' src="instagram.png" width="30px" height="30px" alt="" />
   <img className='social-img' src="in.png" width="30px" height="30px" alt="" />
   <img className='social-img' src="fb.png" width="30px" height="30px" alt="" />
</div>

</div>

</ScrollPointStyled>





</ScrollTopContextProvider>

         </div>
    
   )
}
