import {Converter} from '../converters/converter';
import {FahrenheitCelsiusConverter} from './f-c.converter';
import {MilesKmConverter} from './mile-km.converter';
import {YardsMConverter} from './yard-m.converter';
import {PoundsKgConverter} from './pound-kg.converter';
import {GallonsLConverter} from './gallon-l.converter';
import {OuncesGConverter} from './ounce-g.converter';

export var converters = [
    {
        name: 'f-c',
        converter: FahrenheitCelsiusConverter
    },
    {
        name: 'miles-km',
        converter: MilesKmConverter
    },
    {
        name: 'yards-m',
        converter: YardsMConverter
    },
    {
        name: 'pounds-kg',
        converter: PoundsKgConverter
    },
    {
        name: 'gallons-l',
        converter: GallonsLConverter
    },
    {
        name: 'ounces-g',
        converter: OuncesGConverter
    }
];
