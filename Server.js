
const app = require('express')();
const cors = require("cors");

app.use(cors())
app.use(require('express').json());


// routes middleware
app.use('/api/user', require('./routes/user'));
app.use('/api/title', require('./routes/titles'));
app.use('/api/membership', require('./routes/membership'));
app.use('/api/radio', require('./routes/radio'));


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})

