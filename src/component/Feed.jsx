import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post1 from "../data/Post1";
import Post2 from "../data/Post2";
import Post3 from "../data/Post3";
import Post4 from "../data/Post4";
import Post5 from "../data/Post5";
import Post6 from "../data/Post6";
import Post7 from "../data/Post7";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post1/>
          <Post2/>
          <Post3/>
          <Post4/>
          <Post5/>
          <Post6/>
          <Post7/>
        </>
      )}
    </Box>
  );
};

export default Feed;