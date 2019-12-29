import React, { Component } from 'react'
import styles from './styles.css'


class Card extends Component {

    render(){


        return (

                    <div className={styles.card}>

                    <img className={styles.card__img} src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg" />

                    <div className={styles.card__content}>
                    <div className={styles.card__title}>
                        Nine Inch Nails Live
                    </div>
                    <p className={styles.card__description}>
                        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.
                    </p>
                    </div>

                    </div>


        )


    }


}

export default Card;





