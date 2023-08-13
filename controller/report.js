const Report = require('../models/report');


module.exports.createReport = async function (req, res) {
    try {
        let report = await Report.find(req.body);
        if (report && report.length > 0) {
            return res.send(report);
        } else {
            report = new Report(req.body);
            let reportCreated = await report.save();
            return res.send(reportCreated);
        }


    } catch (error) {
        return res.status("report Not generated !!");
    }
}
// find on the id
module.exports.allReport = async function (req, res) {
    try {
        const patientId = req.params.id;
        const allReport = await Report.find({ patientId: patientId });
        return res.send(allReport);
    } catch (error) {
        return res.status("error");
    }
}
//search on status
module.exports.status = async function (req, res) {
    try {
        const status = req.params.status;
        const result = await Report.find({ status: status });
        return res.status(200).json ({
            results: result,

        });
    } catch (error) {
        return res.send(error);
    }
}