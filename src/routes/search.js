import DisplayPhotos from '../components/DisplayPhotos';
import Main from '../components/Main';
import { useParams } from 'react-router-dom';
const Search = () => {
  let { id: slug } = useParams();

  return (
    <div>
      <Main />
      <DisplayPhotos slug={slug} />
    </div>
  );
};

export default Search;
