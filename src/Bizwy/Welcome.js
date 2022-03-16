import React, {useState} from 'react'
import "./welcome.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Welcome = () => {

  //navbar color change

  const[color, setColor] = useState(false);

  const changeColor =()=>{
    if(window.scrollY >= 90){
      setColor(true)
    }else{
      setColor(false)
    }
  } 

  window.addEventListener('scroll', changeColor);

  // button to top 

  // const backToTop = document.querySelector("#back-to-top");

  // window.addEventListener("scroll", scrollFunction);

  // function scrollFunction(){
  //   if(window.pageYOffset > 80){
  //     backToTop.style.display ="block";
  //   }else{
  //     backToTop.style.display ="none";
  //   }
  // }

  // backToTop.addEventListener("click", backToTopBtn);

  // function backToTopBtn(){
  //   window.scrollTo(0, 0);
  // }

  
  return (
    <>

{/*Navbar */}
{/* fixed-top navbar-expand-lg navbar-light */}
        <nav className={color ? 'navbar navbar-bg fixed-top navbar-expand-lg navbar-light' 
                              : 'navbar fixed-top navbar-expand-lg navbar-light'}>
          <div className='container-fluid tags'>
            {/* <img src='../../images/img1.jpg' alt=''/> */}
            <a className="navbar-brand" href="#Navbar">
              <img src='http://www.bizwy.com/images/Bizwy-logo-180.svg' alt=''/>
            </a>
              <button className="navbar-toggler" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#navbarSupportedContent" 
                      aria-controls="navbarSupportedContent" 
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#BusinessSupported">Business Supported</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ContactUs">Contact Us</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>

        <div className='row gx-0 pagebg'>
          <div className="col-lg-12">
          <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
          <div className='logomain text-center'>
            <img src='http://www.bizwy.com/images/bizwy_logo.png' alt='' width="350" height="150"/>
            <h1>IS ALL ABOUT BUSINESS GROWTH</h1>
            <div className='h-line'></div>
            <p>We do wonderful things you'll be amazed</p>
            <a href='#Home'><i className='bx bx-chevrons-down bx-lg bx-tada'></i></a>
          </div>
        </div>
          </div>
        </div>
    
        
{/*Navbar */}

{/*home */}

        <div id='Home' className='container'>
          <div className='row gx-0'>
            <div className='col-lg-12 why'>
              <h1>Why Bizwy</h1>
              <div className='hline'></div>
            </div>
          </div>

          <div className='row gx-0 page1 text-lg-center justify-content-center '>
            <div className='col-lg-3'>
              <div className="card" style={{padding:"20px",border:"none"}}>
                <div className="card-block">
                <i className='fas fa-cloud fa-3x' style={{color:"#007bff"}}></i>
                  <div className='card-title' style={{marginTop:"10px"}}>
                    <h4 style={{fontSize:"18px"}}>Cloud Based Services</h4>
                  </div>
                  <div className='card-text' style={{marginTop:"35px",fontSize:"14px"}}>
                  Users can access their files remotely, eliminating the burden of physically accessing a device.
                  </div>
                </div>
              </div>
            </div>
              <div className='col-lg-3'>
              <div className="card" style={{padding:"20px",border:"none"}}>
                <div className="card-block">
                  <i className='fab fa-cloudversify fa-3x' style={{color:"#007bff"}}></i>
                  <div className='card-title' style={{marginTop:"10px"}}>
                    <h4 style={{fontSize:"18px"}}>No Data Loss</h4>
                  </div>
                  <div className='card-text' style={{marginTop:"35px",fontSize:"14px"}}>
                  We provide regular data backups which are an important asset to have, when trying to recover after a data loss event.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className="card" style={{padding:"20px",border:"none"}}>
                <div className="card-block">
                  <i className='far fa-times-circle fa-3x' style={{color:"#007bff"}}></i>
                  <div className='card-title' style={{marginTop:"10px"}}>
                    <h4 style={{fontSize:"18px"}}>Hardware Independent</h4>
                  </div>
                  <div className='card-text' style={{marginTop:"35px",fontSize:"14px"}}>
                  We make a software application able to function on a variety of devices regardless of the local hardware.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

{/*home */}
            
{/*services */}

<div id='Services' className='page2'>

      <div className='row gx-0'>
      <div className='col-lg-12 services'>
            <h1>Services</h1>
            {/* <div className='serviceline'></div> */}
            <hr className='serviceline'/>
          </div>
      </div>

      <div className='title text-lg-center'>
        <p>See our wonderfull services we offer in big variety of options for the best of client needs.</p>
      </div>

      <div className='row gx-0'>
        <div className='col-lg-12 box  eightbox'>
          <div className='carding'>
            <h3>
            <img src="../../images/services/package.svg" alt="gauge" style={{background:"transparent",width:"40px",height:"40px"}} />
            </h3>
            <h6>Live Sales Dashboard</h6>
            <p>Using straight forward visualizations we ensure your sales team know where they stand in a glance.</p>
          </div>
          <div className='carding'>
            <h3><img src='../../images/services/menu.svg' alt=''  width="40" height="40"/></h3>
            <h6>Menu Management</h6>
            <p>Update your restaurant menu &nbsp;anytime, where you don't even need to be physically at your restaurant.</p>
          </div>
          <div className='carding'>
            <h3>
            <img src="../../images/services/discount.svg" alt="discount" style={{background:"transparent",width:"40px",height:"40px"}} />
            </h3>
            <h6>Offers & Promotions</h6>
            <p>We help you to create a focused marketing approach and a platform &nbsp;&nbsp;&nbsp;to cross-sell and upsell.</p>
          </div>
          <div className='carding'>
            <h3><img src='../../images/services/forklift.svg' alt='' width="40" height="40"/></h3>
            <h6>Inventory Management</h6>
            <p>Bizwy helps you to manage your business with competent inventory management software.</p>
          </div>
        </div>
      </div>
      <div className='row gx-0 second-boxlist more'>
        <div className='col-lg-12 box'>
          <div className='carding'>
            <h3>
            <img src="../../images/services/discount.svg" alt="discount" style={{background:"transparent",width:"40px",height:"40px"}} />
            </h3>
            <h6>Reports & Analytics</h6>
            <p>Bizwy helps you to efficiently &nbsp;consume integrated data to drive proactive decision making.</p>
          </div>
          <div className='carding'>
            <h3>
            <img src="../../images/services/satellite.svg" alt="satellite" style={{background:"transparent",width:"40px",height:"40px"}} />
            </h3>
            <h6>Cloud Printing System</h6>
            <p>Using Cloud Printing System, Bizwy provides the flexibility of sending documents to print anywhere.</p>
          </div>
          <div className='carding'>
            <h3><img src='../../images/services/table.svg' alt='' width="40" height="40" /></h3>
            <h6>Table Reservation System</h6>
            <p>Bizwy provides flexibility, simplicity &nbsp;and effectiveness to your reservation management.</p>
          </div>
          <div className='carding'>
            <h3><img src='../../images/services/online.svg' alt='' width="40" height="40"/></h3>
            <h6>Online Ordering System</h6>
            <p>Bizwy revolutionizes your business' economy by providing a well-structured online ordering system.</p>
          </div>
        </div>
      </div>

      {/* <div className='container-fluid'>
      <div className='row gx-0 list text-lg-center justify-content-center'>
          <div className='col-lg-3'>
              <h3><img src='http://www.bizwy.com/images/icons/statistic.svg'  alt='' width="40" height="40" /></h3>
              <h6 style={{fontSize:"18px"}}>Live Sales Dashboard</h6>
              <p style={{fontSize:"14.5px"}}>Using straight forward visualizations we ensure your sales team know where they stand in a glance.</p>
            </div>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/menu.svg'  alt='' width="40" height="40" /></h3>
                    <h6 style={{fontSize:"18px"}}>Menu Management</h6>
                  <p style={{fontSize:"14.5px"}}>
                  Update your restaurant menu anytime, where you don't even need to be physically at your restaurant.
                  </p>
            </div>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/discount.svg'  alt='' width="40" height="40" /></h3>
                    <h6 style={{fontSize:"18px"}}>Offers & Promotions</h6>
                  <p style={{fontSize:"14.5px"}}>
                  We help you to create a focused marketing approach and a platform to cross-sell and upsell.                  
                  </p> 
            </div>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/forklift.svg'  alt='' width="40" height="40" /></h3>
                    <h6 style={{fontSize:"18px"}}>Inventory Management</h6>
                  <p style={{fontSize:"14.5px"}}>
                  Bizwy helps you to manage your business with competent inventory management software.                  
                  </p>
            </div>
      </div>
      </div> */}
      {/* <div className='row gx-0 list2 text-lg-center justify-content-center'>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/discount.svg'  alt='' width="40" height="40" /></h3>
                <h6 style={{fontSize:"18px"}}>Reports & Analytics</h6>
                <p style={{fontSize:"14.5px"}}>
                  Bizwy helps you to efficiently consume integrated data to drive proactive decision making.                  
                </p>
            </div>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/discount.svg'  alt='' width="40" height="40" /></h3>
                <h6 style={{fontSize:"18px"}}>Cloud Printing System</h6>
                <p style={{fontSize:"14.5px"}}>
                Using Cloud Printing System, Bizwy provides the flexibility of sending documents to print anywhere.                  
                </p>
            </div>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/discount.svg'  alt='' width="40" height="40" /></h3>
                <h6 style={{fontSize:"18px"}}>Table Reservation System</h6>
                <p style={{fontSize:"14.5px"}}>
                Bizwy provides flexibility, simplicity and effectiveness to your reservation management.                  
                </p>
            </div>
            <div className='col-lg-3'>
                <h3><img src='http://www.bizwy.com/images/icons/discount.svg'  alt='' width="40" height="40" /></h3>
                <h6 style={{fontSize:"18px"}}>Online Ordering System</h6>
                <p style={{fontSize:"14.5px"}}>
                Bizwy revolutionizes your business' economy by providing a well-structured online ordering system.                  
                </p>
            </div>
      </div> */}
  </div>

{/*services */}


{/*business supported */}

<div id='BusinessSupported' className="page3">


<div className='row gx-0'>
<div className='col-lg-12 business'>
      <h1>Businesses Supported</h1>
      <div className='businessline'></div>
    </div>
</div>

<div className='btitle text-lg-center'>
  <p>"Quality is the best business plan."</p>
</div>

<div className='row gx-0' style={{marginTop:"60px"}}>
  <div className="col-lg-12">
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="one active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='one'></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className='row firstscroll'>

{/* <ul style={{listStyleType:"none",justifyContent:"space-around",alignItems:"center",display:"flex" }}> */}
      {/* <li> */}
        <div className="single-box2">
          <div className="img-text">
            <img src='http://www.bizwy.com/images/icons/food.svg'  alt='' width="70" height="70" />
            <h6 className='service'>Restaurants</h6>
          </div>
        </div>
      {/* </li> */}
      {/* <li> */}
        <div className="single-box2">
          <div className="img-text">
            <img src='http://www.bizwy.com/images/icons/salon%20(1).svg'  alt='' width="70" height="70" />
            <h6 className='service'>Saloon</h6>
          </div>
        </div>
      {/* </li> */}
      {/* <li> */}
        <div className="single-box2">
          <div className="img-text">
            <img src='http://www.bizwy.com/images/icons/diet%20(1).svg'  alt='' width="70" height="70" />
            <h6 className='service'>Groceries</h6>
          </div>
        </div>
      {/* </li> */}
      {/* <li> */}
        <div className="single-box2">
          <div className="img-text">
            <img src='http://www.bizwy.com/images/icons/forklift.svg'  alt='' width="70" height="70" />
            <h6 className='service'>Distributors</h6>
          </div>
        </div>  
      {/* </li> */}
    {/* </ul> */}
</div>
</div>
<div className='carousel-item'>
    {/* <ul style={{listStyleType:"none"}}>
      <li> */}
        <div className="row firstscroll">
          <div className="single-box2">
            <div className="img-text">
              <img src='http://www.bizwy.com/images/5-stars.svg'  alt='' width="70" height="70" />
              <h6 className='service'>Property</h6>
            </div>
          </div>
        </div>
      {/* </li>
    </ul> */}
</div>

{/* <div className="col-lg-3">
  <div className="single-box">
    <div className="img-text">
      <img src='http://www.bizwy.com/images/icons/food.svg'  alt='' width="70" height="70" />
      <h4>Restaurants</h4>
    </div>
  </div>
</div> */}
{/* <div className="col-lg-3">
  <div className="single-box1">
    <div className="img-text">
      <img src='http://www.bizwy.com/images/icons/food.svg'  alt='' width="70" height="70" />
      <h4>Restaurants</h4>
    </div>
  </div>
</div> */}
{/* <div className="col-lg-3">
  <div className="single-box2">
    <div className="img-text">
      <img src='http://www.bizwy.com/images/icons/food.svg'  alt='' width="70" height="70" />
      <h4>Restaurants</h4>
    </div>
  </div>
</div> */}

{/* <div className="carousel-item">
<div className='row gx-0'>
<div className="col-lg-4">
  <div className="single-box">
    <div className="img-text">
    <img src='http://www.bizwy.com/images/icons/forklift.svg'  alt='' width="70" height="70" />
      <h4>Distributors</h4>
    </div>
  </div>
</div>
<div className="col-lg-4">
  <div className="single-box">
    <div className="img-text">
    <img src='http://www.bizwy.com/images/5-stars.svg'  alt='' width="70" height="70" />
      <h4>Property</h4>
    </div>
  </div>
</div>
</div>

</div> */}

{/* <div className="row">
  <div className="col">
    
  </div>
</div> */}
{/* <div className="col-lg-4">
  <div className="single-box">
    <div className="img-text">
    <img src='http://www.bizwy.com/images/icons/salon%20(1).svg'  alt='' width="70" height="70" />
      <h4>Saloon</h4>
    </div>
  </div>
</div>
<div className="col-lg-4">
  <div className="single-box">
    <div className="img-text">
    <img src='http://www.bizwy.com/images/icons/diet%20(1).svg'  alt='' width="70" height="70" />
      <h4>Groceries</h4>
    </div>
  </div>
</div> */}


</div>
</div>
  </div>
</div>




</div>

{/*business supported */}


{/*contact us */}


<div id='ContactUs' className="page4">
      <div className='row gx-0'>
      <div className='col-lg-12 contact'>
            <h1>Contact Us</h1>
            <div className='contactline'></div>
          </div>
      </div>
      <div className='titles text-lg-center'>
        <p>Say hello to us, we will answer as soon as possible.</p>
      </div>
      <div className='row gx-0'>
        <div className='col-lg-6 details'>
          <form>
            <input type='text' placeholder="Name*" />
            <input type='text' placeholder="Email*" />
            <input type='text' placeholder="Subject*" />
            <textarea type="text" placeholder='Comment' rows="5"></textarea>
          </form>
          <button className='btn btn-primary '>SUBMIT</button>
        </div>
      </div>
      </div>

{/*contact us */}


      {/* <footer>
        <div className='page5'>
          <div className='row gx-0'>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 logolast '><img src='http://www.bizwy.com/images/Bizwy-logo-180.svg' alt=''/></div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 contactlist '>
              <h5>Contact Us</h5>
              <ul className='list-unstyled text-small'>
                <li>
                  <i className='fas fa-map-marked-alt' style={{fontWeight:"900"}}></i>
                    &nbsp; Ambernath, Thane, Maharashtra 421505
                </li>
                <li>
                  <i className='fab fa-chrome' style={{fontWeight:"900"}}></i>
                    &nbsp; Website: www.bizwy.com
                </li>
                <li>
                  <i className='fas fa-envelope' style={{fontWeight:"900"}}></i>
                    &nbsp; Email: info@bizwy.com
                </li>
              </ul>
            </div>
            <div className='col-lg-'></div>
          </div>
          <div className='row gx-0 final'>
            <div className='col-lg-12' align="center">
              <hr width="16%" id='lastline'></hr>
              <small className='d-block mb-3'>Bizwy © 2019</small>
            </div>
          </div>
        </div>
      </footer> */}
{/*first footer */}

      <div className='container-fluid'>
          <div className="row  pagebg2">
            <div className="col-lg-3  footer-1">
              <h3>MOBILE FIRST</h3>
              <ul style={{listStyle:"none"}}>
                <li style={{paddingTop:"30px"}}>
                  <a href='https://itunes.apple.com/us/app/tutorials-point/id914891263?ls=1&mt=8'>
                    <img src='https://www.tutorialspoint.com/images/apple_store.jpg' alt="appstore"/>
                  </a>
                </li>
                <li>
                  <a href='https://play.google.com/store/apps/details?id=com.tutorialspoint.onlineviewer'>
                    <img src='https://www.tutorialspoint.com/images/google_play.jpg' alt="playstore"/>
                  </a>
                </li>
                <li>
                  <a href='http://www.windowsphone.com/s?appid=91249671-7184-4ad6-8a5f-d11847946b09'>
                    <img src='https://www.tutorialspoint.com/images/windows_store.jpg' alt="appstore"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-1 footer-1-2">
              <h3>ABOUT US</h3>
              <ul style={{listStyle:"none"}}>
                <li>
                <i className='fas fa-check'></i>
                &nbsp; Company
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Our Team
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Carrers
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Privacy Policy
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Cookies Policy
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Terms of use
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Refund Policy
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-1 footer-1-2">
              <h3>EXTRA LINKS</h3>
              <ul style={{listStyle:"none"}}>
                <li>
                <i class='fa fa-check'></i>
                &nbsp; Dev Tools
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Free Graphics
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; File Conversion
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; Net Meeting
                </li>
                <li>
                <i className='fa fa-check'></i>
                &nbsp; White Board
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-1">
              <h3>CONTACT US</h3>
              <ul style={{listStyle:"none"}}>
                <li className='address'>
                <i className='far fa-map-marked-alt' style={{fontWeight:"600",color:"white"}}></i>
                    &nbsp; Ambernath, Thane, Maharashtra -  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;421505
                </li>
                <li className='address'>
                  <i className='fab fa-chrome' style={{color:"white"}}></i>
                    &nbsp; Website: www.bizwy.com
                </li>
                <li className='linkto'>
                  <a href='#m'>
                  <i className='far fa-envelope' style={{fontWeight:"600",color:"white"}}></i>
                    &nbsp; Email: info@bizwy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
{/*first footer */}

{/*second footer */}

      <div className='container-fluid'>
        <div className='row pagebg3'>
          <div className="col-lg-4 header-1 footer-2">
            <h3>FOLLOW</h3>
            <ul className='others'>
              <li><a href='#f'><p><i className='fab fa-facebook-f' ></i></p></a></li>
              <li><a href='#g'><p><i className='fab fa-google-plus-g'></i></p></a></li>
              <li><a href='#t'><p><i className='fab fa-twitter'></i></p></a></li>
              <li><a href='#l'><p><i className='fab fa-linkedin-in'></i></p></a></li>
              <li><a href='#y'><p><i className='fab fa-youtube'></i></p></a></li>
            </ul>
          </div>
          <div className="col-lg-4 footer-2">
            <a href="#Bizwy" class="logo">
              <img src="http://www.bizwy.com/images/Bizwy-logo-180.svg" 
                    alt="Tutorials Point" width="120" height="120"/>
            </a>
            <p className='copyright'>
              <span style={{fontSize:"12px", textAlign:"center"}}>Bizwy © 2019. All Rights Reserved.</span>
            </p>
          </div>
          <div className="col-lg-4 newsletter footer-2">
            <h3>NEWSLETTER</h3>
            <div className='search'>
              <input type="text" placeholder="Enter email for newsletter..."/>
              <span>
                <button className='btn btn-default footerbutton'>go</button>
              </span>
            </div>
            <ul className='lasticons'>
              <li>
              <a href="/about/about_privacy.htm#cookies">
              <i className='far fa-globe'></i>
              &nbsp;Cookies Policy
              </a>
              </li>
              <li>
              <a href="/about/about_privacy.htm#cookies">
              <i className='far fa-question-circle'></i>
              &nbsp;FAQ's
              </a>
              </li>
              <li>
              <a href="/about/about_privacy.htm#cookies">
              <i className='far fa-hands-helping'></i>
              &nbsp;Helping
              </a>
              </li>
              <li>
              <a href="/about/about_privacy.htm#cookies">
              <i className='far fa-user'></i>
              &nbsp;Contact
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

{/*second footer */}

      {/* <footer style={{backgroundColor:"#f2f2f2"}}>
        <div className='container-fluid'>
          <div className='row'>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className='footimg text-lg-center'>
                <img src='http://www.bizwy.com/images/Bizwy-logo-180.svg' alt='' width="150px" />
              </div>
              <h6 className='follow'>FOLLOW</h6>
              <ul className='others'>
                <li><p><i className='fab fa-facebook-f fa-3x' ></i></p></li>
                <li><p><i className='fab fa-google-plus-g fa-3x'></i></p></li>
                <li><p><i className='fab fa-twitter fa-3x'></i></p></li>
                <li><p><i className='fab fa-linkedin-in fa-3x'></i></p></li>
                <li><p><i className='fab fa-youtube fa-3x'></i></p></li>
              </ul>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <h5 className='ty2'>Contact Us</h5>
              <ul className='list-unstyled text-small'>
                <li className='foot'>
                  <i className='fas fa-map-marked-alt' style={{fontWeight:"900"}}></i>
                    &nbsp; Ambernath, Thane, Maharashtra 421505
                </li>
                <li className='foot'>
                  <i className='fab fa-chrome' style={{fontWeight:"900"}}></i>
                    &nbsp; Website: www.bizwy.com
                </li>
                <li className='foot'>
                  <i className='fas fa-envelope' style={{fontWeight:"900"}}></i>
                    &nbsp; Email: info@bizwy.com
                </li>
              </ul>
            </div>
            <div className='col-lg-1 appsvg'></div>
          </div>
          <div className='row'>
            <div className="col-lg-12 text-lg-center">
              <div className='finalline'></div>
              <small className='d-block mb-3'>Bizwy © 2019</small>
            </div>
          </div>
        </div>
      </footer> */}


{/*scroll to top */}

{/* <button className='totop' id="back-to-top">Top</button> */}

{/*scroll to top */}


  </>
  )
}

export default Welcome;