import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  Typography,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import AppLoader from "../../components/AppLoader";
import { actionEvent, AppContext } from "../../contexts";
import { DASHBOARD_ACTIONS } from "../../contexts/dashboard";

import BannerBar from "../../components/BannerBar";
import authService from "../../components/api-authorization/AuthorizeService";

import { useStyles } from "./Properties.style";

export default function Properties() {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const [userOrders, setUserOrders] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    const newOrder = localStorage.getItem("eProperties");
    if (newOrder) {
      const orderObject = JSON.parse(newOrder);
      if (orderObject.apiRequestSent) {
        getUserOrders();
      } else {
        submitOrder(newOrder);
      }
    } else {
      getUserOrders();
    }
  }, []);

  const submitOrder = async (newOrder) => {
    const token = await authService.getAccessToken();
    const orderObject = JSON.parse(newOrder);
    orderObject.apiRequestSent = true;
    localStorage.setItem("eProperties", JSON.stringify(orderObject));
    delete orderObject.apiRequestSent;
    const requestPayload = JSON.stringify(orderObject);
    const response = await fetch("api/orders", {
      method: "POST",
      headers: !token
        ? {}
        : {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
      body: requestPayload,
    });
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      setUserOrders(data);
      setLoading(false);
      localStorage.removeItem("eProperties");
    } else {
      setError(true);
      setErrorMessage("There was a problem processing your Order.");
      setLoading(false);
      history.replace("/error-page");
    }
  };

  const getUserOrders = async () => {
    const token = await authService.getAccessToken();
    const response = await fetch("api/orders/getByUser", {
      method: "GET",
      headers: !token
        ? {}
        : {
            Authorization: `Bearer ${token}`,
          },
    });

    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json();
      const newOrder = localStorage.getItem("eProperties");
      if (newOrder) {
        const orderObject = JSON.parse(newOrder);
        const orderReturnedFromRequest = data.find(
          (e) => e.propertyAddress === orderObject.propertyAddress
        );
        if (orderReturnedFromRequest) {
          localStorage.removeItem("eProperties");
        } else {
          data.push(orderObject);
          console.log(data);
        }
      }
      setUserOrders(data);
      setLoading(false);
    } else {
      setError(true);
      setErrorMessage("There was a problem retrieving your Properties.");
      setLoading(false);
      history.replace("/error-page");
    }
  };

  const handleRowClick = (property) => () => {
    if (!property.fileNumber) {
      alert(
        "This property transaction has not yet finished processing. Please refresh the page in a few minutes while efizbo generates a File Number for your transaction."
      );
    } else {
      dispatch(actionEvent(DASHBOARD_ACTIONS.SET_SELECTED_PROPERTY, property));
      history.push("/dashboard");
    }
  };

  return (
    <div>
      <Grid container hidden={loading}>
        <Grid item xs={12}>
          <BannerBar title="efizbo Member Property Page" />
        </Grid>
        {userOrders.length > 0 ? (
          <div className={classes.paneOne}>
            <Grid container justify="center" item xs={12}>
              <Typography
                variant="h6"
                className={classes.centerHeading}
                color="primary"
              >
                Choose Your efizbo Transaction Below to Visit Your Closing
                Dashboard
              </Typography>
            </Grid>
            <Grid item xs={12} hidden={error} container justify="center">
              <Box maxWidth={800}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow className={classes.tableHeader}>
                        <TableCell className={classes.tableHeaderCell}>
                          File Number
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                          Property Address
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                          Closing Date
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userOrders.map((order) => (
                        <TableRow
                          hover
                          key={order.id}
                          hover
                          onClick={handleRowClick(order)}
                        >
                          <TableCell component="th" scope="row">
                            {order.fileNumber}
                          </TableCell>
                          <TableCell>{order.propertyAddress}</TableCell>
                          <TableCell>
                            {moment(order.closeDate).format("MMMM DD, YYYY")}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
            <Grid container hidden={!error} justify="center">
              <Typography variant="h6">{errorMessage}</Typography>
            </Grid>
          </div>
        ) : (
          <div className={classes.paneOne}>
            <Grid container justify="center" item xs={12}>
              <Typography
                variant="h6"
                className={classes.centerHeading}
                color="primary"
              >
                You do not have any contracts yet!
              </Typography>
            </Grid>
          </div>
        )}
      </Grid>
      <Grid container hidden={!loading} justify="center">
        <AppLoader isOrderSubmission />
      </Grid>
    </div>
  );
}
