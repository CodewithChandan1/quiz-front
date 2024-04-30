export default function About(){
    return(
        <>
       {/* <!-- about about --> */}
<section className="about">
    <div className="about-bg about-bg-about py-5">
        <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
            <h2 className="title mt-5 pt-lg-5 pt-sm-3">About Company</h2>
        </div>
    </div>
</section>
{/* <!-- //about about --> */}
<section id="about" className="home-services pt-lg-0 mt-5">
    <div className="container">
        <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 shadow-lg">
                <div className="box-wrap">
                    <div className="box-wrap-grid">
                        <div className="icon">
                            <span className="fa fa-graduation-cap fs-1 fw-bold mt-5 text-warning"></span>
                        </div>
                        <div className="info">
                            <p className="fw-bolder">Our</p>
                            <h4><a >Mission</a></h4>
                        </div>
                    </div>
                    <p className="mt-4 fw-bolder">If you are looking for
                        high-quality and reliable online courses.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4 shadow-lg">
                <div className="box-wrap">
                    <div className="box-wrap-grid">
                        <div className="icon">
                            <span className="fa fa-book fs-1 fw-bold mt-5 text-warning"></span>
                        </div>
                        <div className="info">
                            <p className="fw-bolder">Our</p>
                            <h4><a >Vision</a></h4>
                        </div>
                    </div>
                    <p className="mt-4 fw-bolder">If you are looking for
                        high-quality and reliable online courses.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4 shadow-lg">
                <div className="box-wrap">
                    <div className="box-wrap-grid">
                        <div className="icon">
                            <span className="fa fa-trophy fs-1 fw-bold mt-5 text-warning"></span>
                        </div>
                        <div className="info">
                            <p className="fw-bolder ">Our</p>
                            <h4><a>Goal</a></h4>
                        </div>
                    </div>
                    <p className="mt-4 fw-bolder">If you are looking for
                        high-quality and reliable online courses.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="aboutblock1 py-5" id="about">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
            <div className="col-lg-6 align-self mt-5">
                <span className="fw-bolder mb-2 d-flex justify-content-center">About Us</span>
                <h3 className="fs-1 fw-bold mx-0">Welcome to the Coursing - all available online courses</h3>
                <p className="mt-lg-4 mt-3 fw-bolder">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Non quae, fugiat.</p>
                <p className="mt-3 mb-lg-5 fw-bolder">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae.</p>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
                <img src="assets/images/about.jpg" alt="" className="img-fluid radius-image" />
            </div>
        </div>
    </div>
</section>
<section className="servicesblock servicesblock1 py-5" id="progress">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row">
            <div className="col-lg-6 align-self pr-lg-4">
                <div className=" mb-4">
                    <h6 className="">Figma illustrations <span className="">80%</span></h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "80%"}}
                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h6 className="">PHP programming <span className="">95%</span>
                    </h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "95%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h6 className="">Web design & development <span className="">90%</span></h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "90%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <h6 className="">Adobe Photoshop <span className="">75%</span></h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "75%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
                <div className=" mb-0">
                    <h6 className="">Wordpress design <span className="">95%</span></h6>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "95%"}}
                            aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
                <span className="fw-bolder mb-2">Progress bars</span>
                <h3 className="fs-1 fw-bold">  What you have in our Popular Online Courses</h3>
                <p className="mt-md-4 mt-3 fw-bolder">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at. Lorem ipsum dolor sit amet
                    elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init
                    dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.</p>
                    <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Get started now</a>
            </div>
        </div>
    </div>
</section>
<section className="block py-5" id="">
    <div className="container py-lg-5 py-md-3">
        <div className="row">
            <div className="col-lg-6 about-right-faq align-self  ">
                <span className="fw-bolder mb-2  d-flex justify-content-center ">Start online course</span>
                <h3 className="fs-1 fw-bold mx-0 text-warning"> Enhance your skills with best online courses</h3>
                <p className="mt-lg-4 mt-3 fw-bolder mb-lg-5 mb-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                    ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat 
                    libero ut justo, ultrices in ligula amet dolor sit</p>
                <div className="two-grids mt-md-0 mt-md-5 mt-4">
                    <div className="grids_info">
                        <h4 className="fw-bold text-dark">Global Certificate</h4>
                        <p className="fw-bolder">Pellen tesque libero ut justo,
                            ultrices in ligula elit sed.</p>
                    </div>
                    <div className="grids_info">
                        <h4 className="fw-bold text-dark">Books and library</h4>
                        <p className="fw-bolder">Pellen tesque libero ut justo,
                            ultrices in ligula elit sed.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-6  mt-lg-0 mt-sm-5 mt-4">
                <img src="assets/images/s4.jpg" alt="" className="img-fluid radius-image mb-3" />
                <img src="assets/images/s4.jpg" alt="" className="img-fluid radius-image" />
            </div>
            <div className="col-lg-3 col-6   mt-lg-0 mt-sm-5 mt-4">
                <img src="assets/images/s5.jpg" alt="" className="img-fluid radius-image mb-3" />
                <img src="assets/images/s5.jpg" alt="" className="img-fluid radius-image" />
            </div>
        </div>
    </div>
</section>
{/* <!-- stats --> */}
<section className="about-stats py-5" >
    <div className=" container text-center py-lg-5 py-md-4">
        <span className="fs-4 fw-bolder  mb-1">Our Achievements</span>
        <h3 className="fs-1 fw-bold text-center mb-5">Our progress never Ends</h3>
        <div className="row stats-con">
            <div className="col-md-3 col-6 stats_info counter_grid">
                <p className="fs-1 fw-bold">500<span className="fs-1 fw-bold">+</span> </p>
                <br />
                <h3 className="fw-bold">Students Enrolled</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid1">
                <p className="fs-1 fw-bold">56<span className="fs-1 fw-bold">+</span></p>
                <br />
                <h3 className="fw-bold">Courses Uploaded</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
                <p className="fs-1 fw-bold">130 <span className="fs-1 fw-bold">k</span></p>
                <br />
                <h3 className="fw-bold">Certified students</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
                <p className="fs-1 fw-bold">243<span className="fs-1 fw-bold">+</span> </p>
                <br />
                <h3 className="fw-bold">Global Teachers </h3>
            </div>
        </div>
    </div>
</section>
{/* <!-- //stats --> */}

        </>
    )
}