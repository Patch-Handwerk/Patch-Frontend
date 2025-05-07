import { InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { SearchIcon } from 'lucide-react';
import * as React from 'react';

export interface SearchInputProps {
  // Define any props you want to pass to the component
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  disabled?: boolean;
}

const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  placeholder = 'Search...',
  onChange,
  id = 'search-input',
  label = '',
  disabled = false,
}) => {
  return (
    <TextField
      id={id}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      label={label}
      variant="outlined"
    />
  );
};

export default SearchInput;
