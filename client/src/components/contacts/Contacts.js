import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please input the contact</h4>;
  }

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => {
                return (
                  <CSSTransition
                    key={contact.id}
                    timeout={500}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                );
              })
            : contacts.map(contact => {
                return (
                  <CSSTransition
                    key={contact.id}
                    timeout={500}
                    classNames="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                );
              })}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
