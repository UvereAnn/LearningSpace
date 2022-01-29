import React from 'react';
import { Image } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import companyLogo1 from './images/companyLogo1.jfif';
import companyLogo2 from './images/companyLogo2.png';
import companyLogo3 from './images/companyLogo3.png';
import companyLogo5 from './images/companyLogo5.jfif';


const Clients = () => {
  return (
    <div className='clients'>
     <div className='clients-h2'>
            <h2>Clients</h2>
            <ThreeDots style={{color: '#257F9B', fontSize: '64px', marginTop: '-30px', marginLeft: '-5px'}} />
        </div>
        <div className='company-logos'>
            <Image src={companyLogo1} responsive style={{width: '20%'}}/>
            <Image src={companyLogo2} responsive style={{width: '20%'}}/>
            <Image src={companyLogo3} responsive style={{width: '20%'}}/>
            <Image src={companyLogo1} responsive style={{width: '20%'}}/>
            <Image src={companyLogo5} responsive style={{width: '20%'}}/>
        </div>
    </div>
  )
}

export default Clients