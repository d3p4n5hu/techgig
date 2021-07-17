import { makeStyles } from "@material-ui/core";

const HomeStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    overflowY: "auto",
    maxHeight: "70vh",
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  welcome: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
}));

export default HomeStyles;
