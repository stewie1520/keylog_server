const router = require("express").Router();
const { createLogsController } = require("../controllers/logs/create");

router.post('/', createLogsController);

module.exports = router;
