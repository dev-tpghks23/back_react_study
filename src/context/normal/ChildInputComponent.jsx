import React, { useContext } from 'react';
import { FontSizeContext } from './FontSizeContext';

const ChildInputComponent = () => {
  const {state, actions} = useContext(FontSizeContext)

  return (
    <div>
      <p style={{fontSize: state.fontSize}}>😎</p>
      <input onKeyDown={() => actions.setFontSize("")} type="text" placeholder="폰트 사이즈를 입력하세요" />
    </div>
  );
};

export default ChildInputComponent;