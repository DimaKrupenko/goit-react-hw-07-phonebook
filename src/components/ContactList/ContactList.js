// import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../redux/userSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters.filters);

  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  console.log(contacts);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContacts());
  };

  return (
    <ul className={styles.contact}>
      {visibleContact.map(contact => (
        <li className={styles.contact__list} key={contact.id}>
          {contact.name + ': ' + contact.number}
          <button
            className={styles.contact__buttton}
            type="click"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};
