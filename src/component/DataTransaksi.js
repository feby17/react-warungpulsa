import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import {Button,Modal,Fade,Backdrop,TextField,Grid} from '@material-ui/core';
import {getTransaksi} from '../controllers/transaksi'
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

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}))

function DataTransaksi() {
    const classes = useStyles();
    const [data,setData] = useState([])
    useEffect(() => {
        getTransaksi().then(res => {
            setData(res)
        })
    }, [])

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }; 

    return (
        <div>
        <Button variant="contained" style={{marginBottom:"15px"}} onClick={handleOpen}>Add</Button>
        <MaterialTable
            style={{width:"100%"}}
            icons={tableIcons}
            columns={[
                { title: 'Tanggal Pembelian', field: 'tgl_pembelian'},
                { title: 'No HP', field: 'no_hp' },
                { title: 'Nama Produk', field: 'nama_produk' },
                { title: 'Tipe', field: 'jenis' },
                { title: 'Harga', field: 'harga' },
            ]}
            data={data}
            title="Data Transaksi"
        /> 
        <Modal 
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                <Grid container direction="row" spacing={2}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h2 id="transition-modal-title">Add Transaction</h2>
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}> 
                        <TextField
                            label="Tanggal Pembelian"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="No HP"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="Nama Produk"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="Tipe"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField
                            label="Harga"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Button variant="contained" fullWidth>Save</Button>
                    </Grid>
                </Grid>
            </div>
            </Fade>
        </Modal>
      </div>
    )
}

export default DataTransaksi
