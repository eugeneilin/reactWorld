import React from 'react';
import { MainLayout } from '../components';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <MainLayout>
      <Row className='text-center'>
        <Col>
          <h1 className='my-5'>Welcome to this React API app!</h1>
          <p className='mb-5'>Let's get some movies info!</p>
          <Link to='/films'>
            <Button>Follow me</Button>
          </Link>
        </Col>
      </Row>
    </MainLayout>
  );
}
