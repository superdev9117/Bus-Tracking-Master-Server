/**
 * Created by root on 6/17/16.
 */


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

exports.isNumeric = isNumeric