import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Anchor, Division, List, UnOrderedList } from "..";
import { Menu } from "lucide-react";
import "./index.css";

export function DashboardHeaderNav({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<string>>;
}) {
  const navList = ["Home", "About"];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
        <Division style={{ cursor: "pointer" }}>
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
    </>
  );
}
