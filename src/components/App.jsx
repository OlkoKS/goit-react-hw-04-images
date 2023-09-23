import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { GalleryModal } from './Modal/GalleryModal';

import { getImages } from 'services/getPixabayAPI';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [tag, setTag] = useState('');

  // componentDidUpdate(_, prevState) {
  //   const { page, query } = this.state;
  //   if (page !== prevState.page || query !== prevState.query) {
  //     this.getPhotos(query, page);
  //   }
  // }

  useEffect(() => {
    const getPhotos = async (query, page) => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await getImages(query, page);
        if (hits.length === 0) {
          return alert(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        setImages(prev => [...prev, ...hits]);
        setTotal(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!query) return;
    getPhotos(query, page);
  }, [query, page]);

  const onSubmit = query => {
    // this.setState({ query, page: 1, images: [] });
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const onClickLoad = () => {
    setPage(prev => prev + 1);
  };

  const onOpenModal = (largeImage, tag) => {
    // this.setState({ isOpenModal: true, largeImage, tag });
    setIsOpenModal(true);
    setLargeImage(largeImage);
    setTag(tag);
  };

  const onCloseModal = () => {
    // this.setState({ isOpenModal: false, largeImage: null, tag: '' });
    setIsOpenModal(false);
    setLargeImage(null);
    setTag('');
  };

  // const { isLoading, error, images, isOpenModal, largeImage, tag, total } =
  //   this.state;
  const allPages = total / images.length;
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onOpenModal={onOpenModal} />
      )}
      {error && <p>Something went wrong...</p>}
      {allPages > 1 && !isLoading && images.length > 0 && (
        <Button onClick={onClickLoad} />
      )}
      <GalleryModal
        onCloseModal={onCloseModal}
        isOpenModal={isOpenModal}
        largeImage={largeImage}
        tag={tag}
      />
    </>
  );
};
