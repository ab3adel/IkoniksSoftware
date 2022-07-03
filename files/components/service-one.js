import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";
import { ServicePostData } from "@/data";

const ServiceOne = ({ data }) => {
  return (
    <section className="service_section_2 commonSection">
      <Container>
        <Row>
          {data.map((post,) => (

            <React.Fragment key={post.id} >
              {
                post.id !== 90 ?
                  <Col lg={4} md={12} key={post.id} className="mb-4">


                    <ServiceCardOne data={post} />

                  </Col>
                  :
                  null
              }
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
