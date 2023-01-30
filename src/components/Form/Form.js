import React from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/userSlice';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = contacts.contacts.map(contact => contact.name);
    const nameFilter = contacts.contacts.filter(cont =>
      cont.name.includes(contactName)
    );
    const nameLength = nameFilter.length;
    console.log(nameFilter);

    if (nameLength === 1) {
      return alert(contacts.name, 'is already in contacts');
    }

    dispatch(
      addContacts({
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          // value={name}
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberId}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          // value={number}
          id={numberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={styles.button__form} type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
};

export default Form;
