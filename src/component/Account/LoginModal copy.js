import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import GoogleLogin from "react-google-login";
import { GoogleIcon } from "./icons";

const responseGoogle = (response) => {
  console.log(response);
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  redButton: {
    position: "absolute",
    width: "374px",
    height: "84px",
    left: "573px",
    top: "880px",
    background: "#F85757",
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
  },
  whiteButton: {
    position: "absolute",
    width: "374px",
    height: "84px",
    left: "572px",
    top: "988px",
    background: "#FFFFFF",
    border: "2px solid #ACACAC",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
  },
  modal: {
    position: "absolute",
    width: "638px",
    height: "769px",
    left: "437px",
    top: "466px",
    background: "#FFFFFF",
    border: "5px solid #878787",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "50px",
  },
}));

export default function LoginDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className={classes.modal}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <GoogleLogin
        clientId="276879982468-ros409es0l58ds23fq9v08thamqccbab.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="contained"
            className={classes.redButton}
            startIcon={<GoogleIcon />}
          >
            Sign In with Google
          </Button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
      <Button
        variant="contained"
        color="default"
        className={classes.whiteButton}
        startIcon={<PersonIcon />}
      >
        Upload
      </Button>
    </Dialog>
  );
}
