const newsRouter = require("./news");
const siteRouter = require("./site");
const userRouter = require("./user");
const errorRouter = require("./error");
const logRouter = require("./log");
const accountRouter = require("./account");
const productRouter = require('./product');
const customerRouter = require("./customer");
const reportRouter = require("./report");

function route(app){
    app.use("/user", userRouter);
    app.use("/account", accountRouter);
    app.use("/customer", customerRouter);
    app.use("/product", productRouter);
    app.use("/report", reportRouter);
    app.use("/log", logRouter);
    app.use("/news", newsRouter);
    app.use("/", siteRouter);
    app.use(errorRouter);

    // app.get("/", (req, res, next) => {
    
    //     return res.render("home");
    // });
    
    // app.get("/home", (req, res, next) => {
    //     return res.render("student");
    // })
}

module.exports = route;