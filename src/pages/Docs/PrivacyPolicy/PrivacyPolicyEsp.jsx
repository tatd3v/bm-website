import { Container, Row, Col, Card } from 'react-bootstrap';

export const PrivacyPolicy = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card>
            <Card.Body>
              <Card.Title>Política de Privacidad</Card.Title>
              <Card.Text>
                <h2>
                  Política de Privacidad para el Sitio Web de Ballroom Medellín
                </h2>

                <p>
                  En Ballroom Medellín, accesible desde nuestro sitio web, una
                  de nuestras principales prioridades es la privacidad de
                  nuestros visitantes. Este documento de Política de Privacidad
                  contiene los tipos de información que recopilamos y
                  registramos en Ballroom Medellín y cómo la usamos.
                </p>

                <h3>Información que Recopilamos</h3>
                <p>Recopilamos la siguiente información:</p>
                <ul>
                  <li>Nombre</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Ubicación</li>
                </ul>

                <h3>Propósito de la Recopilación de Datos</h3>
                <p>Recopilamos sus datos para los siguientes propósitos:</p>
                <ul>
                  <li>Para proporcionar nuestros servicios</li>
                  <li>Con fines de marketing</li>
                </ul>

                <h3>Servicios de Terceros</h3>
                <p>
                  Podemos compartir sus datos con los siguientes servicios de
                  terceros:
                </p>
                <ul>
                  <li>Google Analytics</li>
                  <li>Redes de publicidad</li>
                </ul>

                <h3>Derechos del Usuario</h3>
                <p>
                  Usted tiene los siguientes derechos con respecto a sus datos:
                </p>
                <ul>
                  <li>Acceso: Puede solicitar acceso a sus datos.</li>
                  <li>
                    Corrección: Puede solicitar la corrección de datos
                    inexactos.
                  </li>
                  <li>
                    Eliminación: Puede solicitar la eliminación de sus datos.
                  </li>
                </ul>

                <h3>Medidas de Seguridad</h3>
                <p>
                  Implementamos las siguientes medidas de seguridad para
                  proteger sus datos:
                </p>
                <ul>
                  <li>Autenticación con clave API</li>
                  <li>Transmisión de datos encriptada</li>
                </ul>

                <h3>Información de Contacto</h3>
                <p>
                  Para cualquier consulta relacionada con la privacidad, puede
                  contactarnos en:
                </p>
                <p>Email: tatdev91@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
