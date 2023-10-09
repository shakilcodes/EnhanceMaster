import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BannerSlider = () => {
  return (
    <div className='mt-32'>
      <ReactCompareSlider
        style={{ width: '100%', maxWidth: '800px' }}
        itemOne={
          <ReactCompareSliderImage
            style={{ height: '500px', width: '100%' }}
            src="https://i.postimg.cc/dVX36DCZ/chef-one.jpg"
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            style={{ height: '500px', width: '100%' }}
            src="https://i.postimg.cc/KjJvMYFz/chef-two.jpg"
            alt="Image two"
          />
        }
      />
    </div>
  );
};

export default BannerSlider;
