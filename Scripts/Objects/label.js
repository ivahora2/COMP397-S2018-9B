var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var label = /** @class */ (function (_super) {
        __extends(label, _super);
        //constructor
        /**
         *
         * @param text
         * @param fontSize
         * @param fontFamily
         * @param fontColor
         * @param x
         * @param y
         * @param isCentered
         */
        function label(text, fontSize, fontFamily, fontColor, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, text, fontSize + " " + fontFamily, fontColor) || this;
            _this.isCentered = false;
            _this._initialize();
            if (_this.isCentered) {
                _this.regX = _this.halfWidth;
                _this.regY = _this.halfHeight;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        label.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.halfWidth = this.getBounds().width * 0.5;
            this.height = this.getBounds().height;
            this.halfHeight = this.getBounds().height * 0.5;
        };
        label.prototype.Update = function () {
        };
        label.prototype.Start = function () {
        };
        label.prototype.Main = function () {
        };
        return label;
    }(createjs.Text));
    objects.label = label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map