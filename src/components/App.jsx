import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { GalleryModal } from './Modal/GalleryModal';

import { getImages } from 'services/getPixabayAPI';

export class App extends Component {
  state = {
    query: '',
    images: [],
    total: 0,
    page: 1,
    error: null,
    isLoading: false,
    isOpenModal: false,
    largeImage: null,
    tag: '',
  };

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await getImages(query, page);
      if (hits.length === 0) {
        return alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        // loadMore: this.state.page < Math.ceil(totalHits / 12),
        total: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onClickLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  onOpenModal = (largeImage, tag) => {
    this.setState({ isOpenModal: true, largeImage, tag });
  };

  onCloseModal = () => {
    this.setState({ isOpenModal: false, largeImage: null, tag: '' });
  };

  render() {
    const { isLoading, error, images, isOpenModal, largeImage, tag, total } =
      this.state;
    const allPages = total / images.length;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        )}
        {error && <p>Something went wrong...</p>}
        {allPages > 1 && !isLoading && images.length > 0 && (
          <Button onClick={this.onClickLoad} />
        )}
        <GalleryModal
          onCloseModal={this.onCloseModal}
          isOpenModal={isOpenModal}
          largeImage={largeImage}
          tag={tag}
        />
      </>
    );
  }
}
