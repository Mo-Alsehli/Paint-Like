"use strict";
// Settings That Are Comming Directly From Spec Reporter Documentation For TypeScript.
// The Repo Link: "https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript".
// setting up some custom options for the display processor, then we create a new reporter.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
var CustomProcessor = /** @class */ (function (_super) {
    __extends(CustomProcessor, _super);
    function CustomProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomProcessor.prototype.displayJasmineStarted = function (info, log) {
        return "".concat(log);
    };
    return CustomProcessor;
}(jasmine_spec_reporter_1.DisplayProcessor));
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({
    spec: {
        displayStacktrace: jasmine_spec_reporter_1.StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
}));
