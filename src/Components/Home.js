import { Link } from "react-router-dom";
import Testimonials from "../Components/Testimonials";
export default function Home(){
    return(
        <>
    
{/* // <!-- hero Section --> */}
<div className="hero">
  <div className="content">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 col-sm-6 content-left">
          <h3 className="first_h3 text-warning">Lifelong Learning in the Age of Automation
          </h3>
          <p className="mt-3 mb-lg-5 mb-4 ">Start one of our 1000 high quality courses from the world’s leading experts today!</p>
          <form className="form-inline search-course d-flex">
            <input type="search" className="form-control mb-2 mr-sm-2" id="inlineFormInput" placeholder="What do you want to learn?" required="required" />
            <button type="submit" className="btn btn-primary theme-button mb-2"> Start</button>
          </form>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  </div>
</div>
{/* <!-- //Hero Section --> */}

{/* ----------Why Study with Us start----------- */}
{/* <!-- index-block2 --> */}
<section className="index2 py-5">
  <div className="container py-md-3">
    <div className="header-section text-center mx-auto">
      <h3 className="fw-bold fs-1">Why Study with Us? </h3>
      <p className="my-3  fs-5"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Nulla mollis dapibus nunc, ut rhoncus
        turpis sodales quis. Integer sit amet mattis quam.</p>
    </div>
    <div className="row bottom_grids pt-md-3 text-center gap-2">
      <div className="col mt-5 border shadow-lg">
        <div className="s-block">
          <a  className="d-block p-lg-4 p-3 ">
            <img src="/assets/images/s1.png" alt="" className="img-fluid img-curve" />
            <h3 className="my-3 ">Learn anything</h3>
            <p className=" text-center ">Literacy is popularly understood as an ability to read, write and use numeracy in at least one method of writing. Build an online presence with this professional bootstrap 4 template.</p>
          </a>
        </div>
      </div>
      <div className="col mt-5 border shadow-lg ">
        <div className="s-block">
          <a  className="d-block p-lg-4 p-3">
            <img src="/assets/images/s3.png" alt="" className="img-fluid img-curve" />
            <h3 className="my-3 text-decoration-none">Learn with experts</h3>
            <p className="">Literacy is popularly understood as an ability to read, write and use numeracy in at least one method of writing. Build an online presence with this professional bootstrap 4 template.</p>
          </a>
        </div>
      </div>
      <div className="col mt-5 border shadow-lg">
        <div className="s-block">
          <a  className="d-block p-lg-4 p-3">
            <img src="/assets/images/s2.png" alt="" className="img-fluid img-curve" />
            <h3 className="my-3">Flexible learning</h3>
            <p className="">Literacy is popularly understood as an ability to read, write and use numeracy in at least one method of writing. Build an online presence with this professional bootstrap 4 template.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- /index-block2 --> */}
{/* ------Why Study with Us end----------- */}




{/* <!-- Popular Subjects index3 start --> */}
<section className="index3 py-5">
  <div className="container py-md-3">
    <div className="header-section text-center mx-auto">
      <h3 className="fw-bold fs-1">Popular Subjects </h3>
      <p className="my-3 fs-5"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Nulla mollis dapibus nunc, ut rhoncus
        turpis sodales quis. Integer sit amet mattis quam.</p>
    </div>
    <div className="row pt-md-3">
      <div className="col-lg-9 col-md-10  mx-auto">
        <div className="accordion" id="accordionExample">
          <div className="subject-card mt-4">
            <div className="subject-card-header p-0" id="headingOne">
              <a href="#"  className="card__title p-3 p-lg-4  d-block" >
                <div className="row border shadow-lg">
                  <div className="col-md-5 subject-img">
                    <img src="assets/images/s1.jpg" className="img-fluid img-curve" alt="" />
                  </div>
                  <div className="col-md-7 subject-content mt-md-0 mt-4">
                    <h3>Computer science</h3>
                    <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat voluptates nisi minus sed eligendi nam et atque
                      perferendis dignissimos!</p>
                    <span className="course-number"><span className="fa fa-graduation-cap" aria-hidden="true"></span> 8 Courses</span>
                    <p className="sub-para text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis in atque odio....</p>
                  </div>
                </div>
                <span className="subject-button">
                  Show More <i class="fa-regular fa-circle-ellipsis"></i>
                </span>
                
              </a>
              
            </div>

            
          </div>

          <div className="subject-card mt-4">
            <div className="subject-card-header p-0" id="headingTwo">
              <a href="#" className="card__title p-3 p-lg-4  d-block">
                <div className="row border shadow-lg">
                  <div className="col-md-5  subject-img">
                    <img src="assets/images/s2.jpg" className="img-fluid img-curve" alt="" />
                  </div>
                  <div className="col-md-7 subject-content mt-md-0 mt-4">
                    <h3>Web Development</h3>
                    <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat voluptates nisi minus sed eligendi nam et atque
                      perferendis dignissimos!</p>
                    <span className="course-number"><span className="fa fa-graduation-cap" aria-hidden="true"></span> 16 Courses</span>
                    <p className="sub-para text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis in atque odio....</p>
                  </div>
                </div>
                <span className="subject-button">
                  Show More <i class="fa-regular fa-circle-ellipsis"></i>
                </span>
               
              </a>
            </div>
          </div>

          <div className="subject-card mt-4">
            <div className="subject-card-header p-0" id="headingThree">
              <a href="#" className="card__title p-3 p-lg-4 collapsed d-block" >
                <div className="row border shadow-lg">
                  <div className="col-md-5 subject-img">
                    <img src="assets/images/s3.jpg" className="img-fluid img-curve" alt="" />
                  </div>
                  <div className="col-md-7 subject-content mt-md-0 mt-4">
                    <h3>Data Science</h3>
                    <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quaerat voluptates nisi minus sed eligendi nam et atque
                      perferendis dignissimos!</p>
                    <span className="course-number"><span className="fa fa-graduation-cap" aria-hidden="true"></span> 3 Courses</span>
                    <p className="sub-para text-dark">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis in atque odio....</p>
                  </div>
                </div>
                <span className=" subject-button">
                  Show More <i class="fa-regular fa-circle-ellipsis"></i>
                </span>
                
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Popular Subjects index3 end --> */}

{/* _----------goal sect start----------- */}

<section className="index4 py-4">
  <div className="container py-lg-3 mt-3">
    <div className="row mt-4">
      <div className="col-lg-9 col-md-10 mx-auto">
        <div className="row align-items-center ">
          <div className="col-lg-6 book-info pr-lg-5">
            <h3 className="mb-md-4 mb-3">When Ambition Meets Opportunity, Anything is Possible.</h3>
            <p className="mb-md-5 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et est repellendus illum harum quam nihil totam
              reprehenderit! Ut sed eveniet quos! Asperiores officia, repudiandae similique reiciendis, ab est magnam esse nesciunt ea fuga facere
              voluptatem.</p>
            <a  className=" btn btn-outline-danger theme-button">Read More</a>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5 border shadow-lg">
            <img src="assets/images/stat.jpg" className="img-fluid w-100 shadow img-curve" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* _----------goal sect start----------- */}

{/* <!-- stats --> */}
<section className="stats pb-5 pt-4" id="stats">
  <div className="gallery-inner container pb-lg-3">
    <div className="row mt-4">
      <div className="col-lg-9 col-md-10 mx-auto ">
        <div className="row stats-con align-items-stretch gap-4">
          <div className="col mt-lg-0 mt-sm-5 mt-4 stats border shadow-lg">
            <div className="stats_info counter_grid">
              <p className="counter fs-1">1058</p>
              <h4 className="fs-5">Students</h4>
              <p>overall student-athelete GPA for Spring 2020. Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="col stats  mt-sm-0 mt-4 border shadow-lg">
            <div className="stats_info counter_grid1">
              <p className="counter fs-1">89</p>
              <h4 className="fs-5">Percent-2019</h4>
              <p>bachelor's recipients were employed or both within six months of</p>
            </div>
          </div>
          <div className="col stats mt-lg-0 mt-sm-5 mt-4 border shadow-lg">
            <div className="stats_info counter_grid">
              <p className="counter fs-1">97</p>
              <h4 className="fs-5">Percent-2020</h4>
              <p>graduates hold a position related to their degree or career objective</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- //stats --> */}
<section className="index5 py-5 text-center">
  <div className="container py-lg-5">
    <div className="row border shadow-lg">
      <div className="col-lg-9 col-md-10 mx-auto">
        <div className="header-section white join mb-5">
          <h3 className="fs-1 fw-bold text-light mt-3">Find the right learning path for you</h3>
          <p className="my-3 fs-5 fw-bold text-light mt-3">Match your goals to our programs, explore your options and map out your path to success.</p>
        </div>
        <a href="login.html" className="btn  btn-primary theme-button mb-5">Join Us</a>
      </div>
    </div>
  </div>
</section>

{/* ---------------- */}

    {/* <!-- courses Section --> */}
    <section>
    <div class="container text-center mt-5">
        <h1>Courses</h1>
      </div>
      <div className="container courses">
      <div class="card-group gap-4 ">
        <div class="card">
          <img src="assets/images/about.jpg" class="card-img-top image-9" alt="..." />
          <div class="post-pos">
            <a  class="receipe blue">Beginner</a>
        </div>
          <div class="card-body">
          <div class="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul class="rating-star">
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a  class="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div class="course-meta mt-4">
                                <div class="meta-item ">
                                    <span class="fa fa-clock-o"></span>
                                    <span class="meta-value"> 20 hrs </span>
                                </div>
                                <div class="meta-item ">
                                    <span class="fa fa-user-o"></span>
                                    <span class="meta-value"> 50 </span>
                                </div>
                            </div>
                            <Link to="/single-course"><a  class="btn btn-primary mt-2">Book Now</a></Link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="assets/images/about.jpg" class="card-img-top image-9" alt="..." />
          <div class="course-price-badge-new"> New</div>
          <div class="card-body">
          <div class="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul class="rating-star">
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a  class="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div class="course-meta mt-4">
                                <div class="meta-item ">
                                    <span class="fa fa-clock-o"></span>
                                    <span class="meta-value"> 20 hrs </span>
                                </div>
                                <div class="meta-item ">
                                    <span class="fa fa-user-o"></span>
                                    <span class="meta-value"> 50 </span>
                                </div>
                            </div>
                            <Link to="/single-course"><a  class="btn btn-primary mt-2">Book Now</a></Link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="assets/images/about.jpg" class="card-img-top image-9" alt="..." />
          <div class="course-price-badge-new"> New</div>
          <div class="card-body">
          <div class="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul class="rating-star">
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a  class="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div class="course-meta mt-4">
                                <div class="meta-item ">
                                    <span class="fa fa-clock-o"></span>
                                    <span class="meta-value"> 20 hrs </span>
                                </div>
                                <div class="meta-item ">
                                    <span class="fa fa-user-o"></span>
                                    <span class="meta-value"> 50 </span>
                                </div>
                            </div>
                            <Link to="/single-course"><a  class="btn btn-primary mt-2">Book Now</a></Link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div> 
      </div>

      
      <div class="card-group gap-4 my-5">
        <div class="card">
          <img src="assets/images/about.jpg" class="card-img-top image-9" alt="..." />
          <div class="post-pos">
            <a  class="receipe blue">Beginner</a>
        </div>
          <div class="card-body">
          <div class="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul class="rating-star">
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a  class="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div class="course-meta mt-4">
                                <div class="meta-item ">
                                    <span class="fa fa-clock-o"></span>
                                    <span class="meta-value"> 20 hrs </span>
                                </div>
                                <div class="meta-item ">
                                    <span class="fa fa-user-o"></span>
                                    <span class="meta-value"> 50 </span>
                                </div>
                            </div>
                            <Link to="/single-course"><a  class="btn btn-primary mt-2">Book Now</a></Link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="assets/images/about.jpg" class="card-img-top image-9" alt="..." />
          <div class="course-price-badge"> Free</div>
          <div class="card-body">
          <div class="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul class="rating-star">
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a  class="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div class="course-meta mt-4">
                                <div class="meta-item ">
                                    <span class="fa fa-clock-o"></span>
                                    <span class="meta-value"> 20 hrs </span>
                                </div>
                                <div class="meta-item ">
                                    <span class="fa fa-user-o"></span>
                                    <span class="meta-value"> 50 </span>
                                </div>
                            </div>
                            <Link to="/single-course"><a  class="btn btn-primary mt-2">Book Now</a></Link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="assets/images/about.jpg" class="card-img-top image-9" alt="..." />
          <div class="course-price-badge"> Free</div>
          <div class="card-body">
          <div class="price-review d-flex justify-content-between mb-1align-items-center">
                                <p>$49.00</p>
                                <ul class="rating-star">
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star"></span></li>
                                    <li><span class="fa fa-star-o"></span></li>
                                </ul>
                            </div>
                            <a  class="course-desc">Learn Master JQuery in a Short Period of Time</a>
                            <div class="course-meta mt-4">
                                <div class="meta-item ">
                                    <span class="fa fa-clock-o"></span>
                                    <span class="meta-value"> 20 hrs </span>
                                </div>
                                <div class="meta-item ">
                                    <span class="fa fa-user-o"></span>
                                    <span class="meta-value"> 50 </span>
                                </div>
                            </div>
                            <Link to="/single-course"><a  class="btn btn-primary mt-2">Book Now</a></Link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div> 
      </div>

      
      </div>
      </section>
{/* <!-- //courses Section --> */}

{/* <!-- subscribe section --> */}
<section className="subscribe py-5 shadow-lg">
  <div className="container py-lg-3">
    <div className="row mt-4">
      <div className="col-lg-9 col-md-10 mx-auto">
        <div className="subscribe mx-auto">
          <div className="header-section text-center mx-auto">
            <h3 className="fs-1 fw-bolder">Stay Updated! </h3>
            <p className="my-3 fs-5"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.</p>
          </div>
          <form action="#" method="post" className="subscribe-wthree pt-2 mt-5">
            <div className="d-flex flex-wrap subscribe-wthree-field">
              <input className="form-control" type="email" placeholder="Enter your email..." name="email" required="" />
              <button className="btn btn-primary theme-button mt-5" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- //subscribe --> */}
{/* <!-- getstarted --> */}
<section className="getstarted py-5  ">
  <div className="container py-md-3 text-center">
    <div className="header-section mx-auto">
      <h3 className="fs-1 fw-bold">Ready to get started? </h3>
      <p className="my-3 fs-5 "> We love conversations, and would love to have one with you! Whether you’re looking for a speaker, an awesome career, or want to get started with a rewards program, we would love hear from you.</p>
    </div>
    <div className="buttons mt-5 ">
      <a href="contact.html" className="btn btn-outline-primary mr-2 theme-button mx-3">Book a Demo</a>
      <a href="login.html" className="btn btn-primary theme-button ml-2">Get Started</a>
    </div>
  </div>
</section>
{/* <!-- / getstarted --> */}

{/* Testimonials Section */}
<div className="App shadow-lg">
      <header >
        <h1 className="testh1">Testimonials</h1>
        <h1 className="testh1 text-warning">What Students Talking About quiz made Services?</h1>
        <Testimonials />
      </header>
    </div>
{/* Testimonials Section */}
        </>
    )
}