import { useState, useEffect } from 'react';
import { Wrapper, Button } from './style';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate, useParams } from 'react-router-dom';

const SearchPhoto = () => {
  const { id: slug } = useParams();
  const navigate = useNavigate();
  const isLocalData = localStorage.getItem('history');
  const localData = isLocalData ? JSON.parse(isLocalData) : [];

  const [text, setText] = useState('');
  const [localText, setLocalText] = useState(localData);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleOnChange = ({ target }) => {
    target.value !== 0 ? setText(target.value) : setText(target.innerHTML);
  };

  const handleSearch = () => {
    /* save search queries in local storage */
    setLocalText(() => {
      return !localText.includes(text) ? [text, ...localText] : localText;
    });
    setIsUpdated(true);
  };

  useEffect(() => {
    /* wait until state updated to redirect */
    if (isUpdated) {
      navigate(`/${text}`);
    }
    setIsUpdated(false);
    localStorage.setItem('history', JSON.stringify(localText));
  }, [isUpdated]);

  return (
    <>
      <Wrapper>
        <Stack sx={{ width: 500 }}>
          <Autocomplete
            value={slug}
            id="search"
            disableClearable
            /* suggest last 5 search in the search input */
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
    </>
  );
};

export default SearchPhoto;
