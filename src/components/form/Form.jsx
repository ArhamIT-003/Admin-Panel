import "./form.css";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Form = () => {
  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit} className="user-update-form">
        {/* User-update-left */}
        <div className="user-update-left">
          <div className="user-form-items">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type=""
              className="user-input"
              placeholder="User-name"
            />
          </div>
          <div className="user-form-items">
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              className="user-input"
              placeholder="Full-name"
            />
          </div>
          <div className="user-form-items">
            <label htmlFor="contact">Contact</label>
            <input
              id="contact"
              type="text"
              className="user-input"
              placeholder="Phone-No+"
            />
          </div>
          <div className="user-form-items">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="user-input"
              placeholder="Email"
            />
          </div>
          <div className="user-form-items">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="address"
              className="user-input"
              placeholder="address"
            />
          </div>
        </div>
        {/* User-update-right */}
        <div className="user-update-right">
          <div className="user-update-file">
            <img
              className="user-update-img"
              src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRbFGA177nqWs00jR60MLVe8tqgEWMHjSbjVWuKNMQbTwpfki0Np3n7My7ZGDRamjMlmboWBkacAqNGZoQ"
              alt=""
            />
            <label htmlFor="file">
              <FileUploadIcon className="user-update-icon" />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <button className="user-update-btn">Update</button>
        </div>
      </form>
    </>
  );
};

export default Form;
