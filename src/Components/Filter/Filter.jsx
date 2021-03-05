import { label, input } from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={label}>
      Find contacts by name <br />
      <input className={input} type="text" value={value} onChange={onChange} />
    </label>
  );
}

// const Filter = ({ value, onChange }) => (
// <label className={label}>
//   Find contacts by name <br />
//   <input className={input} type="text" value={value} onChange={onChange} />
// </label>
// );

// export default Filter;
