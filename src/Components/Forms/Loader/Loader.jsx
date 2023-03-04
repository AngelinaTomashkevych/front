import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

import { STYLE, LOADER_SIZE } from './constants';

import styles from './Loader.module.scss';

function Loader(props) {
  const { size } = props;

  const style = STYLE[size];

  return (
    <div className={classNames(styles.wrapper, [styles[`wrapper_${size}`]])}>
      <Oval
        color="#4fa94d"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        wrapperClass={styles.loader}
        strokeWidth={2}
        strokeWidthSecondary={2}
        {...style}
      />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.oneOf(Object.values(LOADER_SIZE)),
};

Loader.defaultProps = {
  size: 'small',
};

export default Loader;
