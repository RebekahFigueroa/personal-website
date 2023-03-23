import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import { Button } from "@mui/material";

const ResumeButton = () => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      size="Large"
      startIcon={<AttachFileRoundedIcon />}
      href="/assets/Rebekah_Figueroa_Resume_Website.docx.pdf"
      target="blank"
    >
      Resume
    </Button>
  );
};

export default ResumeButton;
