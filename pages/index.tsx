import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text } from "@mantine/core"
import { app } from '../lib/firebaseClient';
const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1492998680170-81f8863d8d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][1],
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  wrapper: {
    marginLeft:20,
    marginRight:20,
  },
  
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.hero}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container}>
          <Title className={classes.title}>
            Taste from {' '}
            <Text component="span" color="red" inherit>
              Japan
            </Text>
          </Title>
          <Text className={classes.description} size="xl" mt="xl">
            Imbento is a Japanese fast food restaurant chain in the Philippines.
            These restaurants are specialized in serving beef
            bowl dishes.
          </Text>

          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} size="xl" radius="xl" className={classes.control}>
            Order Now
          </Button>
        </Container>
        
      </div>
      <div className={classes.wrapper}>
        <Container>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus dictum porttitor. Donec sagittis neque dui, maximus consectetur arcu tincidunt id. Nam auctor sollicitudin dignissim. Phasellus condimentum odio id ex mattis facilisis. In fringilla et nisl ut dignissim. Cras quis dui elementum elit fermentum tempor. Vivamus rutrum sit amet ex et lacinia. Cras sit amet massa placerat turpis rhoncus condimentum sit amet nec arcu. Sed vehicula sapien sit amet lectus tincidunt, ac accumsan quam interdum.</Text>
          {app ? <Text>Firebase is enabled</Text> : <Text>Firebase is disabled</Text>}
        </Container>
      </div>
    </div>
  );
}
