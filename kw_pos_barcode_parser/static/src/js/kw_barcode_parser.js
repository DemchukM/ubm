odoo.define('kw_pos_barcode_parser.BarcodeParser', function (require) {
"use strict";
const BarcodeParser = require('barcodes.BarcodeParser');

BarcodeParser.include({
    parse_barcode: function(){
        const res = this._super.apply(this, arguments);
        if (res.base_code.length == 12) {
            const oldCode = res.base_code;
            const code = oldCode.slice(0,2);
            const product_id = oldCode.slice(2,7);
            const weight = parseFloat(oldCode.slice(7,12));
            const newCode = `${code}${product_id}00000`;
            res.base_code = newCode;

            if (weight > 0) {
                res.value = weight / 1000;
                res.type = 'weight';
            }
        }
        return res;
    },
});

return {
    BarcodeParser,
};

});