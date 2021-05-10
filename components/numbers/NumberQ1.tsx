/** @format */

import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {getRemainder} from '../../utils/mathFunctions'
import styles from './NumberQ1.module.scss'

// Hint: Divide b by 4, if it is not divisible then find the remainder of b when divided by 4.
// Units digit = a^r, r is the remainder
// Number is in the form ab i.e (4137) 754
// 4 × 188 = 752, therefore we get remainder as 2
// Units digit = (4137)2 = 17114769
// 9 is the digit in units place

const NumberQ1 = () => {
	const [a, setA] = useState(0)
	const [b, setB] = useState(undefined)
	const [result, setResult] = useState(0)
	const getResult = (a: number, b: number) => {
		const remainder = getRemainder(a, b)
		if (remainder !== 0) {
			setResult((a * remainder) % 10)
			return
		} else {
			const I = a % 10
			if (I !== 0 && I % 2 === 0) {
				setResult(6)
				return
			} else if (I !== 1 && I !== 5 && I % 2 !== 0) {
				setResult(1)
				return
			}
		}
		return setResult(Math.pow(a, b) % 10)
	}
	useEffect(() => {
		getResult(a, b)
	}, [a, b, result])
	return (
		<div className={styles.container}>
			<div className={styles.question}>
				<h1>
					Q1. Find the unit digit of (
					<input type='text' value={a} onChange={({target: {value}}) => setA(Number(value))} />)
					<sup>
						<input type='number' value={b} onChange={({target: {value}}) => setB(Number(value))} />
					</sup>
				</h1>
			</div>
			{!!result && (
				<div className={styles.answer}>
					<h2>Result :</h2>
					<input value={result} type='text' readOnly />
				</div>
			)}
		</div>
	)
}

export default NumberQ1
