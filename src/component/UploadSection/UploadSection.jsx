import styles from "./UploadSection.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadSection = () => {
  const { customFileUpload, wrapper } = styles;

  return (
    <div className={wrapper}>
      <label className={customFileUpload}>
        <input type="file" multiple />
        <CloudUploadIcon /> Attach
      </label>
    </div>
  );
};

export default UploadSection;
