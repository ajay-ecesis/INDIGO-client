import {useContext} from 'react'
import {Context} from '../../context'
import axios from 'axios';
import {toast} from 'react-toastify'

const HomeTopMobile = () => {

    const {state:{user}, dispatch} = useContext(Context);

    // logout function
    const logout = async() => {
        dispatch({type: "LOGOUT"});
        const {data} = await axios.get('/api/logout');
        toast(data.message);
        return window.location.replace("/signin");
    }

    return (
        <div className="main-banner-wrrapper-dashboard">
            <div className="main_banner_new about_us_banner sustainability_details_banner">
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="Nav">
                                <div className="humburger-menu">
                                    
                                    <span className="humburger-span"></span>
                                    <span className="humburger-span"></span>
                                    <span className="humburger-span"></span>
                                    
                                </div>
                                    <div className="bookmark-menu">
                                        <div className="bookmark"><a href="#"><img className="bookmark-icon" src="/images/bookmark-white.svg" alt="" /></a></div>
                                    </div>
                                    <ul className="Navbar">
                                        <li><a href="/">Home</a></li>
                                        <li className="active"><a href="/brand/dashboard">Dashboard</a></li>
                                        <li><a href="/brand/edit-profile">Edit Profile</a></li>
                                        <li><a href="/brand/change-password">Change Password</a></li>
                                        <li><a href="/brand/saved-posts">Saved Posts</a></li>
                                        {/* <li><a href="">Stories</a></li>
                                        <li><a href="/product-detail">Plans</a></li> */}
                                    
                                    {user === null && 
                                        <li className="bottom-buttons"><p>Sign up</p>
                                            <p>
                                                <a href="/brandregister">Brand</a>
                                            <a href="/manufactureregister">Manufacturer</a>
                                            </p>       
                                        </li>
                                    }   
                                    {user !== null && (
                                        <>
                                            <li>
                                                {Number(user.role) === 0 ? <a href="/brand/dashboard">Dashboard</a> : (Number(user.role) === 1 ? <a href="/manufacturer/dashboard">Dashboard</a> : Number(user.role) === 2 && <a href="/admin/dashboard">Dashboard</a>)}
                                            </li>
                                            <li onClick={logout} style={{cursor:'pointer'}}>
                                                Logout
                                            </li>
                                        </>
                                    )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <a className="main_logo" href="/"> <img src="/images/new_logo.svg" alt="" /> Projekt Indigo</a>
                            </div>
                            {user === null && <div className="manufacturer_brand_btn">
                                <a href="/signin/?target=manufacturer">Manufacturer login</a>&nbsp;
                                <a href="/signin/?target=brand">Brand login</a>
                            </div> }
                            {user !== null && 
                                <div className="manufacturer_brand_btn">
                                    {Number(user.role) === 0 ? <a href="/brand/dashboard">Dashboard</a> : (Number(user.role) === 1 ? <a href="/manufacturer/dashboard">Dashboard</a> : Number(user.role) === 2 && <a href="/admin/dashboard">Dashboard</a>)}&nbsp;
                                    <a onClick={logout} style={{cursor:'pointer'}}>Logout</a>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            
        
                {/* <!-- banner --> */}
                <div className="banner ">
                    <div id="bannerWrapper" className="banner-wrapper">
                        <div className="bg-img_about bg-img_banner">
                        <img src="/images/dashboard_banner1.png" alt="" />
                        </div>
                        <div className="container-fluid">
                            <div className="banner-inner row">
                                <div className="left-side col-md-6">
                                    <h1> <span>Welcome,</span> <span>{user && user.lastName}</span> </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>

                {/*    <!-- ----------------------------- search for mobile  section start 
            ---------------------------------------------------------------------- --> */}

            <section className="section search_mobile_section">
                <div className="container-fluid">
                    <form action="">
                    <div className="row search_wrapper">
                        <div className="col-sm-12">
                        <div className="search">
                            <input type="text" name="" placeholder="Category" id="" />
                            <img src="/images/icons/yellow_search.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                            <span>Location</span>
                            <p>Portugal</p>
                            </div>
                            <div className="col-sm-6">
                            <span>Location</span>
                            <p>Portugal</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-12">
                        <button type="submit">Search Suppliers</button>
                        </div>
                    </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default HomeTopMobile
