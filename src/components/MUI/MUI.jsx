import styles from './Mui.module.css'

const MUI = () => {
  const url = "https://upload.wikimedia.org/wikipedia/commons/0/06/Mickey_mouse.svg"
  const url2 = "https://m.media-amazon.com/images/I/61zvI06SmRL._AC_UF1000,1000_QL80_.jpg"
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </p>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </p>
        </div>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore amet aperiam autem commodi atque quibusdam, cupiditate numquam cum aliquam, porro dolore tempora perferendis inventore laborum dolor? Nesciunt laudantium et consequuntur?
          </p>
        </div>
        <div className={styles.image}>

          <img src={url} alt="" />

         {/* now on this image i want to show a differet div how to do it ? */}

        </div>
      </div>
    </>
  )
}

export default MUI