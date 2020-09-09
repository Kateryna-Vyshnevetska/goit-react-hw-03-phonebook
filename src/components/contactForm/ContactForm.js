import React from 'react';

const ContactForm = ({contacts, getContacts}) => {
  const newContact = {};
  
  const handleSubmit = (ev) => {
    ev.preventDefault();

    const form = ev.target;
    form.reset();
    let flag = true;
    if(newContact.name === undefined || newContact.number === undefined){
      alert(`You have not completed all the fields or the values ​​are repeated`);
    }else{
      contacts.map(el => ( el.name === newContact.name ? flag = false : ''));
      flag ? getContacts(newContact) : alert(`${newContact.name} is already in contacts`);
    }
    
  }

  const handleChange = ({target:{name,value}}) => {
    newContact[name]=value
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label className='text'>Name
          <input className='input' type="text" placeholder="Enter name" 
          name='name' onChange={handleChange}/>
        </label>
        <label className='text'>Number
          <input className='input' type="text"  placeholder="Enter number"
          name='number' onChange={handleChange}/>
        </label>
        <button className='btn' type='submit'>Add contact</button>
      </form>
      </>
  )
}

export default ContactForm;