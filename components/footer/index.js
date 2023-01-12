import css from "./footer.module.css";
import Image from "next/image";

const footer = () => {
  return (
    <div className={css.footer}>
      <Image src="/tyler.jfif" width={40} height={40} alt="img"></Image>
      <div className={css.music}>
        <span>See You Again (feat. Kali Uchis)</span>
        <span className={css.text}>Tyler, The Creator, Kali Uchis</span>
      </div>
      {/* <Image src="/nyaa.png" width={1200} height={55} alt="img"></Image> */}
    </div>
  );
};

export default footer;
