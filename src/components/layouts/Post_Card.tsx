import React from 'react';
import Image from 'next/image';
import card_styles from '@/styles/scss/project/_card.module.scss'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Card_Show() {
  return (
    // <Container>
    <Card className={card_styles.card}>
      <Row>
        <Col sm={1} xs={2} className={card_styles.card_icon}>
          <Image src="/assets/img_user.png" alt="ユーザーアイコン" width={50} height={50} />
        </Col>
        <Col sm={11} xs={10}>
          <Card.Title>匿名太郎</Card.Title>
          <Card.Text>
            文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が入ります文章が...
          </Card.Text>
          <ul className={card_styles.card_tag}>
            <li>
              <Badge bg="Info" text="right">タグです</Badge>
            </li>
            <li>
              <Badge bg="Info" text="right">タグです</Badge>
            </li>
          </ul>
          <ul className={card_styles.card_counter}>
            <li>30</li>
            <li>30</li>
          </ul>
        </Col>
      </Row>
    </Card>
    // </Container>
  )
}

function Card_Post() {
  return (
    // <Container>
    <Card className={card_styles.card}>
      <Row>
        <Col sm={1} xs={2}>
          <Image src="/assets/img_user.png" alt="ユーザーアイコン" width={50} height={50} />
        </Col>
        <Col sm={11} xs={10}>
          <Card.Title>匿名太郎</Card.Title>
          <div className={card_styles.card_textarea}>
            <Form.Control as="textarea" placeholder="ネタ内容を記入してください" />
          </div>
          <div className={card_styles.card_submit}>
            <Button as="input" type="submit" value="投稿する" />
          </div>
        </Col>
      </Row>
    </Card>
    // </Container>
  )
}

export { Card_Show, Card_Post };
