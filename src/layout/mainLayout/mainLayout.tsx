import { useState } from "react";
import { MainLayoutContent, MainLayoutFooter, MainLayoutHeader } from ".";
import { Body } from "../../component";

export function MainLayout() {
  const [page, setPage] = useState<string>("Home");

  return (
    <Body>
      <MainLayoutHeader setPage={setPage} />
      <MainLayoutContent page={page} />
      <MainLayoutFooter />
    </Body>
  );
}
