import React from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const newContactName = form.elements.name.value.toLowerCase();
    const nameInContact = contacts.find(
      newContact => newContact.name.toLowerCase() === newContactName
    );
    nameInContact
      ? alert(`${newContactName} is already in contacts`)
      : dispatch(
          addContact({
            name: form.elements.name.value,
            phone: form.elements.number.value,
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
