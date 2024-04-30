import React from 'react'
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../Components/Rating';
import axios from 'axios';


 const ProductScreen = () => {
 
  const [product, setProduct] = useState({});
  const {id: productId} = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    }

    fetchProduct();
  }, [productId]);



  
  return (
   <>
    <Link className='btn btn-light my-3' to='/'>  
    Go Back </Link>
<Row>
  <Col md={5}>
    <Image src={product.imgUrl} alt={product.title} fluid />

    </Col>
    <Col md={4}>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <h3>{product.title}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.stars} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.title}
                </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col><strong>{product.countInStock>0 ? 'in Stock' : 'Out of Stock'}
                </strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                    Add to Cart
                    </Button>
                  </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
</Row>
  
   </>
  );
};


export default ProductScreen


