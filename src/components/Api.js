import React from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Axios from 'axios';
import { myHeart } from "./images/heart.png";
import { Image } from 'react-bootstrap';

const Api = () => {

  return (
    <div>
      <div className="heartBtn">
        <div className="content">
          <span className='heart'><Image /></span>
          <span className='like'>like</span>
          <span className='numb'></span>
        </div>
      </div>
    </div>
  )
}

export default Api
