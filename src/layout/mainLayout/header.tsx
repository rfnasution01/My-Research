import { Dispatch, SetStateAction } from "react";
import {
  Container,
  Header,
  HeaderNav,
  Image,
  Nav,
  Section,
} from "../../component";
import Logo from "../../assets/logo-dark.png";

export function MainLayoutHeader({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Header>
      <Container>
        <Section>
          <Nav
            style={{
              gap: "8px",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Image
              src={Logo}
              width={28}
              height={28}
              style={{ cursor: "pointer" }}
              action={() => setPage("Home")}
            />
            <HeaderNav setPage={setPage} />
          </Nav>
        </Section>
      </Container>
    </Header>
  );
}
