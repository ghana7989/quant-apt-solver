/** @format */

import React from 'react'
import {NumberQ1} from '../../components/numbers'
import {Type} from '../../components/type'
import {numberTypes} from '../../data/numberTypes'

// Type 1: Find units digit of a number in the form of ab
// Find the unit digit of (4137)754

const Numbers = () => {
	return (
		<div>
			<h1>Numbers</h1>
			<Type number={1} text={numberTypes[0]} />
			<NumberQ1 />
			<Type number={2} text={numberTypes[1]} />
			<Type number={3} text={numberTypes[2]} />
			<Type number={4} text={numberTypes[3]} />
			<Type number={5} text={numberTypes[4]} />
			<Type number={6} text={numberTypes[5]} />
		</div>
	)
}

export default Numbers
