/** @format */

import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
	onChange: (e: any) => {}
	value: string
}

const Input = ({onChange, value}: InputProps) => {
	return (
		<input
			type='text'
			onChange={onChange}
			value={value}
			placeholder='Search for Problem'
			className={styles.textBox}></input>
	)
}

export default Input
