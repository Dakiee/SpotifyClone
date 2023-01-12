import css from './album.module.css'
import Image from 'next/image'

const album = (props) =>{
    return(
        <div className={css.content}>
            <Image src={props.img} width={80} height={80} alt="cover"></Image>
            <p className={css.textCSS}>{props.text}</p>
        </div>
    )
}

export default album;