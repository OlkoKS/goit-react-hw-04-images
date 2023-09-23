import { styled } from 'styled-components';

const ListComponent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const ContainerElement = styled.div`
  width: 1158px;
  margin: 24px auto 0;
  padding: 24px;
`;

export { ListComponent, ContainerElement };
