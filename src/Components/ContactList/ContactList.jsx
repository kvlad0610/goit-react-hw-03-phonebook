import { item, button } from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={item} key={id}>
          {name}:{number}
          <button
            className={button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li className={item} key={id}>
//         {name}:{number}
//         <button
//           className={button}
//           type="button"
//           onClick={() => onDeleteContact(id)}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// export default ContactList;
