import React from 'react';
import ContactItem from './contactItem/ContactItem'

const ContactList = ({filteredItems, getIdForDelete}) => {

  const delItem = (id) => {
    getIdForDelete(id)
  }

  return(
    <>
    <ul>
      {
        filteredItems.map(({name,number,id})=>(
          <ContactItem key={id} id={id} name={name} number={number} delItem={delItem}/>
        ))
      }
    </ul>
    </>
  )
}
export default ContactList;