import { Container } from "../../component";
import { AboutPage, Homepage, NotFoundPage } from "../../page";

export function MainLayoutContent({ page }: { page: string }) {
  return (
    <Container style={{ padding: "16px" }}>
      {page === "Home" ? (
        <Homepage />
      ) : page === "About" ? (
        <AboutPage />
      ) : (
        <NotFoundPage />
      )}
    </Container>
  );
}
