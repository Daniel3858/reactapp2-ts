import IgniteLogo from "../assets/ignite-logo.svg";

import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <img src={IgniteLogo} alt="Logo ignite" />
    </header>
  );
}
