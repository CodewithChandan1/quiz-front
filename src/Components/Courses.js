import { Link } from "react-router-dom";

export default function Course(){
    return(
        <>
      {/* <!-- about about --> */}
<section className="about">
    <div className="about-bg about-bg-about py-5">
        <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
            <h2 className="title mt-5 pt-lg-5 pt-sm-3">Online Courses</h2>
            <ul className="abouts-custom-path pb-sm-5 pb-4 mt-2 text-center mb-5">
                <li><a className="fw-bolder fs-4 text-decoration-none text-light">Home</a></li>
                <li className="active fs-3 fw-bold"> / Courses </li>
            </ul>
        </div>
    </div>
</section>
{/* <!-- //about about --> */}

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
{/* <!-- //courses Section --> */}

            {/* <!-- pagination --> */}
            <div className=" mt-5 pt-lg-3 text-center">
                <ul className=" d-flex justify-content-center ">
                    <li><a className="next" href="#url"><span className="fa fa-angle-left"></span> Prev</a></li>
                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                    <li><a className="page-numbers" >2</a></li>
                    <li><a className="page-numbers" >3</a></li>
                    <li><a className="page-numbers " >....</a></li>
                    <li><a className="next" >Next <span className="fa fa-angle-right"></span></a></li>
                </ul>
            </div>
            {/* <!-- //pagination --> */}
    </section>
        </>
    )
}