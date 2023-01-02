import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={css.list__item} key={id}>
        <span>{name}</span>: {number}
        <button
          className={css.button__delete}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
