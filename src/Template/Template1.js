import React from 'react';
import "./template.css";
import { useState } from "react";
import Scroll from './Scroll';

const Template1 = () => {

    const[color, setColor] = useState(false);

    const changeColor =()=>{
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

  window.addEventListener('scroll', changeColor);

  return (
    <>
        <nav className={color ? 'navbar navbar-bg fixed-top navbar-expand-lg' 
                              : 'navbar fixed-top navbar-expand-lg'}>
          <div className='container-fluid'>
            <a className="navbar-brand" href="#Navbar">
              <img src='http://www.bizwy.com/images/Bizwy-logo-180.svg'  
                    alt='' width="100" height="100"
                    style={{marginLeft:"50px"}}
                    />
            </a>
              <button className="navbar-toggler"
                        style={{backgroundColor:"transparent",color:"white"}} 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#navbarSupportedContent" 
                      aria-controls="navbarSupportedContent" 
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{padding:"5px",}}>M</span>
              </button> 
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto p-lg-5 mb-lg-0">
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
        <div className=' row gx-0 background-1'>
                <div className='bg-1-overlay'>
                    <div className='col-lg-12 filter-color-red'>
                        <div className='parallax filter filter-color-red'>
                            <div className='homepage d-flex justify-content-center align-items-center'>
                                <div className="title text-center">
                                    <img src='http://www.bizwy.com/images/Bizwy-logo-180.svg' className='title-logo' 
                                            alt=''/>
                                    <div className='headin'>
                                        <h6>♦</h6>
                                    </div>
                                    <h1>IS ALL ABOUT BUSINESS GROWTH</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className='section'>
            <div className='container-fluid'>
                <div className='row gx-0'>
                    <div className='title-area'>
                        <h2>Our Services</h2>
                        <div className='headina'>
                            <h6>✻</h6>
                        </div>
                        <p className='description'>We promise you a new look and more importantly, 
                            a new attitude. We build that by getting to know you,
                            your needs and creating the best looking clothes.
                        </p>
                    </div>
                </div>
                
                <div className='row gx-0'>
                    <div className='col-lg-12 box'>
                        <div className='carding'>
                            <h3>
                                {/* <img src="../../images/services/package.svg" alt="gauge" style={{background:"transparent",width:"40px",height:"40px"}} /> */}
                                <i className='far fa-chart-line' style={{color:"#e78b90",fontSize:"40px"}}></i>
                            </h3>
                            <h6>Live Sales Dashboard</h6>
                            <p>Using straight forward visualizations we ensure your sales team know where they stand in a glance.</p>
                        </div>
                        <div className='carding'>
                            <h3>
                                <i className='fal fa-clipboard' style={{color:"#e78b90",fontSize:"40px"}}></i>
                                {/* <img src='../../images/services/menu.svg' alt=''  width="40" height="40"/> */}
                            </h3>
                            <h6>Menu Management</h6>
                            <p>Update your restaurant menu &nbsp;anytime, where you don't even need to be physically at your restaurant.</p>
                        </div>
                        <div className='carding'>
                            <h3>
                                <i className='fal fa-percent' style={{color:"#e78b90",fontSize:"40px"}}></i>
                            {/* <img src="../../images/services/discount.svg" alt="discount" style={{background:"transparent",width:"40px",height:"40px"}} /> */}
                            </h3>
                            <h6>Offers & Promotions</h6>
                            <p>We help you to create a focused marketing approach and a platform &nbsp;&nbsp;&nbsp;to cross-sell and upsell.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='background-2'>
            <div className='bg-2-overlay'>
                <div className='section'>
                        <div className='row gx-0'>
                            <div className='col-lg-12'>
                                <div className='title-areaw'>
                                    <h2>Who We Are</h2>
                                    <div className='headinw'>
                                        <h6>✻</h6>
                                    </div>
                                    <p className='description1'>We promise you a new look and more importantly,
                                    a new attitude. We build that by getting to know you,
                                    your needs and creating the best looking clothes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row gx-0'>
                        <div className='col-lg-12 profile'>
                            <div className='profile-card'>
                                <h2>
                                    <img src="https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_1.jpg" alt="gauge" 
                                            style={{background:"transparent",width:"100px",height:"100px",borderRadius:"50%",border:"3px solid #e78b90"}} />
                                </h2>
                                <h3>Tina</h3>
                                <p>CEO / Co-Founder</p>
                                <p>I miss the old Kanye I gotta say at that time I’d like to meet Kanye And 
                                    I promise the power is in the people and I will
                                    use the power given by the people to bring everything I have back to the people.</p>
                            </div>
                            <div className='profile-card'>
                                <h2>
                                    <img src="https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_4.jpg" alt="gauge" 
                                            style={{background:"transparent",width:"100px",height:"100px",borderRadius:"50%",border:"3px solid #e78b90"}} />
                                </h2>
                                <h3>Andrew</h3>
                                <p>Product Designer</p>
                                <p>I miss the old Kanye I gotta say at that time I’d like to meet Kanye And 
                                    I promise the power is in the people and I will
                                    use the power given by the people to bring everything I have back to the people.</p>
                            </div>
                            <div className='profile-card'>
                                <h2>
                                    <img src="https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_3.jpg" alt="gauge" 
                                            style={{background:"transparent",width:"100px",height:"100px",borderRadius:"50%",border:"3px solid #e78b90"}} />
                                </h2>
                                <h3>Michelle</h3>
                                <p>Marketing Hacker</p>
                                <p>I miss the old Kanye I gotta say at that time I’d like to meet Kanye And 
                                    I promise the power is in the people and I will
                                    use the power given by the people to bring everything I have back to the people.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='profilecards'>
            <div className='row gx-0'>
                <div className='testimonials'>
                    <h5>Here are some</h5>
                    <h2>Client Testimonials</h2>
                    <div className='headint'>
                        <h6>∎</h6>
                    </div>
                </div>
            </div>
            <div className='testimomnials data'>
                <div className='old to new image buttons toogle from w3schools/newthings-1'>
                    {/* <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link buton" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                <img src='https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_5.jpg'
                                        alt="" width="80" height="80"/>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                <img src='https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_6.jpg'
                                        alt="" width="80" height="80"/>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                <img src='https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_2.jpg' 
                                        alt="" width="80" height="80"/>
                        </button>
                    </li>
                </ul> */}
                </div>
                <ul className="nav justify-content-center" id="myTab" role="tablist"
                    style={{listStyle:"none",display:"flex",justifyContent:"center"}}>
                    <li className="nav-item" role="presentation">
                        <button className='nav-link buton text-lg-center' id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <img src='https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_5.jpg'
                                    alt="" width="100" height="100" style={{borderRadius:"50%",margin:"-20px"}}/>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className='nav-link buton' id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <img className='pic' src='https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_6.jpg'
                                    alt="" width="100" height="100" style={{borderRadius:"50%",margin:"-20px"}}/>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className='nav-link active buton'id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            <img src='https://demos.creative-tim.com/gaia-bootstrap-template/assets/img/faces/face_2.jpg' 
                                    alt="" width="100" height="100" style={{borderRadius:"50%",margin:"-20px"}}/>
                        </button>
                    </li>
                </ul>
                <div className="tab-content text-lg-center" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p>
                    And I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions and colors. Now there is only one important color... Green I even had the pink polo I thought I was Kanye I promise I will never let the people down. I want a better life for all!
                        </p>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <p>
                        Green I even had the pink polo I thought I was Kanye I promise I will never let the people down. I want a better life for all! And I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions and colors. Now there is only one important color...
                        </p>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <p>
                    I used a period because contrary to popular belief I strongly dislike exclamation points! We no longer have to be scared of the truth feels good to be home In Roman times the artist would contemplate proportions and colors. The 'Gaia' team did a great work while we were collaborating. They provided a vision that was in deep connection with our needs and helped us achieve our goals.
                    </p>
                    </div>
                </div>
            </div>
            </div>
            <div className='row gx-0 background-3'>
                <div className="bg-3-overlay">
                    <div className='row gx-0'>
                        <div className='col-lg-12'>
                            <div className='title-area1 text-lg-center'>
                                <h2>Do you want to work with us?</h2>
                                <div className='headin'>
                                    <h6>♦</h6>
                                </div>
                                <p>
                                We are keen on creating a second skin for anyone with a sense of style!
                                 We design our clothes having our customers in mind and we never disappoint!
                                </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row gx-0 footer-g'>
                    <div className='col-lg-12 datal'>
                        <div className='card-data'>
                            <div className="info">
                                <h5 className='titlel'>Company</h5>
                                <nav>
                                    <ul className='listhov'>
                                        <li>
                                            <a href='#h'>Home</a>
                                        </li>
                                        <li>
                                            <a href='#h'>Find offers</a>
                                        </li>
                                        <li>
                                            <a href='#h'>Discover Projects</a>
                                        </li>
                                        <li>
                                            <a href='#h'>Our Portfolio</a>
                                        </li>
                                        <li>
                                            <a href='#h'>About Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='card-data'>
                            <div className="info">
                                <h5 className='titlel'>Help and Support</h5>
                                <nav>
                                    <ul  className='listhov'>
                                        <li>
                                            <a href='#h'>Contact us</a>
                                        </li>
                                        <li>
                                            <a href='#h'>How it works</a>
                                        </li>
                                        <li>
                                            <a href='#h'>Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href='#h'>Company Policy</a>
                                        </li>
                                        <li>
                                            <a href='#h'>Money Back</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='card-data'>
                            <div className="info">
                                <h5 className='titlel'>Latest News</h5>
                                <nav>
                                    <ul>
                                        <li className='news'>
                                            <a href='#h'>
                                                <i className='fab fa-twitter'></i>&nbsp;&nbsp;
                                                <b className='news-1'>Get Shit Done</b>
                                                &nbsp;
                                                <span className='news-2'>
                                                The best kit in the market is here, just give it a try and let us...
                                                </span>
                                            </a>
                                        </li>
                                        <hr className='l'/>
                                        <li className='news'>
                                            <a href='#h'>
                                                <i className='fab fa-twitter'></i>&nbsp;&nbsp;
                                                <span className='news-2'>
                                                We've just been featured on 
                                                </span>
                                                <b className='news-1'>&nbsp;&nbsp; Awwwards Website</b>
                                                &nbsp;
                                                <span className='news-2'>
                                                ! Thank you everybody for...
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className='card-data offset-1'>
                            <div className="info">
                                <h5 className='titlel'>Follow us on</h5>
                                <nav>
                                    <ul className='listhov'>
                                        <li className='social'>
                                            <a href='#h'>
                                                <i className='fab fa-facebook-square'></i>&nbsp;&nbsp;<span className='socialname'>FACEBOOK</span>
                                            </a>
                                        </li>
                                        <li className='social'>
                                            <a href='#h'>
                                                <i className='fab fa-dribbble'></i>&nbsp;&nbsp;<span className='socialname'>DRIBBBLE</span>
                                            </a>
                                        </li>
                                        <li className='social'>
                                            <a href='#h'>
                                                <i className='fab fa-twitter'></i>&nbsp;&nbsp;<span className='socialname'>TWITTER</span>
                                            </a>
                                        </li>
                                        <li className='social'>
                                            <a href='#h'>
                                                <i className='fab fa-google-plus-square'></i>&nbsp;&nbsp;<span className='socialname'>GOOGLE+</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <hr className='lastf separator-danger'/>
                    <p className='copyright text-lg-center'>
                        <span style={{fontSize:"14px", textAlign:"center",color:"#777777"}}>Bizwy © 2019. All Rights Reserved.</span>
                    </p>
                </div>

{/*Scroll To Top button*/}

            <Scroll/>

{/*Scroll To Top button*/}
    
    </>
  )
}

export default Template1;