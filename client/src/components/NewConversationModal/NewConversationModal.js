import React, {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {useContacts} from "../../contexts/ContactsContext";



const NewConversationModal = ({closeModal}) => {
	
	const {contacts, useConversations} = useContacts()
	
	const [selectedContactIds, setSelectedContactsIds] = useState([])
	
	const handleCheckboxChange = (contactId) =>{
		setSelectedContactsIds(prevState => {
			if(prevState.includes(contactId)){
				return prevState.filter(prevId => {
					return contactId !== prevId
				})
			}
			else
			{
				return [...prevState, contactId]
			}
		})
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		
		// createConversation(selectedContactIds)
		closeModal()
	}
	
	return (
		<div style={{color: 'black'}}>
			<Modal.Header closeButton>Create Conversation</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					{contacts.map(contact=>{
						return <Form.Group
							controlId={contact.id}
							key={contact.id}
						>
							<Form.Check
								type={'checkbox'}
								value={selectedContactIds.includes(contact.id)}
								label={contact.name}
								onChange={()=> handleCheckboxChange(contact.id)}
							/>
							
						</Form.Group>
					})}
					<Button type={'submit'}>Create</Button>
				</Form>
			</Modal.Body>
		</div>
	)
}

export default NewConversationModal
