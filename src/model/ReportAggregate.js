function ReportAggregate(date, reports) {
    this.date = date;
    this.reports = reports;

    this.getDate = function () {
        return this.date;
    };

    this.getReports = function () {
        return this.reports;
    };

    this.addReport = function (report) {
        this.reports.push(report);
    };
}

export default ReportAggregate;
