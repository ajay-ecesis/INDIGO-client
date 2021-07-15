import {useContext} from 'react'
import {Context} from '../../context'
import axios from 'axios';
import {toast} from 'react-toastify'

const BrandNav = () => {

    const {state:{user}} = useContext(Context);

    // logout function
    const logout = async() => {
        dispatch({type: "LOGOUT"});
        const {data} = await axios.get('/api/logout');
        toast(data.message);
        return window.location.replace("/signin");
    }

    return(
        <>
         <div style={{minHeight:'auto'}} className="banner dashboard-banner new">
        <div className="header dashboard-header results_header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 logo_section">
                        <a className="logo__title" href="/"><img className="brand-logo-main" src="/images/new_logo.svg" alt="logo" /><span className="logo_text-span">Projekt Indigo</span></a>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="search_bar">
                          <form>
                           <div className="form-group">
                             <input type="text" className="" name="" placeholder="Jeans" />
                           </div>
                           <div className="form-group">
                            <input type="text" className="" name="" placeholder="Manufacturer" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="" name="" placeholder="Portugal" />
                          </div>
                          <div className="search_btn">
                            <button type="submit"><i className="fa fa-search"></i></button>
                          </div>
                        </form>
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
        </div>
        </>

    )
}

export default BrandNav;