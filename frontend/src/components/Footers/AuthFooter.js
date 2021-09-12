import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import componentStyles from "assets/theme/components/auth-footer.js";

const useStyles = makeStyles(componentStyles);

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" width="100%" paddingTop="1rem">
      <Container
        component={Box}
        maxWidth="xl"
        display="flex!important"
        alignItems="center"
        classes={{
          root:
            classes.justifyContentCenter + " " + classes.flexDirectionColumn,
        }}
      >
        <Grid item xs={12} xl={6}>
          <div className={classes.copyrightWrapper}>
            © {new Date().getFullYear()}{" "}
            <a
              className={classes.copyrightLink}
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              One Stop Shop
            </a>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          xl={6}
          component={Box}
          display="flex"
          justifyContent="flex-end"
          classes={{
            root:
              classes.justifyContentCenter + " " + classes.flexDirectionColumn,
          }}
        >
          <Box
            component={List}
            display="flex"
            justifyContent="center"
            alignItems="center"
            classes={{
              root:
                classes.justifyContentCenter +
                " " +
                classes.flexDirectionColumn,
            }}
          >
            <ListItem
              component="a"
              href=""
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              One Stop Shop
            </ListItem>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
