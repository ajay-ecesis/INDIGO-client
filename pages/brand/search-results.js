import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../pagecomponents/Footer";
import BrandNav from "../../pagecomponents/brands/brandnav";

const BrandsearchResults = ()=>{
    

    const Prev = ()=>(
        <span className="prev"><i className="fas fa-chevron-left"></i></span>
    )
    const Next = ()=>(
        <span className="next"><i className="fas fa-chevron-right"></i></span>
    )


    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:1500,
        dots: false,
        prevArrow: <Prev />,
        nextArrow: <Next />,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1024,
            settings: {
              centerPadding: '30px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: '15px',
              slidesToShow: 1
            }
          }
        ]
    }
    
    return(
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Indigo | Best company</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" href="/font/stylesheet.css"></link>
        </Head>
        <main id="dashboard">
        <BrandNav />
        <section className="result_wrappper" id="results_outer">
          <div className="container-fluid px-0">
            <div className="row g-0">
              <div className="col-lg-7">
               <div className="results">
                 <p className="result_count">46 Manufacturers</p>
                 <h3 className="result_page_title">Manufacturers in <span className="city_name">Portugal</span></h3>
                 <ul className="filters">
                   <li className="single_filter">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Rating</option>
                      <option value="1">Rating above 1* </option>
                      <option value="2">Rating above 2*</option>
                      <option value="3">Rating above 3*</option>
                      <option value="3">Rating above 4*</option>
                      <option value="3">Rating above 5*</option>
                    </select>
                   </li>
                   <li className="single_filter">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Membership</option>
                      <option value="1">Membership 1 </option>
                      <option value="2">Membership 2</option>
                      <option value="3">Membership 3</option>
                    </select>
                   </li>
                   <li className="single_filter">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Credential sustainable</option>
                      <option value="1">Option 1 </option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                    </select>
                   </li>
                   <li className="single_filter">
                     <a href="#" className="filter_toggle">More Filters</a>
                   </li>
                 </ul>

                 <div className="more_filters">
                   <form className="row g-0">
                     <div className="col-md-5">
                       <div className="single_filter">
                        <h4>Location</h4>
                        <input id="country_selector" type="text" />
                       </div>

                       <div className="single_filter">
                        <h4>MOQ</h4>
                        <input className="range-example-input" type="text" min="0" max="1000" value="50" name="points" step="10" />
                       </div>
                       <hr />

                       <div className="single_filter">
                        <h4>Membership</h4>
                        <ul className="toggle_switch_group">
                        <li>All <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Basic  <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Professional  <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Business  <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        </ul>
                        <div className="submit_form">
                          <input type="submit" value="Apply" className="btn"/>
                          <a href="#" id="reset_filter">Reset filters</a>
                        </div>
                       </div>
                     </div>
                     <div className="col-md-5 offset-md-2">
                      <div className="single_filter" style={{marginBottom: 20}}>
                        <h4>Categories</h4>
                        <ul className="checkBox_group">
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Men’s</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Women’s</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Premium</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Shirts</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Outerwear</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Denim shirts</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>Jeans</label></span></li>
                          <li><span className="custom_checkbox"><input type="checkbox" /><label>T shirts</label></span></li>
                        </ul>
                        </div>
                        <hr/>
                      <div className="single_filter">
                        <h4>Credential sustainable</h4>
                        <ul className="toggle_switch_group">
                        <li>All <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Fair trade  <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Carbon footprint  <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Rainforest Alliance Certified <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>PETA-Approved Vegan <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        <li>Marine Stewardship Council Standards <span className="toggle_switch"><input type="checkbox"/><span className="swich_label"></span></span></li>
                        </ul>
                       </div>
                      </div>
                    </form>
                 </div>

                 <section className="section  py-0 latest-search-section suppliers-section search_results_list"> 
                        <div className="row">
                          <div className="col-md-12 search-card">
                              <div className="thumb">
                                <Slider className="banner-slider slider">
                                  <div className="item">
                                    <img src="/images/search1.jpg" alt="" />
                                  </div>
                                  <div className="item">
                                    <img src="/images/search1.jpg" alt="" />
                                  </div>
                                  <div className="item">
                                    <img src="/images/search1.jpg" alt="" />
                                  </div>
                                </Slider>
                                
                                <p className="varified-strip">100% Verified</p>
                              </div>
                              <div className="content">
                                <div>
                                  <div className="upper">
                                    <h6 className="title">AAC Textiles</h6>
                                  <h6 className="place">V. N. Famalicão, Portugal</h6>
                                  <h6 className="place">Knitwear, Sampling time 1 week</h6>
                                  </div>
                                  <div className="bottom">
                                    <div className="both-icon">
                                      <img src="/images/icons/drop.svg" alt="" />
                                      <img src="/images/icons/captcha.svg" alt="" />
                                    </div>
                                    <div className="rate">
                                      <i className="fas fa-star"></i> 4.8 (85)
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="bookmark-icon">
                                    <i className="far fa-bookmark"></i>
                                  </div>
                                  <div className="price-moq">
                                    <p className="price">300 <span>MOQ/style</span></p>
                                  
                                  </div>
                                </div>
                              </div>
                          </div>

                          <div className="col-md-12 search-card">
                            <div className="thumb">
                              <Slider className="banner-slider slider">
                                <div className="item">
                                  <img src="/images/search1.jpg" alt="" />
                                </div>
                                <div className="item">
                                  <img src="/images/search1.jpg" alt="" />
                                </div>
                                <div className="item">
                                  <img src="/images/search1.jpg" alt="" />
                                </div>
                              </Slider>
                              
                              <p className="varified-strip">100% Verified</p>
                            </div>
                            <div className="content">
                              <div>
                                <div className="upper">
                                  <h6 className="title">AAC Textiles</h6>
                                <h6 className="place">V. N. Famalicão, Portugal</h6>
                                <h6 className="place">Knitwear, Sampling time 1 week</h6>
                                </div>
                                <div className="bottom">
                                  <div className="both-icon">
                                    <img src="/images/icons/drop.svg" alt="" />
                                    <img src="/images/icons/captcha.svg" alt="" />
                                  </div>
                                  <div className="rate">
                                    <i className="fas fa-star"></i> 4.8 (85)
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="bookmark-icon">
                                  <i className="far fa-bookmark"></i>
                                </div>
                                <div className="price-moq">
                                  <p className="price">300 <span>MOQ/style</span></p>
                                
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="col-md-12 search-card">
                          <div className="thumb">
                            <Slider className="banner-slider slider">
                              <div className="item">
                                <img src="/images/search1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="/images/search1.jpg" alt="" />
                              </div>
                              <div className="item">
                                <img src="/images/search1.jpg" alt="" />
                              </div>
                            </Slider>
                            
                            <p className="varified-strip">100% Verified</p>
                          </div>
                          <div className="content">
                            <div>
                              <div className="upper">
                                <h6 className="title">AAC Textiles</h6>
                              <h6 className="place">V. N. Famalicão, Portugal</h6>
                              <h6 className="place">Knitwear, Sampling time 1 week</h6>
                              </div>
                              <div className="bottom">
                                <div className="both-icon">
                                  <img src="/images/icons/drop.svg" alt="" />
                                  <img src="/images/icons/captcha.svg" alt="" />
                                </div>
                                <div className="rate">
                                  <i className="fas fa-star"></i> 4.8 (85)
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="bookmark-icon">
                                <i className="far fa-bookmark"></i>
                              </div>
                              <div className="price-moq">
                                <p className="price">300 <span>MOQ/style</span></p>
                              
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="col-md-12 search-card">
                        <div className="thumb">
                          <Slider className="banner-slider slider">
                            <div className="item">
                              <img src="/images/search1.jpg" alt="" />
                            </div>
                            <div className="item">
                              <img src="/images/search1.jpg" alt="" />
                            </div>
                            <div className="item">
                              <img src="/images/search1.jpg" alt="" />
                            </div>
                          </Slider>
                          
                          <p className="varified-strip">100% Verified</p>
                        </div>
                        <div className="content">
                          <div>
                            <div className="upper">
                              <h6 className="title">AAC Textiles</h6>
                            <h6 className="place">V. N. Famalicão, Portugal</h6>
                            <h6 className="place">Knitwear, Sampling time 1 week</h6>
                            </div>
                            <div className="bottom">
                              <div className="both-icon">
                                <img src="/images/icons/drop.svg" alt="" />
                                <img src="/images/icons/captcha.svg" alt="" />
                              </div>
                              <div className="rate">
                                <i className="fas fa-star"></i> 4.8 (85)
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="bookmark-icon">
                              <i className="far fa-bookmark"></i>
                            </div>
                            <div className="price-moq">
                              <p className="price">300 <span>MOQ/style</span></p>
                            
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="col-md-12 search-card">
                      <div className="thumb">
                        <Slider className="banner-slider slider">
                          <div className="item">
                            <img src="/images/search1.jpg" alt="" />
                          </div>
                          <div className="item">
                            <img src="/images/search1.jpg" alt="" />
                          </div>
                          <div className="item">
                            <img src="/images/search1.jpg" alt="" />
                          </div>
                        </Slider>
                        
                        <p className="varified-strip">100% Verified</p>
                      </div>
                      <div className="content">
                        <div>
                          <div className="upper">
                            <h6 className="title">AAC Textiles</h6>
                          <h6 className="place">V. N. Famalicão, Portugal</h6>
                          <h6 className="place">Knitwear, Sampling time 1 week</h6>
                          </div>
                          <div className="bottom">
                            <div className="both-icon">
                              <img src="/images/icons/drop.svg" alt="" />
                              <img src="/images/icons/captcha.svg" alt="" />
                            </div>
                            <div className="rate">
                              <i className="fas fa-star"></i> 4.8 (85)
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="bookmark-icon">
                            <i className="far fa-bookmark"></i>
                          </div>
                          <div className="price-moq">
                            <p className="price">300 <span>MOQ/style</span></p>
                          
                          </div>
                        </div>
                      </div>
                  </div>
                   
                      </div>
                </section>

                <ul className="nav_pagination">
                  <li><a href="#" className="prev"><i className="fa fa-chevron-left"></i></a></li>
                  <li><a href="#" className="number active">1</a></li>
                  <li><a href="#" className="number">2</a></li>
                  <li><a href="#" className="number">3</a></li>
                  <li><a href="#" className="number">4</a></li>
                  <li><a href="#" className="next"><i className="fa fa-chevron-right"></i></a></li>
                </ul>



               </div>
               
               <section className="section  latest-search-section" id="search_slider">
                <div className="container-fluid px-4">
                  <div className="row">
                    <div className="col-12">
                      <h2>Latest searches</h2>
                    </div>
                  </div>
                  <Slider  className="row latest-search-slider" {...settings}>
                    <div className="col-md-3 search-card">
                        <img src="/images/search1.jpg" alt="" />
                        <p className="varified-strip">100% Verified</p>
                        <h6 className="title">AAC Textiles</h6>
                        <h5 className="catagory">Knitwear</h5>
                        <p className="timing">Sampling time 1 week</p>
                    </div>
                    <div className="col-md-3 search-card">
                      <img src="/images/search2.jpg" alt="" />
                      <p className="varified-strip">100% Verified</p>
                      <h6 className="title">Fibraselvagem</h6>
                      <h5 className="catagory">Jeans</h5>
                      <p className="timing">Sampling time 2 week</p>
                  </div>
                  <div className="col-md-3 search-card">
                    <img src="/images/search3.jpg" alt="" />
                    <p className="varified-strip">100% Verified</p>
                    <h6 className="title">Calvelex</h6>
                    <h5 className="catagory">Tops</h5>
                    <p className="timing">Sampling time 1 week</p>
                </div>
                <div className="col-md-3 search-card">
                  <img src="/images/search4.jpg" alt="" />
                  <p className="varified-strip">100% Verified</p>
                  <h6 className="title">Eustilija</h6>
                  <h5 className="catagory">Outerwear</h5>
                  <p className="timing">Sampling time 2 week</p>
              </div>
              <div className="col-md-3 search-card">
                <img src="/images/search1.jpg" alt="" />
                <p className="varified-strip">100% Verified</p>
                <h6 className="title">AAC Textiles</h6>
                <h5 className="catagory">Knitwear</h5>
                <p className="timing">Sampling time 1 week</p>
            </div>
            <div className="col-md-3 search-card">
              <img src="/images/search2.jpg" alt="" />
              <p className="varified-strip">100% Verified</p>
              <h6 className="title">Fibraselvagem</h6>
              <h5 className="catagory">Jeans</h5>
              <p className="timing">Sampling time 2 week</p>
          </div>
         </Slider>
                </div>
              </section>

              </div>
              <div className="col-lg-5">
                <div className="map_side">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23938.293396045174!2d-8.529430320223016!3d41.411295258634105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24585c13b9647f%3A0x3989cd2c7103f233!2sVila%20Nova%20de%20Famalic%C3%A3o%2C%20Portugal!5e0!3m2!1sen!2sin!4v1624860382123!5m2!1sen!2sin" width="100%" height="684" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        </main>
        </>
    )
}

export default BrandsearchResults;