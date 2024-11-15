import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './FooterC'
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const Login = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: "",
      password: ""
   });
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      try {
         const res = await axios.post("http://localhost:8000/Login", user);
         toast.success("Successfully logged in!");
         localStorage.setItem("user", JSON.stringify(res.data));
         const isLoggedIn = JSON.parse(localStorage.getItem("user"));
         const { userType } = isLoggedIn;
         
         switch (userType) {
            case "Admin":
               navigate("/AdminHome");
               break;
            case "Ordinary":
               navigate("/HomePage");
               break;
            case "Agent":
               navigate("/AgentHome");
               break;
            default:
               navigate("/Login");
         }
      } catch (err) {
         if (err.response && err.response.status === 401) {
            toast.error("Invalid credentials");
         } else {
            toast.error("Login failed. Please try again.");
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand>ComplaintCare </Navbar.Brand>
               <ul className="navbar-nav">
                  <li className="nav-item mb-2">
                     <Link to={'/'}
                        className={`nav-link text-light `}
                     >
                        Home
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/signup'}
                        className={`nav-link text-light `}
                     >
                        SignUp
                     </Link>
                  </li>
                  <li className="nav-item mb-2">
                     <Link
                     to={'/login'}
                        className={`nav-link text-light `}
                     >
                        Login
                     </Link>
                  </li>
               </ul>
            </Container>
         </Navbar>
         <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card bg-dark text-white">
                        <div className="card-body p-5 text-center">
                           <div className="mb-md-5 mt-md-4 pb-5">
                              <h2 className="fw-bold mb-4">Login For Registering the Complaint</h2>
                              <p className="text-white-50 mb-5">Please enter your Credentials!</p>
                              <form onSubmit={handleSubmit}>
                                 <div className="form-outline form-white mb-4">
                                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                                    <label className="form-label" htmlFor="email">Email</label>
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" autoComplete="off" required />
                                    <label className="form-label" htmlFor="password">Password</label>
                                 </div>

                                 <button 
                                    className="btn btn-outline-light btn-lg px-5" 
                                    type="submit"
                                    disabled={loading}
                                 >
                                    {loading ? (
                                       <ClipLoader size={20} color="#ffffff" />
                                    ) : (
                                       'Login'
                                    )}
                                 </button>
                              </form>
                           </div>
                           <div>
                              <p className="mb-0">Don't have an account? <Link to="/SignUp">SignUp</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </>
   );
};

export default Login;
