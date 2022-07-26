import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Header/Header';

const cl = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cl('warper')}>
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
