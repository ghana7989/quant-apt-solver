/** @format */
import Link from 'next/link'
import Image from 'next/image'
import styles from './Card.module.scss'
import {colorsArr} from '../../styles/theme/colors'

interface CardProps {
	img: string
	title: string
	id: string
	key: string
}

const Card = ({img, id, key, title}: CardProps) => {
	const color = colorsArr[Math.floor(Math.random() * colorsArr.length)]

	return (
		<Link href={`/${id}`}>
			<div className={styles.container}>
				<div className={styles.image} style={{backgroundColor: color}}>
					<Image width={80} height={80} src='https://source.unsplash.com/random' />
				</div>
				<h3>{title}</h3>
			</div>
		</Link>
	)
}

export default Card
