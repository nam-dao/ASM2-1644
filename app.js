var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var AdminRouter = require("./routes/Admin");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var PCRouter = require("./routes/PC");
var PhoneRouter = require("./routes/Phone");

var app = express();

var mongoose = require("mongoose");
var uri = "mongodb+srv://namdao:12345678a@asm2.kfn0w2s.mongodb.net/asm";
mongoose.set("strictQuery", false);
mongoose
    .connect(uri)
    .then(() => console.log("Connect to DB succeed !"))
    .catch((err) => console.log(err));

var bodyParser = require("body-parser");

var hbs = require("hbs");
hbs.registerHelper("dateFormat", require("handlebars-dateformat"));

app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/PC", PCRouter);
app.use("/admin", AdminRouter);
app.use("/Phone", PhoneRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(process.env.PORT || 3001);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
