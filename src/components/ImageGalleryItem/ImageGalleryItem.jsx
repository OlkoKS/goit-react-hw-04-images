import { ItemComponent, ImageCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onOpenModal,
}) => {
  return (
    <ItemComponent
      className="gallery-item"
      onClick={() => onOpenModal(largeImageURL, tags)}
    >
      <ImageCard src={webformatURL} alt={tags} />
    </ItemComponent>
  );
};
