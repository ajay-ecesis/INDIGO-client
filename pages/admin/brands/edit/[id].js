import { useState, useEffect } from 'react'
import Head from 'next/head'
import AdminRoute from '../../../../pagecomponents/routes/AdminRoute'
import AdminLayout from '../../../../pagecomponents/layout/admin/AdminLayout'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    paper: {
        position: 'absolute',
        width: 500,
        height:300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign:'center'
      },
}));

const EditBrand = () => {

    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const router = useRouter()

    const { id } = router.query

    const [loading, setLoading] = useState(true);

    const [btnloading, setBtnloading] = useState(false);

    const [brand, setBrand] = useState('');

    const [categories, setCategories] = useState([]);
    
    const [markets, setMarkets] = useState([]);

    const [brandValues, setBrandValues] = useState({
        userId:'',
        firstName:'',
        lastName:'',
        email:'',
        status:'',
        emailverified:'',
        category:'',
        city:'',
        zipCode:'',
        country:'',
        brandName:'',
        linkedIn:'',
        market:'',
        category:'',
        url:'',
    })
            
    const {userId, firstName, lastName, email, category, city, zipCode, country, brandName, linkedIn, market,url,status,emailverified} = brandValues
    
    const [reason,setreason] = useState('');

    const loadBrand = async (id) => {
        try {
           
            let { data } = await axios.post(`/api/getBrandById`, {
                brandId: id
            })
            setBrand(data);
            // console.log(data)
            if(data){
                setBrandValues({
                    userId: data.userId._id,
                    firstName: data.userId.firstName,
                    lastName: data.userId.lastName,
                    email: data.userId.email,
                    category: data.category ? data.category._id : '',
                    market: data.market ? data.market._id : '',
                    city: data.city,
                    zipCode: data.zipCode,
                    country: data.country,
                    brandName: data.brandName,
                    linkedIn: data.linkedIn, 
                    url: data.url,
                    status:data.userId.status,
                    emailverified:data.userId.emailVerified
                })
            }
            setLoading(false);
        } catch (error) {
            console.log("error", error)
            setLoading(false);
            toast.error(error.response.data);
        }
    };

    const loadCategory = async() => {
        try {
            const {data} = await axios.get('/api/get/active/categories');
            setCategories(data);
        } catch (error) {
            console.log("Error", error);
            toast.error(error.response.data);
        }
    }

    const loadMarket = async() => {
        try {
            const {data} = await axios.get('/api/get/active/markets');
            setMarkets(data);
        } catch (error) {
            console.log("Error", error);
            toast.error(error.response.data);
        }
    }

    useEffect(() => {
        loadCategory();
        loadMarket();
    }, [])

    useEffect(() => {
        if(id){
            loadBrand(id)
        }
    },[id])

    const approve = async()=>{
        try{
            let {data} = await axios.put('/api/admin/user/status/approve',{
                id:userId
            })
            setBrandValues({...brandValues,status:data.status})
            toast.success("Successfully approved registration request");
        }catch(error){
            toast.error(error.response.data)
        }
       
    }

    const handleChange = name => event => {
        setBtnloading(false);
        setBrandValues({...brandValues, [name]: event.target.value})
    }

    const clickSubmit = async (e) => {
        e.preventDefault();
        try { 
            setBtnloading(true);
            let { data } = await axios.put(`/api/update/brand`, {
                Id: id, 
                userId,
                firstName, lastName, email, category, city, zipCode, country,
                brandName, linkedIn, market, url, 
                emailVerified:emailverified
            })
            setBtnloading(false)
            // console.log("Data", data);
            toast.success("Successfully Updated");
            router.push('/admin/brands');

        } catch (error) {
            console.log("error", error)
            setBtnloading(false);   
            toast.error(error.response.data);
        }
    }

    const showstatusupdate = (status)=>{
        switch (status) {
            case 0:
            return <h6 style={{color:"orange"}}>Status: Inactive</h6>;
           
            case 1:
                return <h6 style={{color:"green"}}>Status: Active</h6>;
            case 2:
                return <>
                <div>
                    <h6>Status: Waiting for approval</h6>
                </div>
                <div style={{display:'flex'}}>
                <Button onClick={()=>approve()} variant="contained" color="primary">Approve</Button>
                <Button variant="contained" onClick={handleOpen} color="secondary">Reject</Button>
            </div>
            </>
            case 3:
                return <h6 style={{color:"red"}}>Status :Admin rejected</h6>;
            case 4:
                return <h6 style={{color:"red"}}>Status :Deleted</h6>;
        }
    }
    const handlereason =(e)=>{
        
        setreason(e.target.value);
    }

    const reject =async ()=>{
        // console.log("the rejection reason is",reason)
        try{
            let {data} = await axios.put('/api/admin/user/status/reject',{
                id:userId,
                reason:reason
            })
           setreason('');
           setOpen(false)
            toast.success("Successfully Rejected registration request");
            setBrandValues({...brandValues,status:data.status})
        }catch(error){
            toast.error(error.response.data)
        }
        
    }

    const [countryList] = useState([
        { label:"America",value: "America"},
        { label:"London",value: "London"},
        { label:"Canada",value: "Canada"},
        { label:"Australia",value: "Australia"},
    ])

    const [cityList] = useState([
        { label:"America",value: "America"},
        { label:"London",value: "London"},
        { label:"Canada",value: "Canada"},
        { label:"Australia",value: "Australia"},
    ])

    const body =(
        <div style={modalStyle} className={classes.paper}>
            <form >
                <h5>Reason for rejection</h5>
                <textarea onChange={handlereason} style={{width:'100%',height:'150px'}} value={reason} />
                <Button onClick={(e)=>reject(e)} variant="outlined" color="secondary">Submit</Button>
            </form>
            <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </div>
    )
    const showUpdateForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">First Name<span style={{color:"red"}}> *</span></label>
                <input onChange={handleChange('firstName')} type="text" className="form-control" value={firstName} required/>
            </div>
            <div className="form-group">
                <label className="text-muted">Last Name<span style={{color:"red"}}> *</span></label>
                <input onChange={handleChange('lastName')} type="text" className="form-control" value={lastName} required/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email<span style={{color:"red"}}> *</span></label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} readOnly required/>
            </div>
            <div className="form-group">
            <label htmlFor="verified" className="text-muted">Email verification status<span style={{color:"red"}}> *</span></label>
                <div>
                    <label htmlFor="verified" className="text-muted">verified</label> &nbsp;
                    <input type="radio" id="verified" name="verification" value={true} checked={emailverified} onChange={(e)=>setBrandValues({...brandValues,emailverified:e.target.checked})} />
                </div>
                <div>
                    <label htmlFor="notverified" className="text-muted">Not verified </label> &nbsp;
                    <input type="radio" id="notverified" name="verification" value={false} checked={!emailverified} onChange={(e)=>setBrandValues({...brandValues,emailverified:!e.target.checked})} />
                </div>
                {/* <input onChange={handleChange('email')} type="email" className="form-control" value={email} readOnly required/> */}
            </div>
            <div className="form-group">
                <label className="text-muted">City<span style={{color:"red"}}> *</span></label>
                <select required
                            onChange={handleChange('city')} 
                            className="form-control">
                                <option>Country</option> {
                                    cityList.map(s =>(
                                        (city === s.value ? 
                                            <option selected key={s.value} value={s.value}>
                                                {s.value}
                                            </option> :
                                            <option key={s.value} value={s.value}>{s.value}</option>)
                                    ))
                                }                                                           
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Zip Code<span style={{color:"red"}}> *</span></label>
                <input onChange={handleChange('zipCode')} type="text" className="form-control" value={zipCode} required/>
            </div>
            <div className="form-group">
                <label className="text-muted">Country<span style={{color:"red"}}> *</span></label>
                <select required
                            onChange={handleChange('country')} 
                            className="form-control">
                                <option>Country</option> {
                                    countryList.map(s =>(
                                        (country === s.value ? 
                                            <option selected key={s.value} value={s.value}>
                                                {s.value}
                                            </option> :
                                            <option key={s.value} value={s.value}>{s.value}</option>)
                                    ))
                                }                                                           
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Brand Name<span style={{color:"red"}}> *</span></label>
                <input onChange={handleChange('brandName')} type="text" className="form-control" value={brandName} required/>
            </div>
            
            <div className="form-group"> 
                <label className="text-muted">Website Url</label>
                <input onChange={handleChange('url')} type="text" className="form-control" value={url} />
            </div>
            <div className="form-group">
                <label className="text-muted">Product Category</label>
                <select 
                    onChange={handleChange('category')} 
                    className="form-control"
                >
                    <option >Select Product Category</option> { 
                        categories && categories.map((s) => (
                        (category === s._id ? <option selected key={s._id} value={s._id}>{s.categoryName}
                        </option> : <option key={s._id} value={s._id}>{s.categoryName}
                        </option>)                         
                        ))}                          
                </select>
            </div>
            <div className="form-group">
                <label className="text-muted">Market</label>
                <select 
                    onChange={handleChange('market')} 
                    className="form-control"
                >
                    <option >Select Market</option> { 
                        markets && markets.map((c) => (
                        (market === c._id ? <option selected key={c._id} value={c._id}>{c.marketName}
                        </option> : <option key={c._id} value={c._id}>{c.marketName}
                        </option>)                         
                        ))}                          
                </select>
            </div> 
            <div className="form-group"> 
                <label className="text-muted">linkedIn</label>
                <input onChange={handleChange('linkedIn')} type="text" className="form-control" value={linkedIn}/>
            </div> 
            {showstatusupdate(status)}
          
            <center>
                 <br/>
                 <button className="btn btn-outline-primary" disabled={btnloading}> {btnloading ? "Loading..." : "Update"} </button>
             </center>
        </form>
    )

    const showNotFound = () => (
        <div className="row">
            <div className="col-md-12 text-center">
                <h1 style={{color:'red'}}>Brand Not Found!</h1>
            </div>
        </div>
    )

    return (
        <AdminRoute>
            <AdminLayout>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Indigo | Admin-Edit Brand</title>
                    </Head>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                        <h2 style={{textAlign:'center', color:"#106eea"}}>Brand Details</h2>
                        {(!loading) && (brand ? showUpdateForm() : showNotFound())}
                        </div>
                    </div>
                </div>
                <Modal
                open={open}
                onClose={()=>handleClose()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
                <Backdrop className={classes.backdrop} open={loading} >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </AdminLayout>
        </AdminRoute>
    )
}

export default EditBrand
