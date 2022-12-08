import { useRef, useEffect, useState } from "react";
import { useTwelveContext } from "./context";

const SubMenu = () => {
  const {
    isSubMenuOpen,
    page: { page, links },
    location,
  } = useTwelveContext();
  const container = useRef(null);
  const [column, setColumn] = useState("");

  useEffect(() => {
    setColumn("col-2");
    const submenu = container.current.style;
    submenu.left = `${location.midpoint}px`;
    submenu.bottom = `${location.bottom}px`;
  }, [location, page]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${column}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default SubMenu;
