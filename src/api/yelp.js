import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer wm2LlX8rQGJsSqJX8v6mG0Qx5ElO3a-c1hzRRq42HJlswrj3htGUisapQurU8IZrPGopcwhUJN5VxGb_BTk2PI7vEjdKtjt8aOGQyH1cYA-K8cho5TtVVjKKnhuvYXYx',
  },
});
