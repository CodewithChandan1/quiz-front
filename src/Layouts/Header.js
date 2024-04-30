import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export default function Header(){
   
  const user_type=sessionStorage.getItem('user_type')
  const authenticate=sessionStorage.getItem('authenticate')
  const navigate=useNavigate()
  const logout=()=>{
      window.alert("Do you really Want To Logout?");
      sessionStorage.clear()
      setTimeout(()=>{
          // sessionStorage.setItem("message","Logout Successfully")
          navigate("/login")
      },500)
  }
    return(
        <>
          {/* <!-- ======= Header ======= --> */}
  <header id="header" class="container-fluid fixed-top  header-transparent ">
    
    {/* <!-- -----nav start--------- --> */}
    
          {authenticate && user_type==1  ?
          <>
          
          {/* <!-- -----nav start--------- --> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <Link to="/"><a class="navbar-brand logo1 text-warning " > Quiz Made</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ">
              <li class="nav-item">
                <Link to="/admin"><a class=" active nav-link btn btn-outline-warning text-light " aria-current="page" >Home</a></Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link  text-light  dropdown-toggle btn btn-outline-warning"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/admin/add_course"><li><a class="dropdown-item nav1" >Add </a></li></Link>
                  <Link to="/admin/view_course"><li><a class="dropdown-item nav1" >Manage </a></li></Link>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link  text-light  dropdown-toggle btn btn-outline-warning"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Branch
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/admin/add_branch"><li><a class="dropdown-item nav1" > ADD</a></li></Link>
                  <Link to="/admin/view_branch"><li><a class="dropdown-item nav1" > Manage</a></li></Link>
                  
                </ul>
              </li>
              
              <li class="nav-item dropdown">
                <a class="nav-link  text-light  dropdown-toggle btn btn-outline-warning"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Quiz
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/admin/add_quiz"><li><a class="dropdown-item nav1" > ADD</a></li></Link>
                  <Link to="/admin/view_quiz"><li><a class="dropdown-item nav1" > Manage</a></li></Link>
                  <Link to="/admin/view_submission"><li><a class="dropdown-item nav1" > Result</a></li></Link>                 
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link  text-light  dropdown-toggle btn btn-outline-warning"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Question
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/admin/add_ques"><li><a class="dropdown-item nav1" > ADD</a></li></Link>
                  <Link to="/admin/view_ques"><li><a class="dropdown-item nav1" > Manage</a></li></Link>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link  text-light  dropdown-toggle btn btn-outline-warning"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Material
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/admin/add_material"><li><a class="dropdown-item nav1" >Add Material</a></li></Link>
                  <Link to="/admin/view_material"><li><a class="dropdown-item nav1" >Manage Material</a></li></Link>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/admin/view_users"><a class="  nav-link btn btn-outline-warning text-light " aria-current="page" >User</a></Link>
              </li>
              
            </ul>
            <form class="d-flex">
              <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-primary " type="submit">Search</button>
              <Link to=""><button class="btn btn-primary mx-3 " type="submit" onClick={logout}>logOut</button></Link>
            </form>
            </div> 
        </div>
      </nav>
            </>

            // ----------user Navbar-----------
            :authenticate ?
            <>
            {/* <!-- -----nav start--------- --> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <Link to="/"><a class="navbar-brand logo1 text-warning " > Quiz Made</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item">
                <Link to="/"><a class=" active nav-link btn btn-outline-warning  text-light " aria-current="page" >Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/courses"><a class="  nav-link btn btn-outline-warning text-light " aria-current="page" >Our courses</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/view_material"><a class="  nav-link btn btn-outline-warning text-light " aria-current="page" >Our Material</a></Link>
              </li>
              

              <li class="nav-item dropdown">
                <a class="nav-link  text-light  dropdown-toggle btn btn-outline-warning"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                View
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/view_material_type"><li><a class="dropdown-item nav1" > Material</a></li></Link>
                  <Link to="/view_quiz_user"><li><a class="dropdown-item nav1" > Quiz</a></li></Link>
                  <Link to="/view_quiz_result"><li><a class="dropdown-item nav1" > Quiz Result</a></li></Link>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-primary" type="submit">Search</button>
              {/* <!-- .navbar --> */}
              <button className="mx-3 btn btn-primary  " type="button"  data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-user"></i></button>
                        <li className="nav-item dropdown pe-3">
                            

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">

                                <Link to="/update_profile"><li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                </Link>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>


                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i className="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                {/* AttendeeList Dropdown button */}

                            {/* AttendeeList Dropdown button */}
                            
                                {/* EventList Dropdown button */}
                                <hr className="dropdown-divider"/>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>

                                <Link to="/login">
                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span onClick={logout}>Sign Out</span>
                                    </a>
                                </li>
                                </Link>
                                

                            </ul>
                            {/* <!-- End Profile Dropdown Items --> */}
                            
                        </li>
                        
                        {/* <!-- End Profile Nav --> */}
            </form>
            </div> 
        </div>
      </nav>
            </>

            // ----------Home navbar--------
            :<>
            {/* <!-- -----nav start--------- --> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <Link to="/"><a class="navbar-brand logo1 text-warning " > Quiz Made</a></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ">
              <li class="nav-item">
                <Link to="/"><a class=" active nav-link  text-light btn btn-outline-warning " aria-current="page" >Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/about"><a class="nav-link btn btn-outline-warning  text-light " >About</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/course"><a class="nav-link btn btn-outline-warning text-light " >Courses</a></Link>
              </li>
              <li class="nav-item ">
                <Link to="/contact"><a class="nav-link btn btn-outline-warning text-light " >Contect</a></Link>
              </li>
              
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-primary" type="submit">Search</button>
              <Link to="/login"><button class="btn btn-primary mx-3 " type="submit">login</button></Link>
              {/* <Link to="/register"><button class="btn btn-primary mx-3 " type="submit">Register</button></Link> */}
            </form>
            </div> 
        </div>
      </nav>
            </>}
           
      {/* <!-- ------nav end----------- --> */}
  </header>
  {/* <!-- End Header --> */}
       </>
    )
}























