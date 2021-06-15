"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showFinish = exports.showTips = exports.showHeader = exports.showSparkles = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var path = tslib_1.__importStar(require("path"));
var gradient_string_1 = tslib_1.__importDefault(require("gradient-string"));
var getFileString = function (s) { return fs.readFileSync(s).toString(); };
var getRandomFileStringFromDir = function (dir) {
    var files = fs.readdirSync(dir).map(function (file) { return path.join(dir, file); });
    return getFileString(files[Math.floor(Math.random() * files.length)]);
};
var showSparkles = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var sparklesDir, fileOutput;
    return tslib_1.__generator(this, function (_a) {
        sparklesDir = './src/templates/sparkles';
        fileOutput = getRandomFileStringFromDir(sparklesDir);
        console.log(gradient_string_1.default.retro.multiline(fileOutput));
        return [2 /*return*/];
    });
}); };
exports.showSparkles = showSparkles;
var showHeader = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var headersDir, fileOutput;
    return tslib_1.__generator(this, function (_a) {
        headersDir = "./src/templates/banners";
        fileOutput = getRandomFileStringFromDir(headersDir);
        console.log(gradient_string_1.default.fruit.multiline(fileOutput));
        return [2 /*return*/];
    });
}); };
exports.showHeader = showHeader;
var showTips = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var tipsDir, fileOutput;
    return tslib_1.__generator(this, function (_a) {
        tipsDir = './src/templates/tips';
        fileOutput = getRandomFileStringFromDir(tipsDir);
        console.log(gradient_string_1.default.cristal(fileOutput));
        return [2 /*return*/];
    });
}); };
exports.showTips = showTips;
var showFinish = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var finishDir, fileOutput;
    return tslib_1.__generator(this, function (_a) {
        finishDir = './src/templates/finish';
        fileOutput = getRandomFileStringFromDir(finishDir);
        console.log(gradient_string_1.default.teen.multiline(fileOutput));
        return [2 /*return*/];
    });
}); };
exports.showFinish = showFinish;
