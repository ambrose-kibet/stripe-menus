import { useRef, useEffect } from "react";
import { UseGlobalContext } from "./AppProvider";

const SubLinks = () => {
  const container = useRef(null);
  const {
    isSublinksOpen,
    menuInfo,
    data: { page, links },
  } = UseGlobalContext();

  useEffect(() => {
    container.current.style.left = `${menuInfo.cordinates.center}px `;
    container.current.style.top = `${menuInfo.cordinates.bottom}px `;
  }, [menuInfo]);
  const cols = links.length;
  return (
    <section
      className={
        isSublinksOpen
          ? "sublinks-container show-sublink"
          : "sublinks-container"
      }
      ref={container}
    >
      <h5>{page} </h5>
      {links && (
        <div className={`drop-down col${cols}`}>
          {links.map((item, index) => {
            return (
              <a key={index} href={item.url}>
                <span>{item.icon}</span>
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SubLinks;
