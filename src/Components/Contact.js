export default function Contact(){
    return(
        <>
         {/* <!-- about about --> */}
<section className="about">
    <div className="about-bg about-bg-about py-5">
        <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
            <h2 className="title mt-5 pt-lg-5 pt-sm-3">Contact</h2>
        </div>
    </div>
</section>
{/* <!-- //about about --> */}
                  {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact my-5 ">
      <div className="container contact-sec">

        <div className="section-title text-center">
          <h2 className="fs-1 fw-bold text-warning"><span className="fs-1 fw-bold text-warning">Contact</span > Us</h2>
          <p className="fs-5  ">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as
          possible.</p>
        </div>
      </div>

      <div className="map">
        <iframe style={{border:"0", width: "100% " , height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="container mt-5">

        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>A108 Adam Street<br/>New York, NY 535022</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday:<br/>11:00 AM - 2300 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>info@example.com<br/>contact@example.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
            </div>
          </div>
        </div>

        <form   className="email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}
        </>
    )
}