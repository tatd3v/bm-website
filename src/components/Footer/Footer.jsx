// @vendors
import { Container } from "react-bootstrap"

// @components
import { LiveRadio } from "./LiveRadio"

export const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <LiveRadio />
      </Container>
    </footer>
  )
}
