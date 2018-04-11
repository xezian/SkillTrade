import React from 'react';
import { Modal } from 'react-materialize';
import './Modal.css';

export const ModalRegister = props => (
  <Modal
    header={props.header}
    trigger={props.trigger}
    className="modal modal-register"
    style={{ width: '50%', right: '-41%' }}
  >
    { props.children }
  </Modal>
);
