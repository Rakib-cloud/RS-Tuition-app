import React from 'react';
import demo from '../../../video/demo.mp4';
const Demovideo = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-center'>Here is my demo video for Tuitions</h2>
            <video width="100%" height="400px" controls>
          <source src={demo} type="video/mp4" />
        Your browser does not support HTML5 video.
           </video>
        </div>
    );
};

export default Demovideo;