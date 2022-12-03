import styles from "./UploadSection.module.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Upload } from 'upload-js';
import { useState } from "react";

const UploadSection = () => {
  const { customFileUpload, wrapper } = styles;
  const [url, setUrl] = useState();

  const handleUpload = async(event) => {
    console.log(event.target.files)
    var upload = Upload({ apiKey: "public_kW15ayt3HBgwrjWdEwSk6ztXxfZ1" });
    var file = event.target.files[0];
    var result = await upload.uploadFile(file);
    var { fileUrl, filePath } = result;
    setUrl(fileUrl);
  }

  return (
    <div className={wrapper}>
      <label className={customFileUpload}>
        <input type="file" multiple onChange={ handleUpload } key={ url }/>
        <CloudUploadIcon /> Attach
      </label>
    </div>
  );
};

export default UploadSection;
