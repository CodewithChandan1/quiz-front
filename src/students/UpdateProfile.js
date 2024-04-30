import apiServices from "../services/apiServices"
import { useState,useEffect } from "react"
import { Navigate, useParams } from "react-router-dom";
import {ClipLoader} from "react-spinners"
import { ToastContainer, toast} from "react-toastify";
export default function UpdateProfile(){

  const [id, setId] = useState(sessionStorage.getItem("_id"))
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [course,setCourse]=useState()
  const [courseId,setCourseId]=useState()
  const [branch,setBranch]=useState()
  const [branchId,setBranchId]=useState()
  const [contact,setContact]=useState()
  const [semester,setSemester]=useState()
  const [loading,setLoading]=useState(true)
  const param= useParams()
  
  const [studentData,setStudentData]= useState()
  const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"53%",
    "bottom":"50%",
    "zIndex":"1",  
  }
  
  useEffect(()=>{
    console.log(sessionStorage.getItem("_id"))
    setId(sessionStorage.getItem("_id"))
    let data={
      _id: id
       
        
    }
    apiServices.allCourse(data).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        setCourse(data.data.data)
      })
      let data_id={
          userId:sessionStorage.getItem("user_id")
    }
    apiServices.allBranch(data).then((data)=>{
      setBranch(data.data.data)
    })
    apiServices.singleStudent(data_id).then((data)=>{
      setTimeout(()=>{
          setLoading(false)
      },1500)
      if(data.data.success){
          setStudentData(data.data.data)
          setBranchId(data.data.data.branchId)
          setCourseId(data.data.data.courseId)
          setName(data.data.data.name)
          setContact(data.data.data.contact)
          setEmail(data.data.data.email)
          setSemester(data.data.data.semester)
          setId(data.data.data._id)
        
        }
      else{
          toast.error(data.data.message)
      }
  }).catch((error)=>{
      // console.log(error)
      toast.error("Something went wrong")
      setTimeout(()=>{
          setLoading(false)
      },1500)
  })
    },[])
   const getData= ()=>{
        let data1={
          courseId:courseId,
          status:true
        }
        apiServices.allBranch(data1).then((data)=>{
          setTimeout(()=>{
              setLoading(false)
          },1500)
          setBranch(data.data.data)
        })
       
  }
  const authenticate=sessionStorage.getItem("authenticate")
  const userType=sessionStorage.getItem("user_type")
  if(!authenticate){
      sessionStorage.setItem("message", "Please Login!!")
      return <Navigate replace to="/login"/>
  }
  if(userType !=2){
      sessionStorage.setItem("message", "You don't have the right to access this page!!")
      return <Navigate replace to="/login"/>
  }

  const save=(e)=>{
    e.preventDefault()
    let data={
    name:name,
    contact:contact,
    email:email,
    semester:semester,
    courseId:courseId,
    branchId:branchId,
    _id:id
   
   
    }
    apiServices.updateProfile(data).then((data)=>{
      console.log(data)
      setTimeout(()=>{
          setLoading(false)
      },1500)
      if(data.data.success){
          toast.success(data.data.message)
        }
      else{
          toast.error(data.data.message)
      }
  }).catch((error)=>{
      // console.log(error)
      toast.error("Something went wrong")
      console.log(error)
      setTimeout(()=>{
          setLoading(false)
      },1500)
  })
  }
    return(
        <>
          <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
        </div>
        <div className={loading?"disabled-screen-full":""}>  
          
       




          {/* <!-- about about --> */}
<section className="about">
    <div className="about-bg about-bg-about py-5">
        <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
            <h2 className="title mt-5 pt-lg-5 pt-sm-3">Welcome</h2>
           
        </div>
    </div>
</section>
{/* <!-- //about about --> */}
      <section className="section profile">
        <div className="row">
          <div className="col-xl-4 profile-1">
            <div className="card mb-3">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                
                <h2 className="text-start">{studentData?.name}</h2>
                <div className="social-links mt-2">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
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
                      Overview<i class="fa-regular fa-address-card mx-1"></i>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button type="button"
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit "
                    >
                      Edit Profile<i class="fa-solid fa-user-pen mx-1 "></i>
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  <div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row ">
                      <div className="col-lg-3 col-md-4 label text-start ">Full Name</div>
                      <div className="col-lg-9 col-md-8 text-start">{studentData?.name}</div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-3 col-md-4 label text-start ">Coure</div>
                      <div className="col-lg-9 col-md-8 text-start">{studentData?.courseId?.name}</div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-3 col-md-4 label text-start ">Branch </div>
                      <div className="col-lg-9 col-md-8 text-start">{studentData?.branchId?.name}</div>
                    </div>

                    <div className="row ">
                      <div className="col-lg-3 col-md-4 label text-start">Phone</div>
                      <div className="col-lg-9 col-md-8 text-start">(+91) {studentData?.contact}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label text-start">Email</div>
                      <div className="col-lg-9 col-md-8 text-start">
                      {studentData?.email}
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade profile-edit pt-3"
                    id="profile-edit"
                  >
                    {/* <!-- Profile Edit Form --> */}
                    <form onSubmit={save}>

                      <div className="row mb-3">
                        <label
                          for="fullName"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Full Name
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                          
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={name} onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                     

                      
                      

                      <div className="row mb-3">
                        <label
                          for="Address"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Course
                        </label>
                        <div className="col-md-8 col-lg-9">
                        <select id="inputState" className="form-control  form-control-lg" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} onBlur={getData} >
                                <option disabled  value="">Choose Course</option>
                                  {course?.map((el,index)=>(
                                  <option key={index} value={el?._id} selected={courseId==el?._id}>{el?.name}</option>
                                  ))} 
                        </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="Address"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Branch
                        </label>
                        <div className="col-md-8 col-lg-9">
                        <select id="inputState" className="form-control  form-control-lg" value={branchId} onChange={(e)=>{setBranchId(e.target.value)}} >
                                  <option disabled value="">Choose Branch</option>
                                  {branch?.map((el,index)=>(
                                  <option key={index} value={el?._id} selected={branchId==el?._id}>{el?.name}</option>
                                  ))} 
                        </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="Phone"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            
                            type="text"
                            className="form-control"
                            id="Phone"
                            value={contact} onChange={(e) => setContact(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          for="Email"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                           
                            type="email"
                            className="form-control"
                            id="Email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                    {/* <!-- End Profile Edit Form --> */}
                  </div>

                </div>
                {/* <!-- End Bordered Tabs --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <ToastContainer />
        
        </>
    )
}