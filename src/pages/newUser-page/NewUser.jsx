import "./newuser.css";

export const NewUser = () => {
  return (
    <div className="newuser">
      <h1 className="newuser-title">New User</h1>
      <form className="newuser-form">
        <div className="newuser-form-items">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type=""
            className="newuser-input"
            placeholder="User-name"
          />
        </div>
        <div className="newuser-form-items">
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            className="newuser-input"
            placeholder="Full-name"
          />
        </div>
        <div className="newuser-form-items">
          <label htmlFor="contact">Contact</label>
          <input
            id="contact"
            type="text"
            className="newuser-input"
            placeholder="Phone-No+"
          />
        </div>
        <div className="newuser-form-items">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="newuser-input"
            placeholder="Email"
          />
        </div>
        <div className="newuser-form-items">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="newuser-input"
            placeholder="Password"
          />
        </div>
        <div className="newuser-form-items">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="address"
            className="newuser-input"
            placeholder="address"
          />
        </div>
        <div className="newuser-form-items">
          <label>Gender</label>
          <div className="newuser-gender-container">
            <input id="male" type="radio" value="male" name="gender" />
            <label htmlFor="male">Male</label>
            <input id="female" type="radio" value="female" name="gender" />
            <label htmlFor="female">Female</label>
            <input id="other" type="radio" value="other" name="gender" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newuser-form-items">
          <label htmlFor="active">Active </label>
          <select id="active" name="active" className="newuser-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newuser-btn">Create</button>
      </form>
    </div>
  );
};
