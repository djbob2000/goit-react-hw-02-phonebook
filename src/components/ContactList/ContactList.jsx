import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
// import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ContactList;
