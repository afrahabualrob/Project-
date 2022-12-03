import styles from "./UploadSection.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadSection = () => {
  const { customFileUpload, filePreview, wrapper } = styles;

  return (
    <div style={styles}>
      <div className={wrapper}>
        <label className={customFileUpload}>
          <input type="file" multiple />
          <CloudUploadIcon /> Attach
        </label>

        {/* {this.state.files.map(x => 
           <div className={ filePreview } onClick={removeFile(e, x)}>{x.name}</div>
      )} */}
      </div>
    </div>
  );
};

export default UploadSection;
