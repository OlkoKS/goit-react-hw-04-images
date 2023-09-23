import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ListComponent, ContainerElement } from './ImageGallery.styled';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ContainerElement>
      <ListComponent className="gallery">
        {images.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            tags={tags}
            onOpenModal={onOpenModal}
          />
        ))}
      </ListComponent>
    </ContainerElement>
  );
};
