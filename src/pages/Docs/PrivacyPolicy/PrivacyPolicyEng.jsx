import { Container, Row, Col, Card } from 'react-bootstrap';

export const PrivacyPolicyEng = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card>
            <Card.Body>
              <Card.Title>Privacy Policy</Card.Title>
              <Card.Text>
                <h2>Privacy Policy for Ballroom Medellin Website</h2>

                <p>
                  At Ballroom Medellin, accessible from our website, one of our
                  main priorities is the privacy of our visitors. This Privacy
                  Policy document contains types of information that are
                  collected and recorded by Ballroom Medellin and how we use it.
                </p>

                <h3>Information We Collect</h3>
                <p>We collect the following information:</p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Location</li>
                </ul>

                <h3>Purpose of Data Collection</h3>
                <p>We collect your data for the following purposes:</p>
                <ul>
                  <li>To provide our services</li>
                  <li>For marketing purposes</li>
                </ul>

                <h3>Third-Party Services</h3>
                <p>
                  We may share your data with the following third-party
                  services:
                </p>
                <ul>
                  <li>Google Analytics</li>
                  <li>Advertising networks</li>
                </ul>

                <h3>User Rights</h3>
                <p>You have the following rights regarding your data:</p>
                <ul>
                  <li>Access: You can request access to your data.</li>
                  <li>
                    Correction: You can request correction of inaccurate data.
                  </li>
                  <li>Deletion: You can request deletion of your data.</li>
                </ul>

                <h3>Security Measures</h3>
                <p>
                  We implement the following security measures to protect your
                  data:
                </p>
                <ul>
                  <li>API key authentication</li>
                  <li>Encrypted data transmission</li>
                </ul>

                <h3>Contact Information</h3>
                <p>For any privacy-related inquiries, you can contact us at:</p>
                <p>Email: tatdev91@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
