import React from 'react';
import images from '../../constants/images';
import { GiMedicinePills } from "react-icons/gi";


const SubHeading = ( {title} ) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <GiMedicinePills style={ { color: 'gold'}}/>
  </div>
);

export default SubHeading;
