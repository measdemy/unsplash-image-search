import { useState, useEffect } from 'react';
import { Wrapper, Button } from './style';
import DisplayPhotos from '../DisplayPhotos';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const SearchPhoto = () => {
  const isLocalData = localStorage.getItem('history');
  const localData = isLocalData ? JSON.parse(isLocalData) : [];

  const [text, setText] = useState('');
  const [localText, setLocalText] = useState(localData);
  const [photos, setPhotos] = useState([]);

  const handleOnChange = ({ target }) => {
    target.value !== 0 ? setText(target.value) : setText(target.innerHTML);
  };

  const fetchData = async (text) => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}`
      );

      const res = await data.json();

      setPhotos(res);
      setLocalText(() => {
        return !localText.includes(text) ? [text, ...localText] : localText;
      });
    } catch (error) {
      console.log('Fetch error: ', error);
    }
  };

  const handleSearch = () => {
    fetchData(text);
  };

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(localText));
  }, [localText]);

  return (
    <>
      <Wrapper>
        <Stack sx={{ width: 500 }}>
          <Autocomplete
            value={text}
            id="search"
            disableClearable
            options={localText.slice(0, 5).map((option) => option)}
            onChange={(e) => handleOnChange(e)}
            renderInput={(params) => (
              <TextField
                onChange={(e) => handleOnChange(e)}
                {...params}
                label="Search Image"
              />
            )}
          />
        </Stack>
        <Button onClick={handleSearch}>Search</Button>
      </Wrapper>
      <DisplayPhotos {...photos} />
    </>
  );
};

export default SearchPhoto;
