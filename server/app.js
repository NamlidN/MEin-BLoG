import express from 'express';
import cors from 'cors';
import multer from 'multer';  // packages um bilder hochzuladen bzw. um forms auszulesen
import morgan from 'morgan'; // loggin middleware
const app = express();
const PORT = 9999;

const upload = multer({dest: './public'})

const posts = [{title: 'Der Body' ,text:"legs"},{}]

app.use(cors())

app.use('/public', express.static('./public'));

app.get("/api/posts", (_, res) => {;
    res.json(posts)
})
app.post("/api/posts", upload.single('postpic'), (req, res) => {
    const post = {
        title: req.body.title,
        text: req.body.text,
        path: req.file.path

        }
        posts.push(post)
        res.status(200).end()
})

app.listen(PORT, () => console.log('Dieser Server läuft auf Port:', PORT))

