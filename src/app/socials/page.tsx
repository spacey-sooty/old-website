import { Github, Discord } from "@/components/socials"
import styles from "@/styles/pages/socials.module.scss"

export default function Socials() {
	return (
		<div>
			<div>
				<h1 className={styles.heading}> Socials </h1>
			</div>
			<Github />
			<Discord />
		</div>
	)
}
