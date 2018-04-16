import React from 'react';
import { Modal } from 'react-materialize';
import './Modal.css';

export const ModalLogin = props => (
  <Modal
    header={props.header}
    trigger={props.trigger}
    className="modal"
  >
    { props.children }
  </Modal>
);
