import MuiAlert from "@material-ui/lab/Alert";

interface AlertProps {
  onClose: () => void;
  severity: "error" | "info" | "success" | "warning";
  children: React.ReactNode;
}

export default function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
