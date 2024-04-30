
import { useState, useEffect } from "react";
import apiServices from "../services/apiServices";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [course,setCourse]=useState()
  const [courseId,setCourseId]=useState()
  const [branch,setBranch]=useState()
  const [branchId,setBranchId]=useState()
  const [contact,setContact]=useState()
  const [semester,setSemester]=useState()
  const [loading,setLoading]=useState(true)
  const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"53%",
    "bottom":"50%",
    "zIndex":"1",  
  }
  const nav=useNavigate()
  useEffect(()=>{
    let data={
        status:true
    }
    apiServices.allCourse(data).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        setCourse(data.data.data)
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
  const save=(e)=>{
    e.preventDefault()
    let data={
    name:name,
    contact:contact,
    email:email,
    password:password,
    courseId:courseId,
    branchId:branchId,
    semester:semester
    }
    apiServices.register(data).then((data)=>{
      setTimeout(()=>{
          setLoading(false)
      },1500)
      if(data.data.success){
          toast.success(data.data.message)
          setTimeout(()=>{
            nav("/login")
          },1500)
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
  }
  return (
    <>
      <div className="d-flex justify-content-center">
        <ClipLoader loading={loading} cssOverride={override} size={120} />
      </div>
      <div className={loading ? "disabled-screen-full" : ""}>
        <div className="wrapper">
          <div className="inner">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/011/654/703/small/cute-boy-going-to-school-and-bring-a-books-cartoon-3d-icon-illustration-people-education-icon-concept-png.png"
              alt=""
              className="image-1"
            />
            <form className="rform" onSubmit={save}>
              <h3>New Account?</h3>
              <div className="rform-holder">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="rform-holder">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </div>
              <div className="rform-holder">
                <input
                  type="text"
                  className="form-control"
                  placeholder="semester"
                  value={semester}
                  onChange={(e) => {
                    setSemester(e.target.value);
                  }}
                />
              </div>

              <div className="rform-holder">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="rform-holder">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="rform-holder">
                <select
                  id="inputState"
                  className="form-control  form-control-lg"
                  value={courseId}
                  onChange={(e) => {
                    setCourseId(e.target.value);
                  }}
                  onBlur={getData}
                >
                  <option disabled selected value="">
                    Choose Course
                  </option>
                  {course?.map((el, index) => (
                    <option key={index} value={el?._id}>
                      {el?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rform-holder">
                <select
                  id="inputState"
                  className="form-control  form-control-lg"
                  value={branchId}
                  onChange={(e) => {
                    setBranchId(e.target.value);
                  }}
                >
                  <option disabled selected value="">
                    Choose Branch
                  </option>
                  {branch?.map((el, index) => (
                    <option key={index} value={el?._id}>
                      {el?.name}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="rbutton">
                <span>Register</span>
              </button>
              <Link to="/login">
                <p className="text-center mt-4 fw-bolder loginbtn">
                  dont have any Account
                </p>
              </Link>
            </form>
            <img src="images/image-2.png" alt="" className="image-2" />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
