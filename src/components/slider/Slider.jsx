import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './slider.module.css';



const Slider = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                    <img src="https://www.embla-carousel.com/static/embla-logo-dark-theme-blur-dd6671f5992e7089fd82e1f04db7370e.svg" alt="" />
                </div>
                <div className={styles.embla__slide}>
                    <img src="https://www.embla-carousel.com/static/embla-logo-dark-theme-blur-dd6671f5992e7089fd82e1f04db7370e.svg" alt="" />
                </div>
                <div className={styles.embla__slide}>
                    <img src="https://www.embla-carousel.com/static/embla-logo-dark-theme-blur-dd6671f5992e7089fd82e1f04db7370e.svg" alt="" />
                </div>
                <div className={styles.embla__slide}>
                    <img src="https://www.embla-carousel.com/static/embla-logo-dark-theme-blur-dd6671f5992e7089fd82e1f04db7370e.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Slider