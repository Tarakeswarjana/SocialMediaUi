import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import Sunset from "../screen short 1.png"
import sunset1 from "../sunset-g1b508fd90_1920.jpg"
import { useState } from "react";
import { useEffect } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";


const Post = (props) => {
  const [string, setString] = useState("");
  useEffect(() => {
    console.log(props.no)
    switch(props.no){
      case 1 :
        setString(Sunset)
        case 2 : 
        setString(sunset1)
    }
    console.log(props.no)
  }, []);
  
  
  return (
     
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="September 14, 2022"
      />
      
 
      <CardMedia
        component="img"
        height="20%"
        image={string}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>

  );
};

export default Post;