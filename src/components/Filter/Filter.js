import React from 'react';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filters);

  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
    // console.log(evt.target.value);
    // console.log(evt);
  };

  return (
    <label className={styles.filter__label} htmlFor="">
      Find contacts by names
      <input className={styles.filter__input} type="text" onChange={onChange} />
    </label>
    //     );
  );
};

export default Filter;
