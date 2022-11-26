import styles from './UploadSection.module.css';

const UploadSection = () => {
  const { customFileUpload, filePreview } = styles;

  return (
    <div style={styles}>
      <label className={ customFileUpload }>
        <input type="file" multiple/>
        <i className="fa fa-cloud-upload" /> Attach
      </label>
      {/* {this.state.files.map(x => 
           <div className={ filePreview } onClick={removeFile(e, x)}>{x.name}</div>
      )} */}
    </div>
  );
};

export default UploadSection;
