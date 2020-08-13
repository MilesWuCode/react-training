module.exports = {
  posts: [
    { id: 1, name: "php", date: new Date("2017-07-01") },
    { id: 2, name: "javascript", date: new Date("2017-07-02") },
  ],
  comments: [
    { id: 1, post_id: 1, name: "laravel", date: new Date("2017-07-03") },
    { id: 2, post_id: 1, name: "nova", date: new Date("2017-07-04") },
    { id: 3, post_id: 2, name: "vue", date: new Date("2017-07-05") },
    { id: 4, post_id: 2, name: "react", date: new Date("2017-07-06") },
  ],
};
