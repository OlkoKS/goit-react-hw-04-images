import { styled } from 'styled-components';

const ItemComponent = styled.li`
  width: calc((100% - 48px) / 3);

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
`;

const ImageCard = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { ItemComponent, ImageCard };
