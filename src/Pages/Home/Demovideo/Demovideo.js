import React from 'react';

const Demovideo = () => {
    return (
        <div className='mt-5'>
            <h2>Here is my demo video for Tuitions</h2>
            <video loop autoPlay>
        <source
          src="https://www.pexels.com/video/old-footage-of-a-open-field-5510668/"
          type="video/mp4"
        />
         Your browser does not support the video tag.
         </video>
        </div>
    );
};

export default Demovideo;