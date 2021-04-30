import React, {useRef} from "react";
import {Modal, Form, Button} from 'react-bootstrap'

const NewContactModal = ({closeModal}) => {
	
	const idRef = useRef()
	const nameRef = useRef()
	
	const handlerSubmit = (e) => {
		e.preventDefault()
	}
	
	return (
		<>
			<div style={{color: 'black'}}>
				<Modal.Header closeButton>Create Contact</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handlerSubmit}>
						<Form.Group>
							<Form.Label>Id</Form.Label>
							<Form.Control
								type={'text'}
								ref={idRef}
								required/>
						</Form.Group>
						
						<Form.Group>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type={'text'}
								ref={nameRef}
								required/>
						</Form.Group>
						<Button type={'submit'}>Create</Button>
					</Form>
				</Modal.Body>
			</div>
		</>
	)
	
}

export default NewContactModal
