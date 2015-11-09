/*
 * regular-replace <https://github.com/hingisr/regular-replace
 *
 * Copyright (c) 2015, hingsir.
 * Licensed under the MIT License.
 */

var regularReplace = {
    thousands: function(number) {
        return number.replace(/^(\d+)(\.\d+)?$/, function($, $1, $2) {
            return $1.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,') + ($2 ? $2.replace(/\d{3}/g, '$&,').replace(/,$/, '') : '')
        })
    },
    bankCard: function(bankCard) {
        return bankCard.replace(/.{4}/g, '$& ');
    },
    mobilePhone: function(mobilePhone, separator) {
        separator = separator || " ";
        return mobilePhone.replace(/\d{3,4}(?=(\d{4})+$)/g, "$&" + separator);
    }
};
if (typeof module !== 'undefined' && module && typeof module.exports !== 'undefined') {
    module.exports = regularReplace;
} else {
    this.regularReplace = regularReplace;
}