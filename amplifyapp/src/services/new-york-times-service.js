export const search = (query, apiKey) => {
  const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${apiKey}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results) {
        return data.results.map((result) => ({
          title: result.display_title,
          review_link: result.link.url,
          image_url: result.multimedia?.src,
          summary: result.summary_short,
        }));
      }
      return [];
    });
};
