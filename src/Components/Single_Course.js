import { Link } from "react-router-dom"

export default function Single_Course(){
    return(
        <>
         {/* <!-- about about --> */}
<section className="about">
    <div className="about-bg about-bg-about py-5">
        <div className="container pt-lg-5 pt-3 p-lg-4 pb-3 text-center">
            <h2 className="title mt-5 pt-lg-5 pt-sm-3">COURSE</h2>
            
        </div>
    </div>
</section>
{/* <!-- //about about --> */}
          {/* <!-- course Details Section Begin --> */} 
            <section className="">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="">
                                <div className="">
                                    <img className="img-fluid"
                                        src="assets/images/about.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 text-start">
                            <div className="">
                                <h3 className="fs-1 fw-bold text-warning text-start">Mern Stack</h3>
                                <div className="">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star-half-o text-warning"></i>
                                    <span className=" fw-bolder">(18 reviews)</span>
                                </div>
                                <div className="fw-bolder">&#8377;45</div>
                                <p className="fs-6">Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                    vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                    quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <a className=" mx-3 btn btn-primary py-2">Enroll Now</a>
                                            <a  className=""><i class="fa-solid fa-square-heart"></i></a>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <Link to='/login'><a className="site-btn link-light">Enroll Now</a></Link> */}
                                
                                <ul>
                                    <li><b>Availability</b> <span className="mx-5">In Stock</span></li>
                                    <li><b>Student</b> <span className="mx-5">500</span></li>
                                    <li><b></b> access<span className="px-5">Life time</span></li>
                                    <li><b>Share on</b>
                                        <div className="mt-3 ">
                                            <a href="#"><i className="fa fa-facebook mx-2 fs-3"></i></a>
                                            <a href="#"><i className="fa fa-twitter mx-2 fs-3"></i></a>
                                            <a href="#"><i className="fa fa-instagram mx-2 fs-3"></i></a>
                                            <a href="#"><i className="fa fa-pinterest mx-2 fs-3"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section profile">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body pt-3">
                {/* <!-- Bordered Tabs --> */}
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button type="submit"
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Description<i class="fa-regular fa-address-card mx-1"></i>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button type="button"
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit "
                    >
                      review<i class="fa-solid fa-user-pen mx-1 "></i>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button type="button"
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      REview
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  <div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <div className="course__details__tab__desc">
                                            <h6>courses Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                        </div>
                  </div>

                  <div
                    className="tab-pane fade profile-edit pt-3" id="profile-change-password">
                       <div className="course__details__tab__desc">
                                            <h6>courses Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                        </div>
                  </div>

                  

                  <div
                    className="tab-pane fade pt-3 " id="profile-edit">
                     <div className="course__details__tab__desc">
                                            <h6>courses Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                Proin eget tortor risus.</p>
                                        </div>
                  </div>
                </div>
                {/* <!-- End Bordered Tabs --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
{/* <!-- course Details Section End -->
            

 // <!-- Related course Section Begin --> */}
  <section>
    <div class="container text-center mt-5">
        <h1>Related Courses</h1>
      </div>
      <div className="container-fluid courses">
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


      
      </div>
{/* <!-- //courses Section --> */}

    </section>
     
        </>
    )
}