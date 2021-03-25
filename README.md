# React Movie Watchlist App (with React Hooks and Context API)

- npx create-react-app app-name
- npm react-router-dom
- importing font-awesome cdn

### Initial setup

1. Removing unnecessary files
2. Cleanup
3. Importing all css in one go

### Components

1. App component
2. Header component
3. Watchlist component
4. Watched component
5. Add component
6. ResultCard component
7. MovieCard component
8. MovieControls component

### App component

1. Rendering header component as child component
2.

### Header component

### Add Component

1. Creating input form to search movie results
2. Wiring it up to onChange event handler
3. Conditional rendering for every movie item and passing them to result card child component as props

### Data Loading

1. Accessing the movie database via https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}

### Result Card component

1. Rendering images from movie props
2. Rendering title and release date
3.

### Watchlist component

1. Importing global context state
2.

### GlobalState context

1. addMovieToWatchlist
2. removeMovieFromWatchlist

### MovieControls component

1. Importing useContext hook
2. Importing GlobalContext to use removemovie event handler

### Watched component

1. Importing useContext hook
2. Importing GlobalContext to use removemovie event handler
