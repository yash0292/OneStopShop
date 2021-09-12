import React, { useEffect, useState } from "react";
import axios from "axios";
import Moment from "react-moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components
import ArrowUpward from "@material-ui/icons/ArrowUpward";

// core components
import Header from "components/Headers/Header.js";

import componentStyles from "assets/theme/views/admin/dashboard.js";

const useStyles = makeStyles(componentStyles);

function Customers() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeNav, setActiveNav] = useState(1);
  const [users, setUsers] = useState([]);

  const toggleNavs = (index) => {
    setActiveNav(index);
  };

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:8080/api/auth/");
    const myUsers = res.data;
    setUsers(myUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Header />
      <Container
        maxWidth={false}
        component={Box}
        marginTop="-6rem"
        classes={{ root: classes.containerRoot }}
      >
        <Grid container component={Box} marginTop="3rem">
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.gridItemRoot }}
          >
            <Card
              classes={{
                root: classes.cardRoot,
              }}
            >
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Customers
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Username
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Email
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Role
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Date Added
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell
                          classes={{
                            root:
                              classes.tableCellRoot +
                              " " +
                              classes.tableCellRootBodyHead,
                          }}
                          component="th"
                          variant="head"
                          scope="row"
                        >
                          {user.name}
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          {user.username}
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          {user.email}
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          {user.isAdmin ? "Admin" : "user"}
                        </TableCell>
                        <TableCell classes={{ root: classes.tableCellRoot }}>
                          <Moment format="YYYY/MM/DD">{user.timestamp}</Moment>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
          <Grid item xs={12} xl={4}>
            <Card classes={{ root: classes.cardRoot }}>
              <CardHeader
                subheader={
                  <Grid
                    container
                    component={Box}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs="auto">
                      <Box
                        component={Typography}
                        variant="h3"
                        marginBottom="0!important"
                      >
                        Social traffic
                      </Box>
                    </Grid>
                    <Grid item xs="auto">
                      <Box
                        justifyContent="flex-end"
                        display="flex"
                        flexWrap="wrap"
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          See all
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                }
                classes={{ root: classes.cardHeaderRoot }}
              ></CardHeader>
              <TableContainer>
                <Box
                  component={Table}
                  alignItems="center"
                  marginBottom="0!important"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Refferal
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      >
                        Visitors
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootHead,
                        }}
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        1,480
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            60%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={60}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientError,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Facebook
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        5,480
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            70%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={70}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientSuccess,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Google
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        4,807
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            80%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={80}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientPrimary,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        Instagram
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        3,678
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            75%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={75}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientInfo,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.tableCellRootBodyHead +
                            " " +
                            classes.borderBottomUnset,
                        }}
                        component="th"
                        variant="head"
                        scope="row"
                      >
                        twitter
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        2,645
                      </TableCell>
                      <TableCell
                        classes={{
                          root:
                            classes.tableCellRoot +
                            " " +
                            classes.borderBottomUnset,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box component="span" marginRight=".5rem">
                            30%
                          </Box>
                          <Box width="100%">
                            <LinearProgress
                              variant="determinate"
                              value={30}
                              classes={{
                                root: classes.linearProgressRoot,
                                bar: classes.bgGradientWarning,
                              }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Box>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Customers;
