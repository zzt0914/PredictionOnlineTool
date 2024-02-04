const express = require('express');
const multer = require('multer');
const cors = require('cors');
const dummyData = require('./dummyData');
const app = express();
const upload = multer({ dest: 'uploads/' });


app.use(cors());
app.post('/process', upload.single('file'), (req, res) => {
    // const { string1, string2 } = req.body;
    const length = req.body.length;
    const allele = req.body.allele;

    const filePath = req.file.path;
    console.log(filePath, length, allele);

    res.send(dummyData);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
