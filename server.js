const express=require("express");
const mainRoute =require('./Router/route');
const PORT =3000;
const app = express();

app.use(mainRoute);


app.listen(PORT)