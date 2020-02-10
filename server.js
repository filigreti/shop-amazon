const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// app.use(morgan('dev'));
// app.use(express.json())
// app.use(cors);

app.get("/", (req, res) => {
  res.json({
    data: 'we here nigga'
  });
});

app.listen(5005, () => {
  console.log(`Server running on 5005`);
});
