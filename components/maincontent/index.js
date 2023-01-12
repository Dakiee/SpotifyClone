import css from "./maincontent.module.css";
import Image from "next/image";
import Album from "../album/index";
import Mix from "../daily/index";

const maincontent = () => {
  return (
    <div className={css.container}>
      <nav className={css.navbar}>
        <div className={css.arrow}>
          <Image src="/left.png" width={20} height={22} alt=""></Image>
          <Image src="/right.png" width={20} height={22} alt=""></Image>
        </div>
        <div className={css.profile}>
          <Image src="/user.png" width={20} height={22} alt=""></Image>
          <button className={css.btn + " btn"}>Dakie</button>
        </div>
      </nav>
      <div className={css.album}>
        <h3>Good afternoon</h3>
        <div className={css.albums}>
          <Album img="/bloody.jfif" text="Teen Beats"></Album>
          <Album img="/mix3.jfif" text="Daily Mix 3"></Album>
          <Album img="/dojacat.jfif" text="Doja Cat Mix"></Album>
          <Album img="/bts.jfif" text="Korean Mix"></Album>
          <Album img="/playboicarti.jpg" text="Playboi Carti Mix"></Album>
          <Album img="/tyler.jfif" text="Tyler The Creator Mix"></Album>
        </div>
      </div>
      <div className={css.daily}>
        <h3>Made For Dakie</h3>
        <div className={css.mix}>
          <Mix img="/dojacat.jfif" title="Doja Cat"></Mix>
          <Mix img="/mix3.jfif" title="Daily Mix"></Mix>
          <Mix img="/bloody.jfif" title="Dance Dance"></Mix>
          <Mix img="/tyler.jfif" title="Tyler The Creator"></Mix>
        </div>
      </div>
      <div className={css.daily}>
        <h3>Recently Played</h3>
        <div className={css.mix}>
          <Mix img="/tyler.jfif" title="Tyler The Creator"></Mix>
        </div>
      </div>
    </div>
  );
};

export default maincontent;
