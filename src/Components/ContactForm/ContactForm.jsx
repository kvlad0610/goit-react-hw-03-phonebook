import { useState } from 'react';
import { form, label, input, button } from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={form}>
        <label className={label}>
          Name <br />
          <input
            className={input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={label}>
          Number <br />
          <input
            className={input}
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>
        <button className={button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit} className={form}>
//           <label className={label}>
//             Name <br />
//             <input
//               className={input}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label className={label}>
//             Number <br />
//             <input
//               className={input}
//               type="text"
//               name="number"
//               value={number}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button className={button} type="submit">
//             Add contact
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ContactForm;
