import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectModals } from 'redux/selectors/selectModals';
import { hideModal } from 'redux/slice/modalSlice';

import Modals from '../index';

import styles from './ModalProvider.module.scss';

const rootContainer = document.getElementById('root-modal');

function ModalProvider() {
  const { modalName, modalProps } = useSelector(selectModals);
  const dispatch = useDispatch();

  const Modal = Modals[modalName];

  if (!Modal) {
    return null;
  }

  const hideModalHandler = (event) => {
    const isBackdrop = event.target.getAttribute('data-backdrop');

    if (isBackdrop) {
      dispatch(hideModal());
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={hideModalHandler} data-backdrop>
      <div className={styles.modal}>
        <Modal {...modalProps} />
      </div>
    </div>,
    rootContainer
  );
}

export default ModalProvider;
