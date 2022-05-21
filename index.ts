/**
 *
 * Unsubscribe all subscriptions and make component variables undefined in the component automatically
 * Note: All subscriptions should be added to the variable "subscriptions" for auto subscriptions
 * or subscriptions should be stored in the component variable
 *
 */
export function AutoUnSubscribe() {
  return function (constructor: any) {
    const componentNgOnDestroy = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {

      // unsubscribe the subscription Which added to the "autoUnSubscriptions" variable
      this.autoUnSubscriptions?.unsubscribe();
      for (const prop in this) {
        const isSubscription = typeof this[prop].unsubscribe === "function";
        if (isSubscription) {
          this[prop].unsubscribe();
          this[prop] = undefined;
        } else {
          this[prop] = undefined;
        }
      }

      // Call component ngOnDestroy
      componentNgOnDestroy?.apply();
    };
  };
}
