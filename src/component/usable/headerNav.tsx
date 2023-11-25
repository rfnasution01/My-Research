import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Anchor, Division, HeaderNavModal, List, UnOrderedList } from "..";
import { Menu } from "lucide-react";
import "./index.css";

export function HeaderNav({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<string>>;
}) {
  const navList = ["Home", "About"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <Division
          style={{ cursor: "pointer" }}
          action={() => setIsModalOpen(true)}
          className="header-nav-icon"
        >
          <Menu />
        </Division>
      ) : (
        <UnOrderedList style={{ cursor: "pointer", gap: "24px" }}>
          {navList?.map((item, idx) => (
            <List key={idx} action={() => setPage(item)}>
              <Anchor>{item}</Anchor>
            </List>
          ))}
        </UnOrderedList>
      )}
      <HeaderNavModal
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <UnOrderedList
          style={{ cursor: "pointer", gap: "24px", flexDirection: "column" }}
        >
          {navList?.map((item, idx) => (
            <List
              key={idx}
              action={() => {
                setPage(item);
                setIsModalOpen(false);
              }}
            >
              <Anchor>{item}</Anchor>
            </List>
          ))}
        </UnOrderedList>
      </HeaderNavModal>
    </>
  );
}
