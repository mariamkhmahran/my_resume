import React from "react";
import Pdf from "../assets/MARIAM_MAHRAN_.pdf";
import Snapshot from "../assets/resume-snapshot.png";

import {
  Button,
  CV,
  ContactDetails,
  Container,
  Details,
  Display,
  Img,
  Link,
  LinkedinRow,
  Name,
  NameContainer,
  Row,
} from "./resumeStyles";

export const MyResume: React.FC = () => {
  return (
    <Container>
      <Details>
        <NameContainer>
          <Name>Mariam Mahran</Name>
          <span>Aspiring machine learning engineer</span>
        </NameContainer>
        <ContactDetails>
          <Row>
            <i className="fas fa-map-marker-alt"></i>
            <span>United Kingdom</span>
          </Row>
          <Row>
            <i className="fas fa-mobile"></i>
            <span>+44 (0) 7522214365</span>
          </Row>
          <Row>
            <i className="fas fa-at"></i>
            <Link href="mailto:mariamkhmahran@gmail.com" target="_blank" rel="noreferrer">
              mariamkhmahran@gmail.com
            </Link>
          </Row>
          <LinkedinRow>
            <i className="fab fa-linkedin"></i>
            <Link
              href="https://www.linkedin.com/in/mariam-mahran/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/mariam-mahran/
            </Link>
          </LinkedinRow>
          <Row>
            <i className="fab fa-github"></i>
            <Link href="https://github.com/mariamkhmahran" target="_blank" rel="noreferrer">
              github.com/mariamkhmahran
            </Link>
          </Row>
        </ContactDetails>
      </Details>
      <CV>
        <Display>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <Img src={Snapshot} />
          </a>
        </Display>
        <Button href={Pdf} target="_blank" rel="noreferrer">
          View Pdf
        </Button>
      </CV>
    </Container>
  );
};
