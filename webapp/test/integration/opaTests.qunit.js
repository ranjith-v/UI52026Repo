/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/ran/demoproj/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
