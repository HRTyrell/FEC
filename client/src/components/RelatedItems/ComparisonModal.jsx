import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';





const customStyles = {
  overlay: {
    pointerEvents: 'none',
    background: 'none'

  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ComparisonModal = ({modalIsOpen}) => {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }


  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>This is a comparison modal</h2>


      </Modal>
    </div>
  );
}

export default ComparisonModal;