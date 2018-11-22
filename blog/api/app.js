const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const posts = [
  {id: 1, title: "tytuł", text: "Lorem ipsum"},
  {id: 2, title: "tytuł2", text: "Lorem ipsum2"},
  {id: 3, title: "tytuł3", text: "Lorem ipsum3"}
];

app.get('/api/posts', (req, res) => {
  res.send(posts);
});

app.get('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  res.send(post);
});

app.post('/api/posts', (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.name,
    text: req.body.text
  };
  posts.push(post);
  res.send(post);
});

app.put('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  post.title = req.body.title;
  post.text = req.body.text;
  res.send(post);
});

app.delete('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  const index = posts.indexOf(posts);
  posts.splice(index, 1, null);
  res.send(post);
});

app.listen(process.env.PORT || 3000, function () {
  console.info('Server is running')
});
