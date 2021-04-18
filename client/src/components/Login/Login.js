import React, {useRef} from 'react'
import {Button, Container, Form} from 'react-bootstrap'

import {v4 as uuidV4} from  'uuid'

export const Login = ({onIdSubmit})=>{
	
	const idRef = useRef()
	
	const handleSubmit = (e)=>{
		e.preventDefault()
		
		onIdSubmit(idRef.current.value)
	}
	
	const createNewId = ()=>{
		onIdSubmit(uuidV4())
	}
	
	return(
		<Container
			className={'align-items-center d-flex'}
			style={{height:'100vh'}}
		>
			<Form className={'w-100'} onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Enter your id</Form.Label>
					<Form.Control type={'text'} ref={idRef} required></Form.Control>
				</Form.Group>
				<Button
					type={'submit'}
					className={'mr-2'}>Login</Button>
				<Button
					variant={'secondary'}
					onClick={createNewId}
				>Crete a new id</Button>
			</Form>
		</Container>
	)
}

