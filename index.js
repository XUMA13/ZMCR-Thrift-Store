const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

//middleware
app.use(express.json({limit: "25mb"}));
app.use((express.urlencoded({limit: "25mb"})));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

//routes
const authRoutes = require('./src/users/user.route');
const productRoutes = require('./src/products/products.route');
const reviewRoutes = require('./src/reviews/reviews.router')




app.use('/api/auth', authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/reviews', reviewRoutes);


console.log()

main().then(()=> console.log("Mongodb is connected!")).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    app.get('/', (req, res) => {
        res.send('Hello ZMCR Thrift Store!')
      });
  }

app.get('/', (req, res) => {
  res.send('Hello ZMCR Thrift Store!')
})

//Z1dVbzaXrbrm58pI
//zymaspreeha

const discountCodes = {
  'DISCOUNT10': 0.1,
  'DISCOUNT20': 0.2
};

//discount
app.post('/apply-discount', (req, res) => {
  const { totalPrice, discountCode } = req.body;
  const discount = discountCodes[discountCode.toUpperCase()];
  if (discount) {
    const discountAmount = totalPrice * discount;
    const newTotal = totalPrice - discountAmount;
    res.json({ success: true, newTotal });
  } else {
    res.json({ success: false, message: 'Invalid discount code' });
  }
});

// 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



