import React from "react";
import Pagination from '@material-ui/lab/pagination';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ul:{
       "& .MuiPaginationItem-root": {
      color: "#ccc"
    }
    }
  },
}));
const UsersPagination = ({ usersPerPage, users, paginate }) => {
const classes = useStyles();
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(users / usersPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className={classes.root}>
    <Pagination
    classes={{ul: classes.ul}}
      count={pageNumber.length}
      onChange={(obj, number) => paginate(number)}
    />
  </nav>
  );
};

export default UsersPagination;
