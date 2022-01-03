import React, {useState} from 'react';

function ToggleText({ text }) {
  const [isShow, setIsShow] = useState(false);

  function toggle() {
    setIsShow(isOpened => !isOpened);
  }

  return (
    <div className="box">
    <button onClick={toggle}>Кнопка</button>
      {isShow && (
        <div className="boxContent">
          {text}
        </div>
      )}
    </div>
  );
}

export default ToggleText;