import React from 'react';
import { Modal } from 'react-materialize';
import './Modal.css';

export const ModalRegister = props => (
  <Modal
    header={props.header}
    trigger={props.trigger}
    className="modal modal-register"
  >
    { props.children }
  </Modal>
);
