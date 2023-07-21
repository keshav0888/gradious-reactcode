import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Formik, Form } from 'formik';
import Grid from '@mui/material/Grid';
import { InsertData,getData } from '../redux/Action/search';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
export const AddData = () => {
  const [open, setOpen] = useState(false);
  // const data=useSelector((state)=>state.InsertData?.data)
  const dispatch=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };
  // useEffect(()=>{
  //   dispatch(getData())
  // },[])
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="AddDataContainer">
        <button className="AddBtn" onClick={handleClickOpen}>
          Add Data
        </button>
      </div>
      <div>
        <Dialog open={open} onClose={handleClose} classes={{ paper: 'dialogPaper' }}>
          <DialogContent>
            <div className="closeButtonContainer">
              <CloseIcon className="closeButton" onClick={handleClose} />
            </div>
            <Formik
              initialValues={{
                id: 0,
                user_id: 1,
                title: '',
                body: '',
              }}
              onSubmit={(values) => {
                console.log('keshav', values);
                dispatch(InsertData({ payload: values }));
                handleClose()
                alert("Data Inserted successfully")
                dispatch(getData())
              }}
            >
              {({ values, handleChange }) => (
                <Form className="formContainer">
                  <Grid container spacing={1} rowSpacing={2}>
                    <Grid container item md={3.5} sm={6} xs={12} lg={6}>
                      <Grid item xs={3} lg={3}>
                        <label htmlFor="user_id">User ID :</label>
                      </Grid>
                      <Grid item xs={9} lg={9}>
                        <input
                          type="text"
                          name="user_id"
                          value={values.user_id}
                          onChange={handleChange}
                          className="inputField"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item md={3.5} sm={6} xs={12} lg={6}>
                      <Grid item xs={3} lg={3}>
                        <label htmlFor="id">ID:</label>
                      </Grid>
                      <Grid item xs={9} rowSpacing={2} lg={9}>
                        <input
                          type="text"
                          name="id"
                          value={values.id}
                          onChange={handleChange}
                          className="inputField"
                          disabled={true}
                        />
                      </Grid>
                    </Grid>
                    <Grid container item spacing={0.5} md={3.5} sm={6} xs={12} lg={12}>
                      <Grid item xs={3} lg={2} sm={3}>
                        <label htmlFor="title">Title :</label>
                      </Grid>
                      <Grid item xs={7} rowSpacing={5} lg={7} sm={6}>
                        <textarea
                          type="text"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          className="textareaField"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item spacing={0.5} md={3.5} sm={6} xs={12} lg={12}>
                      <Grid item xs={3} lg={2}>
                        <label htmlFor="body">Body :</label>
                      </Grid>
                      <Grid item xs={9} lg={10}>
                        <textarea
                          type="text"
                          name="body"
                          value={values.body}
                          onChange={handleChange}
                          className="textareaField"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item spacing={0.5} md={3.5} sm={6} xs={12} lg={12}>
                      <Grid item xs={3} lg={8}></Grid>
                      <Grid item xs={3} lg={4}>
                          <button type="submit" className="submitButton">
                            Submit
                          </button>
                      </Grid>
                  </Grid>               
                    </Grid>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
