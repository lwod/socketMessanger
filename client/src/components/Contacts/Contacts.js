import React from 'react'
import {useContacts} from "../../contexts/ContactsContext";

import {ListGroup} from 'react-bootstrap'

const Contacts = () => {
	
	const {contacts} = useContacts()
	
	return (
		<>
			<ListGroup variant={'flush'}>
				{contacts.map(contact => {
					return <ListGroup.Item
						key={contact.id}
						style={{color:'black'}}
					>
						{contact.name}
					</ListGroup.Item>
				})}
			</ListGroup>
		</>
	)
}

export default Contacts
