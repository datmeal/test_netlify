import React from 'react';
import scrolldownButton from '../img/scrolldown.svg';

const Scrolldown = () => {

  let pagePosition = 0,
      sectionSelector = 'section',
      scrollItems = document.querySelectorAll(sectionSelector),
      offsetTolerance = 30,
      pageMaxPosition = scrollItems.length - 1;
  
  const handleClick = () => {
    if(pagePosition+1 <= pageMaxPosition) {
      pagePosition++;
    }

    console.log(scrollItems);
    console.log(pageMaxPosition);
    console.log(pagePosition);
  }

  return (
    <div className="level">
      <div className="level-item">
        <button className="button" onClick={handleClick}>
          <img src={scrolldownButton} />
        </button>
      </div>
    </div>
  )
}

export default Scrolldown;