/** @format */

import styles from './Type.module.scss'

interface TypeProps {
	number: number
	text: string
}

const Type = ({number, text}: TypeProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.type}>
				<h1>Type {number}</h1>
			</div>
			<div className={styles.text}>
				<h2>{text}</h2>
			</div>
		</div>
	)
}

export default Type
