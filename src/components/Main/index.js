import { Title } from './style';
import SearchPhoto from '../SearchPhoto';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <Title>
        <Link to="/">Unsplash Image Search</Link>
      </Title>
      <SearchPhoto />
    </>
  );
};

export default Main;
