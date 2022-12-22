import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const ScRoot = styled.div`
  position: fixed;
  z-index: 40;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
`;

const ScMain = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 100vh;

  @media (min-width: 640px) {
    display: block;
    padding: 0;
  }
`;

const ScBackdropContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(20px);
`;

const ScCenterHelper = styled.span`
  display: none;

  @media (min-width: 640px) {
    display: inline-block;
    vertical-align: middle;
    height: 100vh;
  }
`;

const ScBody = styled.div`
  display: inline-block;
  overflow: hidden;
  transition-property: all;
  text-align: left;
  vertical-align: bottom;
  border-radius: 0.25rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transform: scaleX(1) scaleY(1);

  @media (min-width: 640px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    vertical-align: middle;
  }
`;

interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  body: JSX.Element;
  onClose?: () => void;
  closeOnBackdrop?: boolean;
  withConfetti?: boolean;
}

// Inspired by https://tailwindui.com/components/application-ui/overlays/modals
export const Modal = ({
  onClose,
  closeOnBackdrop = true,
  body,
  withConfetti,
}: ModalProps) => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (onClose && e.key === 'Escape') onClose();
    };
    window.addEventListener('keyup', handler);
    return () => window.removeEventListener('keyup', handler);
  }, [onClose]);

  let portalRoot = document.querySelector('#root');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'root');
    document.body.appendChild(portalRoot);
  }

  return ReactDOM.createPortal(
    <ScRoot aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {withConfetti ? <Confetti width={width} height={height} /> : null}

      <ScMain>
        <ScBackdropContainer
          aria-hidden="true"
          onClick={() => {
            if (!closeOnBackdrop) return;
            onClose && onClose();
          }}
        ></ScBackdropContainer>

        <ScCenterHelper aria-hidden="true">&#8203;</ScCenterHelper>

        <ScBody>{body}</ScBody>
      </ScMain>
    </ScRoot>,
    portalRoot
  );
};
