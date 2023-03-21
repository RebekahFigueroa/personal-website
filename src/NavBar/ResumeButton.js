import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { Button } from "@mui/material";

const ResumeButton = () => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      size="Large"
      startIcon={<AttachFileRoundedIcon />}
    >
      Resume
    </Button>
  );
};

export default ResumeButton;
