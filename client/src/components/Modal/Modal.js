import React from 'react';
import { Modal } from 'react-materialize';
import './Modal.css';

const ModalBox = props => (
  <Modal
    header={props.header}
    trigger={props.trigger}
    className="modal"
  >
    { props.children }
  </Modal>
);

export default ModalBox;
