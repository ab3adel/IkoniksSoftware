import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceSidebar from "@/components/service-sidebar";
import ServiceDetailsContent from "@/components/service-details-content";

const ServiceDetails = ({ service, data }) => {
  return (
    <section className="commonSection service_detail">
      <Container>
        <Row>
          <Col lg={8} md={12}>
            {service && data ? <ServiceDetailsContent service={service} data={data} /> : null}
          </Col>
          <Col lg={4} md={12} className="sidebar">
            <ServiceSidebar data={data} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
