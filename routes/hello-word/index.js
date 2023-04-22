const express = require("express");
const router = express.Router({});
router.get('/', async (_req, res, _next) => {
    res.setHeader('Content-Type', 'text/plain')
    res.statusCode = 200
    res.end('Hello World')
});

module.exports = router;