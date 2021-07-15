import Navbar from "../pagecomponents/Navbar";
import {useState, useContext,useEffect} from 'react'
import axios from 'axios'
import Footer from '../pagecomponents/Footer';
import Head from "next/head";
import { client } from "../utils/sanity";
import {toast} from 'react-toastify'

const ForgotPassword = (props)=>{

    const [isloading,setisloading] = useState(false);
    const [email,setEmail] = useState('');

    const clickSubmitForgot = async (e)=>{
        e.preventDefault();
        setisloading(true);
        try{
            const {data} = await axios.put(`/api/auth/forgot-password`,{
                email:email
            })
            setisloading(false);
            toast.success("Check your email for password reset link")
        }catch(err){
            console.log(err)
            setisloading(false);
            toast.error(err.response.data)
        }
      
    }

    const handleChangeForgot = (e)=>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    return(
        <>
         <Head>
            <title>INDIGO | Forgot-password</title>
        </Head>
        <div className="main_banner_new about_us_banner expore_details_banner">
            <Navbar nav={props.nav}/>
        </div>
        <div className="signin-popup signin-popup-open">
                <div className="modal-bg">
                    <div className="modal_box">
                        <span><a className="modal_close" href={props.prevUrl}><img src="/images/back-arrow.svg" alt="" /></a></span>
                        <div className="form-heading">
                            <h3 className="text-center">Forgot Password</h3>
                            <h6 className="text-center">Enter your email below and we will send a temporary link to reset your password</h6>
                        </div>
                        <form onSubmit={clickSubmitForgot}>
                            <div className="form-group">
                                <label htmlFor="yourEmail">Your Email</label>
                                <input type="email" onChange={handleChangeForgot} placeholder="jasonfoster@gmail.com" value={email} required />
                            </div>        
                            <div className="bottom-btn">
                                <input id="singupSubmit" type="submit" value={isloading ? "Loading..." : "Continue"} />
               
                            </div>
                            <div className="term-conditions">
                                <p>Terms of Use <a className="txt-light">and</a> Privacy Policy</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        <Footer />
        </>
    )
}

export default ForgotPassword;



export async function getServerSideProps(context) {
    let nav = await client.fetch(`*[_id=="navbar"]{navlinks[]->}`);
    const prevUrl = context.req.headers.referer;
    return {
      props: {nav,prevUrl}, // will be passed to the page component as props
    }
}