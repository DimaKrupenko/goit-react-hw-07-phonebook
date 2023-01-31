// import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContacts } from '../redux/userSlice';
import { fetchContacts, deleteContact } from '../redux/operations';
import { useEffect } from 'react';
import { getContacts } from '../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(state => state.filters.filters);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContact = items.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={styles.contact}>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {visibleContact &&
        visibleContact.map(contact => (
          <li className={styles.contact__list} key={contact.id}>
            {contact.name + ': ' + contact.phone}
            <button
              className={styles.contact__buttton}
              type="click"
              onClick={() => dispatch(deleteContact(contact.id))}
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
