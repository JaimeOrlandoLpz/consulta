import {useState} from 'react';

exportconstuseForm = (initialState = {})=>{
	const[values,setValues]=useState(initialState);
	constreset=()=>{
		setValues(initialState);
	}
	consthandleInputChange = ({target})=> {
		setValues({
			...values,
			[targetname]:targetvalue
		});
	}

	return [values, handleInputChange,reset];
}
