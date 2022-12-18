import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.div`
  max-width: 1140px;
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  margin-bottom: 6em;

  @media only screen and (min-width: 1024px) {
    margin-top: 4em;
    margin-bottom: 8em;
  }
`;
