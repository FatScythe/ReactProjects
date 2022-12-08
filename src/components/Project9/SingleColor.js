import { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, weight, rgb, hex }) => {
  const [alert, setAlert] = useState(false);
  const bkg = rgb.join(",");
  const hexValue = rgbToHex(...rgb);
  const hexColor = `#${hex}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`colors ${index > 10 ? "color-light" : null}`}
      style={{ backgroundColor: `rgb(${bkg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='clip-alert'>Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
