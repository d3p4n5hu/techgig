import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import HomeStyles from "../styles/Home";

interface HomeProps {
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const initData = [...new Array(50)].map((item, index) => index + 1);
let timeoutId: NodeJS.Timeout;

const Home = ({ setAuth }: HomeProps) => {
  const classes = HomeStyles();
  const [data, setData] = useState(initData);
  const history = useHistory();

  const onListScroll = (e: any) => {
    // Generate data
    const scrollTop = e.target.scrollTop;
    const maxScrollTop = e.target.scrollHeight - e.target.clientHeight;

    const percentage = Math.floor((scrollTop / maxScrollTop) * 100);
    if (percentage > 90) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setData((data) => {
          const lastIndex = data[49];
          return [
            ...data.slice(20),
            ...[...new Array(20)].map((item, index) => lastIndex + index + 1),
          ];
        });
      }, 100);
    } else if (percentage === 0) {
      clearTimeout(timeoutId);
      setData(initData);
    } else if (percentage < 10 && data[0] !== 1) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setData((data) => {
          const firstIndex = data[0];
          return [
            ...[...new Array(20)].map((item, index) => firstIndex - 20 + index),
            ...data.slice(0, 30),
          ];
        });
      }, 100);
    }
  };

  const onLogoutHandler = () => {
    setAuth(false);
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Box className={classes.welcome} mb={8}>
          <Typography>Welcome!</Typography>
          <Button onClick={onLogoutHandler}>Sign out</Button>
        </Box>
        <Box className={classes.root} width="100%" onScroll={onListScroll}>
          <List>
            {data.map((item) => (
              <ListItem key={item} disableGutters>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`Item ${item}`}
                  secondary="This is an item"
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </div>
    </Container>
  );
};

export default Home;
