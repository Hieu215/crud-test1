import { useState } from 'react';
import styles from './PreviewImage.module.scss';
import classNames from 'classnames/bind';

const cl = classNames.bind(styles);
function PreviewImage({ file }) {
  const [preview, setPreview] = useState({});
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <div className={cl('container')}>
      <img style={{ width: '300px' }} src={preview} alt="error" />
    </div>
  );
}

export default PreviewImage;
