"use strict";
exports.__esModule = true;
exports.AutoUnSubscribe = void 0;
/**
 *
 * Unsubscribe all subscriptions and make component variables undefined in the component automatically
 * Note: All subscriptions should be added to the variable "subscriptions" for auto subscriptions
 * or subscriptions should be stored in the component variable
 *
 */
function AutoUnSubscribe() {
    return function (constructor) {
        var componentNgOnDestroy = constructor.prototype.ngOnDestroy;
        constructor.prototype.ngOnDestroy = function () {
            var _a;
            // unsubscribe the subscription Which added to the "autoUnSubscriptions" variable
            (_a = this.autoUnSubscriptions) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            for (var prop in this) {
                var isSubscription = typeof this[prop].unsubscribe === "function";
                if (isSubscription) {
                    this[prop].unsubscribe();
                    this[prop] = undefined;
                }
                else {
                    this[prop] = undefined;
                }
            }
            // Call component ngOnDestroy
            componentNgOnDestroy === null || componentNgOnDestroy === void 0 ? void 0 : componentNgOnDestroy.apply();
        };
    };
}
exports.AutoUnSubscribe = AutoUnSubscribe;
