import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const {
    deleteContact,
    setCurrentContact,
    clearCurrentContact
  } = contactContext;
  const { name, _id, email, phone, type } = contact;
  const onDelete = () => {
    deleteContact(_id);
    clearCurrentContact();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name} {"  "}
        <span
          style={{ float: "right" }}
          className={
            "badge" +
            " " +
            (type === "professional" ? "badge-primary" : "badge-light")
          }
        >
          {/* {type.charAt(0).toUpperCase() + type.slice(1)} */}
          {type}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            {phone}
          </li>
        )}
      </ul>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => setCurrentContact(contact)}
      >
        Edit
      </button>
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
