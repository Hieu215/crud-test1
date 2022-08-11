import styles from './SearchUserStyle.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { searchUserStart } from '~/actions';

const cl = classNames.bind(styles);

function SearchUser() {
  const [keyWord, setKeyWord] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setKeyWord(value);
    dispatch(searchUserStart(keyWord));
  };

  const onSearch = () => {
    dispatch(searchUserStart(keyWord));
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className={cl('input-group')}>
        <input
          name="keyword"
          value={keyWord}
          type="text"
          className={cl('form-control')}
          placeholder="search user..."
          onChange={onInputChange}
          label="Search"
        />
        <MDBTooltip title="search" tag="span">
          <MDBIcon fas icon="search" className={cl('text-black', 'search')} size="lg" onClick={onSearch} />
        </MDBTooltip>
      </div>
    </div>
  );
}

export default SearchUser;
