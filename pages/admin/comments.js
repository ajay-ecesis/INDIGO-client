import { useState, useEffect, forwardRef} from 'react'
import AdminRoute from '../../pagecomponents/routes/AdminRoute'
import AdminLayout from '../../pagecomponents/layout/admin/AdminLayout'
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
import {toast} from 'react-toastify'
import Moment from 'react-moment';

const ManageComments = () => {

    const [ btnLoading, setBtnloading] = useState(true);

    const [comments, setComments] = useState([])

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
        {title: "Post Name", render: rowData => {return <Link href={`/admin/comment/${rowData._id}`}><a style={{color:"#106eea"}}>{rowData.postName}</a></Link>}},
        {title: "Commented By", render: rowData => {return <span>{rowData.userId.firstName+" "+rowData.userId.lastName}</span>}},
        {title: "Comment", field: "message"},
        {title: "Commented At", render: rowData => {return <Moment format='DD/MM/YYYY'>{rowData.createdAt}</Moment>}},
    ]

    const loadUsers = async () => {
        try {
            let { data } = await axios.get(`/api/getAllComments`)
            console.log("data",data)
            setComments(data);
            setBtnloading(false);
        } catch (error) {
            setBtnloading(false);
            toast.error(error.response.data);
        }
    };

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <AdminRoute>
            <AdminLayout>
                <div className="row">     
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">                          
                                <h4 className="card-title" style={{textAlign:'center', color:"#106eea"}}>Manage Comments</h4>
                                <MaterialTable
                                    title=""
                                    columns={columns}
                                    isLoading={btnLoading}
                                    data={comments}
                                    icons={tableIcons}
                                    options={{
                                        pageSize:10,                    
                                    }}
                                    localization={{ body:{ emptyDataSourceMessage:<h6>No comments to display</h6> } }}
                                />
                            </div>
                        </div>
                    </div>
                </div>     
            </AdminLayout>
        </AdminRoute>
    )
}

export default ManageComments
