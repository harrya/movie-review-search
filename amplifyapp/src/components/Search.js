import * as React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Search = (props) => {
  const { setQuery, query, setApiKey, apiKey, handleSearch, isLoading } = props;

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Search movies..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TextField
        label="API key"
        variant="outlined"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      {isLoading && <Typography variant="h4">Loading...</Typography>}
    </Box>
  );
};

export default Search;
