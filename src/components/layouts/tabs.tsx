import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import '../../styles/scss/component/_tabs.scss';
 
const NavBar = () => {
    return (
        <Tabs
              defaultActiveKey="home"
              id="tabs"
              className="mb-3 me-auto"
            >
            <Tab eventKey="home" title="全ての投稿">
             <p className='content'>This is Home tab</p>
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