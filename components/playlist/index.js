import css from './playlist.module.css'

const playlist = (props) => {
    return(
        <div className={css.textCSS}>
            <p>{props.text}</p>
        </div>
    )
}

export default playlist;