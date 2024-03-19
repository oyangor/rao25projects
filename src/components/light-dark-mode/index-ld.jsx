import UseLocalStorage from "./UseLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handletoggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  //console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container-ld">
        <p>HELLO WORLD!</p>
        <button onClick={handletoggleTheme}>Change theme</button>
      </div>
    </div>
  );
}
