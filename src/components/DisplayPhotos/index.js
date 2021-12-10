import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Article, Description } from './style';

const DisplayPhotos = ({ slug }) => {
  const [photos, setPhotos] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${slug}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      );

      const res = await data.json();

      setPhotos(res);
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [slug]);
  const { results } = photos;

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
  slug: PropTypes.string,
};

export default DisplayPhotos;
