import express from "express"
import body_parser from "body-parser"

let app = express()
let port = 3000

app.use(body_parser.urlencoded({extended:true}))

app.use(express.static(`public`))


// Sample data (replace this with a database in a real-world application)

let posts = [];

// Routes
app.get('/', (req, res) => {
    res.render('home.ejs', { posts });
});

app.get('/newpost', (req, res) => {
    res.render('newpost.ejs');
});

app.post('/post', (req, res) => {
    let title = req.body.title;
    let content = req.body.content
  
    posts.push({title, content});
  
    console.log(posts)
    res.render(`post_2.ejs`, {title, content, posts})
});
app.get('/post', (req, res) => {
    let title = req.body.title;
    let content = req.body.content
 
  
    console.log(posts)
    res.render(`post_2.ejs`, {title, content, posts})
});



app.post(`/delete/:id`, (req, res) => {
    let id = req.params.id;
    let post = posts[id]
  

    if (post){
        posts.splice(id, 1)
    }
    else{
        res.status(404).send('Post not found');
    }
    console.log(posts)
    res.redirect(`/`)
})


app.listen(port, () => {
    console.log(`Server is running on local port ${port}`);
});
