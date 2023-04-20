import "./user-data.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ApprovalIcon from "@mui/icons-material/Approval";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import EmailIcon from "@mui/icons-material/Email";
import Form from "../form/Form";
const Userdata = () => {
  return (
    <>
      <div className="user-show">
        <div className="show-up">
          <img
            src="https://www.planetsport.com/image-library/square/1200/c/cristiano-ronaldo-portugal-5-june-2022.jpg"
            alt=""
            className="user-show-img"
          />
          <div className="user-up-info">
            <span className="user-up-info-name">Muhammad Arham khan</span>
            <span className="user-up-info-title">Software Engineer</span>
          </div>
        </div>
        {/* user up details */}

        <div className="show-down">
          <div className="show-down-title">Account Details</div>

          <div className="show-down-account-details">
            <PermIdentityIcon className="icons-user" />
            <span className="user-info-items">Account Name</span>
          </div>
          <div className="show-down-account-details">
            <DateRangeIcon className="icons-user" />
            <span className="user-info-items">Date of Joining</span>
          </div>
          <div className="show-down-account-details">
            <ApprovalIcon className="icons-user" />
            <span className="user-info-items">Job Post</span>
          </div>

          <div className="show-down-title">Contact Details</div>
          <div className="show-down-account-details">
            <DateRangeIcon className="icons-user" />
            <span className="user-info-items">Date of Birth</span>
          </div>
          <div className="show-down-account-details">
            <EditLocationIcon className="icons-user" />
            <span className="user-info-items">Location</span>
          </div>
          <div className="show-down-account-details">
            <LocalPhoneIcon className="icons-user" />
            <span className="user-info-items">Contact number</span>
          </div>
          <div className="show-down-account-details">
            <EmailIcon className="icons-user" />
            <span className="user-info-items">Email</span>
          </div>
        </div>
      </div>
      <div className="user-update">
        <span className="user-update-title">Edit</span>
        <Form />
      </div>
    </>
  );
};

export default Userdata;
