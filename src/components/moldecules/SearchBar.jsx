import React, { useState, useCallback } from "react";
import { Box, IconButton, InputAdornment } from "@mui/material";
import AInput from "../atoms/AInput";
import AButton from "../atoms/AButton";
import AIcon from "../atoms/AIcon";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { debounce } from "lodash";

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  icon = SearchIcon,
  buttonVariant = "contained",
  buttonColor = "primary",
  buttonSize = "medium",
  maxWidth = "400px",
  gap = 2,
  onChange,
  onKeyPress,
  showClearButton = true,
  debounceDelay = 300,
}) => {
  const [query, setQuery] = useState("");

  const debouncedChangeHandler = useCallback(
    debounce((value) => {
      if (onChange) onChange(value);
    }, debounceDelay),
    []
  );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    debouncedChangeHandler(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && onSearch) {
      onSearch(query);
    }
    if (onKeyPress) {
      onKeyPress(event);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onChange) onChange("");
  };

  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        alignItems: "center",
        gap,
        width: "100%",
        maxWidth,
      }}
    >
      <AInput
        label={placeholder}
        fullWidth
        size="large"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment:
            showClearButton && query ? (
              <InputAdornment position="end">
                <IconButton onClick={handleClear} size="small">
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
      <AButton
        variant={buttonVariant}
        color={buttonColor}
        size={buttonSize}
        onClick={() => onSearch(query)}
        sx={{
          minWidth: "40px",
          padding: "6px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AIcon name={icon} size="large" />
      </AButton>
    </Box>
  );
};

export default SearchBar;
