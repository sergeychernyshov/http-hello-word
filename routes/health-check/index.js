const express = require("express");
const router = express.Router({});
router.get('/', async (_req, res, _next) => {

    const health_check = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(health_check);
    } catch (error) {
        health_check.message = error;
        res.status(503).send();
    }
});
module.exports = router;