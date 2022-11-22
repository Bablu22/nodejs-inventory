const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDb = require("./utils/database");

const app = require("./app");

// database connection
connectDb();

// Routes
const productRoute = require("./routes/product.routes");
const brandRoute = require("./routes/brand.routes");
const categoryRoute = require("./routes/category.routes");
const storeRoute = require("./routes/store.routes");
const supplierRoute = require("./routes/supplier.routes");
const stockRoute = require("./routes/stock.routes");
const userRoute = require("./routes/user.routes");

app.use("/api/v1/product", productRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/auth", userRoute);

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
