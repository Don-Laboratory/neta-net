import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import '../../styles/scss/component/_tabs.scss';
import { Card_Show, Card_Post } from '../../components/layouts/Post_Card';

const NavBar = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="tabs"
      className="mb-3 me-auto"
    >
      <Tab eventKey="home" title="全ての投稿">
        <p className='content'>This is Home tab</p>
        <Card_Post></Card_Post>
        <Card_Show></Card_Show>
        <Card_Show></Card_Show>
        <Card_Show></Card_Show>
        <Card_Show></Card_Show>
      </Tab>
      <Tab eventKey="profile" title="おすすめ">
        <p className='content'>This is Home tab</p>
      </Tab>
      <Tab eventKey="contact" title="新着">
        <p className='content'>This is Home tab</p>
      </Tab>
    </Tabs>
  );
};

export default NavBar;
