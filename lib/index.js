"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yargs_1 = tslib_1.__importDefault(require("yargs"));
var source_json_1 = tslib_1.__importDefault(require("./source.json"));
var hashmap_json_1 = tslib_1.__importDefault(require("./hashmap.json"));
var banner_1 = require("./utils/banner");
var clipboardy = tslib_1.__importStar(require("clipboardy"));
var checkTag = function (check) {
    var tags = source_json_1.default.list.filter(function (_a) {
        var t = _a.tag;
        return t.includes(check.toLowerCase());
    });
    return tags.length > 0 ? tags[0].yan[Math.floor(Math.random() * tags[0].yan.length)] : null;
};
var start = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var options, copy, specimen, shortcut, output, final;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, yargs_1.default(process.argv.slice(2)).argv];
            case 1:
                options = _a.sent();
                copy = !!options.c;
                if (!copy) {
                    banner_1.showSparkles();
                    banner_1.showHeader();
                    banner_1.showSparkles();
                }
                specimen = (copy ? options.c : options._[0]);
                shortcut = checkTag(specimen);
                output = tslib_1.__spreadArray([], tslib_1.__read(specimen.toLowerCase())).map(function (i) {
                    var hash = hashmap_json_1.default.filter(function (_a) {
                        var _b = tslib_1.__read(_a, 2), l = _b[0], h = _b[1];
                        return l === i;
                    });
                    return hash[0][1];
                }).join("");
                final = shortcut ? shortcut : output;
                console.log(final);
                if (copy)
                    clipboardy.writeSync(final);
                copy ? banner_1.showFinish() : banner_1.showTips();
                return [2 /*return*/];
        }
    });
}); };
start();
