import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Article, Description } from './style';

const DisplayPhotos = ({ results }) => {
  return (
    results !== undefined && (
      <Container>
        {results.map((photo, id) => {
          const { urls, user } = photo;
          return (
            <Article key={id}>
              <Image src={urls.regular} alt="photo" />
              <Description>
                Photo by <a href={user.links.html}>{photo.user.name}</a> on{' '}
                <a href="https://unsplash.com">Unsplash</a>
              </Description>
            </Article>
          );
        })}
      </Container>
    )
  );
};

DisplayPhotos.propTypes = {
  results: PropTypes.array,
};

export default DisplayPhotos;
