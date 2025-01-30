import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Typography variant="h5">Hello!</Typography>
      <Button variant={'contained'} onClick={() => setCount(count + 1)}>Counter at: {count}</Button>
    </Box>
  );
}

export default App;
