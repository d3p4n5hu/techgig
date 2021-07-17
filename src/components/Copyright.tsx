import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Asignment submitted by Depanshu Dhiman
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
