import {useState,useContext} from 'react'
import {Context} from '../../context'
import axios from 'axios';
import {toast} from 'react-toastify'

const HomeNavbar = () => {

    const {state:{user}} = useContext(Context);

    const [values, setValues] = useState({
        category:'',
        country:'',
        prodType:'',
        loading: false
    })

    const {category, country, prodType, loading} = values;

    // logout function
    const logout = async() => {
        dispatch({type: "LOGOUT"});
        const {data} = await axios.get('/api/logout');
        toast(data.message);
        return window.location.replace("/signin");
    }

    const handleChange = name => event => {
        setValues({...values, [name]:event.target.value, loading:false});
    }

    const clickSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="banner dashboard-banner">
            <div className="header dashboard-header">
                <div className="container-fluid">
                    <div className="row dashboard_navbar">
                        <div className="col-md-3 logo_section">
                            <a className="logo__title" href="/"><img className="brand-logo-main" src="/images/new_logo.svg" alt="logo" /><span className="logo_text-span">Projekt Indigo</span></a>
                        </div>
                        <div className="col-md-6">
                            <div className="Nav">
                                <div className="humburger-menu">
                                
                                    <span className="humburger-span"></span>
                                    <span className="humburger-span"></span>
                                    <span className="humburger-span"></span>
                                    
                                </div>
                                <div className="bookmark-menu">
                                    <div className="bookmark"><a href="#"><img className="bookmark-icon" src="/images/bookmark-white.svg" /></a></div>
                                </div>
                                <ul className="Navbar2">
                                    <li className="active"><a href="/brand/dashboard">Brands</a></li>
                                    <li><a href="/brand/edit-profile">Edit Profile</a></li>
                                    <li><a href="/brand/change-password">Change Password</a></li>
                                    <li><a href="/brand/saved-posts">Saved Posts</a></li>
                                    <li><a onClick={logout} style={{cursor:'pointer'}}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user-info">
                                <img src="/images/User.svg" alt="user-img" />
                                <h4>{user && user.lastName}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row banner_center-search">
                <form action="">
                    <div className="search-main">
                    <div className="col-12">
                        <div className="row">
                        <div className="col-l2 search_input_wrapper"><i className="fa fa-times"></i><input type="text" className="search_input"/></div>
                        <div className="col-4">
                            <h4>Category</h4>
                            <input type="text" style={{border:'none'}} onChange={handleChange('category')} placeholder="What do you want ?" value={category} />
                            {/* <p>What do you want to manufacture?</p> */}
                        </div>
                        <div className="col-4">
                            <h4>Type</h4>
                            <input type="text" style={{border:'none'}} onChange={handleChange('prodType')} placeholder="What do you want ?" value={prodType} />
                        </div>
                        <div className="col-4 search-btn-col">
                            <div>
                            <h4>Country</h4>
                            <input type="text" style={{border:'none'}} onChange={handleChange('country')} placeholder="What do you want ?" value={country} />
                            </div>
                            <button type="button" id="search_btn"><img src="/images/search-icon.svg" alt="" /></button>
                            <button type="submit" id="submit_btn"><img src="/images/search-icon.svg" alt="" /></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
            <div id="bannerWrapper" className="banner-wrapper">
                <div className="container-fluid">
                    <div className="banner-inner">
                        <div className="left-side">
                            <h1>Make Your <br /> Business</h1>
                                <h2>Better</h2>
                                <p>Access Projekt Indigo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeNavbar
