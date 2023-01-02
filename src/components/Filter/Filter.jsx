import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.findForm}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <span className={css.labelTitle}>Name</span>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="filter"
          placeholder="type name here"
        />
      </label>
    </div>
  );
};

export default Filter;
