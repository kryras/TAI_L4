const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// const posts = [
//   {id: 1, title: "tytuł", text: "Lorem ipsum"},
//   {id: 2, title: "tytuł2", text: "Lorem ipsum2"},
//   {id: 3, title: "tytuł3", text: "Lorem ipsum3"}
// ];

const posts = [
  {
    id: 1,
    imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
    entryText: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 2,
    imgUrl: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
    entryText: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 3,
    imgUrl: 'https://www.apcurium.com/wp-content/uploads/2016/05/reactNe-300x266.png',
    entryText: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 4,
    imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
    entryText: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 5,
    imgUrl: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
    entryText: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 6,
    imgUrl: 'https://www.apcurium.com/wp-content/uploads/2016/05/reactNe-300x266.png',
    entryText: '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 7,
    imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
    entryText: '7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 8,
    imgUrl: 'https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a',
    entryText: '8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 9,
    imgUrl: 'https://www.apcurium.com/wp-content/uploads/2016/05/reactNe-300x266.png',
    entryText: '9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  },
  {
    id: 10,
    imgUrl: 'https://angular.io/assets/images/logos/angular/shield-large.svg',
    entryText: '10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tempus nulla. Etiam quis diam eget leo congue aliquet. Duis risus est, ullamcorper ac malesuada eu, ornare fringilla ipsum. Duis facilisis rhoncus fermentum. Duis sit amet mauris ut erat pellentesque vulputate id id diam. Donec imperdiet accumsan quam non lacinia. Donec eleifend leo dolor, nec tempus tortor placerat eu. '
  }
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
  console.log(req.body);
  const post = {
    id: posts.length + 1,
    imageUrl: req.body.imgUrl,
    entryText: req.body.entryText
  };
  posts.push(post);
  res.send(post);
});

app.put('/api/posts/:id', (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    res.status(404).send("Post NotFound");
  }
  post.imageUrl = req.body.imgUrl;
  post.entryText = req.body.entryText;
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
