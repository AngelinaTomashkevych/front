import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './EntranceHeader.module.scss';

function EntranceHeader() {
  const setClassName = (options) => {
    const { isActive } = options;

    return classNames(styles.link, {
      [styles.link_active]: isActive,
    });
  };

  return (
    <div>
      <NavLink to="/login" className={setClassName}>
        Login
      </NavLink>
      <NavLink to="/signup" className={setClassName}>
        Registration
      </NavLink>
    </div>
  );
}

export default EntranceHeader;
