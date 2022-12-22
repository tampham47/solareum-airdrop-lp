import styled from 'styled-components';
import { UniversalButton } from './UniversalButton';

export const ScButton = styled(UniversalButton)`
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.32);
  border: 1px solid #ff33ff;
  border-radius: 8px;
  height: 56px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 8px 24px;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.3s;
  font-weight: bold;
  min-width: 240px;
  background: #ff33ff;
  cursor: pointer;

  &:hover {
  }

  &:disabled {
    filter: grayscale(1);
  }
`;
