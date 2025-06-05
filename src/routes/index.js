const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    // console.log('Path: ',__dirname);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;