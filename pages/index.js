/** @format */
import styles from '../styles/Home.module.scss'
import {Col, Row, Container} from 'react-bootstrap'
import Spacer from 'react-spacer'

import {Card} from '../components/card'
import {Input} from '../components/input'
import {questionTypes} from '../data/questionTypes'
import {useState} from 'react'

export default function Home() {
	const [query, setQuery] = useState('')
	const onChange = e => {
		setQuery(e.target.value)
	}
	return (
		<div>
			<div className={styles.hero}>
				<h1>Quantitative and Aptitude Solver</h1>
			</div>
			<Spacer height={40} />
			<Input value={query} onChange={onChange} />
			<Container className={styles.container}>
				<Row className={styles.row}>
					{questionTypes
						.filter(questionType => {
							if (query.length <= 2) {
								return questionType
							} else {
								return questionType.title.toLowerCase().includes(query.toLowerCase())
							}
						})
						.map(questionType => {
							return (
								<Col key={questionType.key} className={styles.item} xs={6} md={4} lg={3}>
									<Card id={questionType.id} title={questionType.title} />
								</Col>
							)
						})}
				</Row>
			</Container>
		</div>
	)
}
