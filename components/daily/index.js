import css from "./daily.module.css";
import Image from "next/image";

const daily = (props) => {
  return (
    <div className={css.daily}>
      <Image src={props.img} width={120} height={120} alt="dailymix"></Image>
      <p className={css.title}>{props.title}</p>
    </div>
  );
};

export default daily;
