# -*- coding: utf-8 -*-
{
    'name': "Pos barcode parser",

    'author': 'Kitworks Systems',
    'website': 'https://kitworks.systems/',

    'category': 'Extra Tools',
    'license': 'OPL-1',
    'version': '16.0.1.0.1',
    'depends': [
        'barcodes',
    ],
    'assets': {
        'web.assets_backend': [
            'kw_pos_barcode_parser/static/src/**/*',
        ],
    },
    'installable': True,
}
