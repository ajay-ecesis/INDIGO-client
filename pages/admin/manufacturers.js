import { useState, useEffect, forwardRef} from 'react'
import AdminRoute from '../../pagecomponents/routes/AdminRoute'
import AdminLayout from '../../pagecomponents/layout/admin/AdminLayout'
import Head from "next/head";
import Link from 'next/link'
import axios from 'axios'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import {toast} from 'react-toastify'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  
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
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
   
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

const ManageManufacturers = () => {
    const classes = useStyles();
    const [ btnLoading, setBtnloading] = useState(true);
    const [rejectuser,setrejectuser]  = useState('');
    const [manufacturers, setManufacturers] = useState([])
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [reason,setreason] = useState('');
     
      const handleClose = () => {
        setOpen(false);
      };
      const handlereason =(e)=>{ 
        setreason(e.target.value);
    }
    const userstatus = (status)=>{
        switch (status) {
            case 0:
            return <h6 style={{color:"orange"}}>Inactive</h6>;
            case 1:
                return <h6 style={{color:"green"}}>Active</h6>;
            case 2:
                return <h6 style={{color:"blue",textAlign:'center'}}>Waiting for approval</h6>;
            case 3:
                return <h6 style={{color:"pink"}}>Admin rejected</h6>;
            case 4:
                return <h6 style={{color:"red"}}>Deleted</h6>;
        }
    }
    const deactivate = async(userId) =>{
        try{
            let {data} = await axios.put('/api/admin/user/status/deactivate',{
                id:userId
            })
            loadManufacturers();
            toast.success("De-activated");
        }catch(error){
            loadManufacturers();
            toast.error(error.response.data)
        }
    }

    const activate = async(userId) =>{
        try{
            let {data} = await axios.put('/api/admin/user/status/activate',{
                id:userId
            })
            loadManufacturers();
            toast.success("activated");
        }catch(error){
            loadManufacturers();
            toast.error(error.response.data)
        }
    }

    const approve = async(userId)=>{
        try{
            let {data} = await axios.put('/api/admin/user/status/approve',{
                id:userId
            })
            loadManufacturers();
            toast.success("Successfully approved registration request");
        }catch(error){
            loadManufacturers();
            toast.error(error.response.data)
        }
       
    }

    const reject =async (userId)=>{
        // console.log("the rejection reason is",reason)
        try{
            let {data} = await axios.put('/api/admin/user/status/reject',{
                id:rejectuser,
                reason:reason
            })
           setreason('');
           setOpen(false)
           loadManufacturers();
            toast.success("Successfully Rejected registration request");
        }catch(error){
            loadManufacturers();
            toast.error(error.response.data)
        }
        
    }
    const body =(
        <div style={modalStyle} className={classes.paper}>
            <form >
              <h5>Reason for rejection</h5>
                <textarea onChange={handlereason} style={{width:'100%',height:'150px'}} value={reason} />
                <Button onClick={(e)=>reject()} variant="outlined" color="secondary">Submit</Button>
            </form>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </div>
    )
const handlereject = (id)=>{
    setOpen(true);
    setrejectuser(id)
}

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    var columns = [
       
        {title: "id", field: "_id", hidden: true},
        {title: "Manufacturer Name", field: "supplierName", render: rowData => {return <Link href={`/admin/manufacturer/${rowData._id}`}><a style={{color:"#106eea"}}>{rowData.supplierName}</a></Link>}},
        {title: "Year", field: "year",  render: rowData => {return <span>{rowData.year ? rowData.year : '-'}</span>}},
        {title: "Product Category", field:'category',  render: rowData => {return <span>{rowData.category ? rowData.category : '-'}</span>}},
        {title: "No of Employees", field: "employees"},
       /*  {title: "Speciality", field: "speciality"}, */
        /* {title: "Daily Capacity", field: "dailyCapacity"}, */
        {title: "Monthly Capacity", field: "monthlyCapacity"},
        {title: "Status", field: "status", render: rowData => {
            return userstatus(rowData.userId.status);
        }},
        {title: "Created At", render: rowData => {return <Moment format='DD/MM/YYYY'>{rowData.createdAt}</Moment>}},
        {title: "Updated At", render: rowData => {return <Moment format='DD/MM/YYYY'>{rowData.updatedAt}</Moment>}},
        {title: "Actions", render: rowData => <Link href={`/admin/manufacturer/edit/${rowData._id}`}><a style={{color:"#106eea"}}><Edit /></a></Link>},
        {title: "",render: rowData => {
            if(rowData.userId.status === 0){
                return  <Button variant="outlined" color="primary" onClick={()=>activate(rowData.userId._id)}>Activate</Button>
            }
            else if(rowData.userId.status === 1){
                return <Button variant="outlined" color="secondary" onClick={()=>deactivate(rowData.userId._id)}>Deactivate</Button>
            }
            else if(rowData.userId.status === 2){
                return <div style={{display:'flex',flexDirection:'column'}}>
                    <Button variant="contained" color="primary" onClick={()=>approve(rowData.userId._id)}>Approve</Button>
                    <Button variant="contained" color="secondary" onClick={()=>{handlereject(rowData.userId._id)}}>Reject</Button>
                </div>
            }  else if(rowData.userId.status === 3){
                return <div style={{display:'flex',flexDirection:'column'}}>
                    <Button variant="contained" color="primary" onClick={()=>approve(rowData.userId._id)}>Approve</Button>
                </div>
            }
        }},
        {title: "", render: rowData => {
            return <span style={{color:"red", cursor:'pointer'}} onClick={() => destroy(rowData.userId._id, 1)}><DeleteOutline /></span>
        }},
    ]

    const loadManufacturers = async () => {
        try {
            let { data } = await axios.get(`/api/getManufacturers`)
            setManufacturers(data);
            setBtnloading(false);    
        } catch (error) {
            console.log("Error", error);
            setBtnloading(false);
            toast.error(error.response.data);
        }
    };

    useEffect(() => {
        loadManufacturers()
    }, [])

    const destroy = async(userId, status) => {
        var tempStatus = "";
        if(status === 0){
            tempStatus = "activate"
        }
        else if(status === 1){
            tempStatus = "delete"
        }
        if(window.confirm(`Do you want to ${tempStatus} this manufacturer?`)){
            try {
                setBtnloading(true);
                let { data } = await axios.put(`/api/update/user/status`, {
                    userId, status
                })
                toast.success("Manufacturer successfully deleted.")
                loadManufacturers()
            } catch (error) {
                setBtnloading(false);
                toast.error(error.response.data);
            }
        }
    }

    return (
        <AdminRoute>
            <AdminLayout>
                    <Head>
                        <meta charSet="UTF-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Indigo | Admin-Manufacturers</title>
                    </Head>
                <div className="row">     
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">                  
                                <h4 className="card-title" style={{textAlign:'center', color:"#106eea"}}>Manage Manufacturers</h4>
                                <MaterialTable
                                    title=""
                                    columns={columns}
                                    isLoading={btnLoading}
                                    data={manufacturers}
                                    icons={tableIcons}
                                    options={{
                                        pageSize:10,                    
                                    }}
                                    localization={{ body:{ emptyDataSourceMessage:<h6>No manufacturers to display</h6> } }}
                                />
                                <Modal
                                    open={open}
                                    onClose={()=>handleClose()}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    {body}
                                </Modal> 
                            </div>
                        </div>
                    
                    </div>
                </div>  
                
            </AdminLayout>
        </AdminRoute>
    )
}

export default ManageManufacturers
