// import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContacts } from '../redux/userSlice';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import { getContacts } from '../redux/selectors';

const ContactList = () => {
  // const { data, isFetching } = useFetchContacts();
  // const { data, isFetching } = contactsApi.endpoints.fetchContacts.useQuery();
  // const contacts = useSelector(state => state.contacts.contacts);
  // const filter = useSelector(state => state.filters.filters);
  // const visibleContact = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );
  // console.log(contacts);
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // const dispatch = useDispatch();
  // const handleDelete = () => {
  //   dispatch(deleteContacts());
  // };

  return (
    <ul className={styles.contact}>
      {items &&
        items.map(contact => (
          <li className={styles.contact__list} key={contact.id}>
            {contact.name + ': ' + contact.phone}
            <button
              className={styles.contact__buttton}
              type="click"
              // onClick={() => handleDelete(contact.id)}
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
