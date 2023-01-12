import css from "./sidebar.module.css";
import Links from "../links/index";
import Image from "next/image";
import Playlist from "../playlist";

const sBar = () => {
  return (
    <div className={css.side}>
      <div className={css.logo}>
        <Image
          src="/spotifylogo.png"
          width={131}
          height={40}
          alt="logo"
        ></Image>
      </div>
      <div className={css.secondsection}>
        <Links img="/home.png" text="Home" href="/"></Links>
        <Links img="/search.png" text="Search" href="/search"></Links>
        <Links img="/library.png" text="Your library" href="/library"></Links>
      </div>
      <div className={css.thirdsection}>
        <Links img="/plus.jpg" text="Create Playlist" href="/create"></Links>
        <Links img="/liked.png" text="Liked Songs" href="/liked"></Links>
      </div>
      <div className={css.fourthsection}>
        <Playlist text="Daily Mix 1"></Playlist>
        <Playlist text="Daily Mix 2"></Playlist>
        <Playlist text="Daily Mix 3"></Playlist>
        <Playlist text="Daily Mix 4"></Playlist>
        <Playlist text="Daily Mix 5"></Playlist>
        <Playlist text="Daily Mix 6"></Playlist>
        <Playlist text="Daily Mix 7"></Playlist>
        <Playlist text="Daily Mix 8"></Playlist>
        <Playlist text="Daily Mix 9"></Playlist>
        <Playlist text="Daily Mix 10"></Playlist>
        <Playlist text="Daily Mix 11"></Playlist>
        <Playlist text="Daily Mix 12"></Playlist>
      </div>
    </div>
  );
};

export default sBar;
