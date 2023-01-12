import css from "./links.module.css";
import Image from "next/image";

const link = (props) => {
  return (
    <div className={css.content}>
      <Image
        className={css.imageCSS}
        src={props.img}
        width={20}
        height={20}
        alt="icon"
      ></Image>
      <a href={props.href} className={css.underline}>
        <p className={css.textCSS}>{props.text}</p>
      </a>
    </div>
  );
};

export default link;
