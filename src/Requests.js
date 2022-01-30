const APY_KEY = "26cedb780e2fe93c9340b36dac2c268c";

const requests = {
  fethTrending: `/trending/all/week?api_key=${APY_KEY}&language=en-US`,
  upcaming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APY_KEY}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${APY_KEY}&language=en-US&page=1`,
};

export default requests;
