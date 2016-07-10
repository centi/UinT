import {Converter} from '../converters/converter';
import {FahrenheitCelsiusConverter} from './fahrenheit-celsius.converter';
import {MilesKmConverter} from './mile-km.converter';
import {FeetMConverter} from './foot-cm.converter';
import {InchesCmConverter} from './inch-cm.converter';
import {YardsMConverter} from './yard-m.converter';
import {PoundsKgConverter} from './pound-kg.converter';
import {GallonsLConverter} from './gallon-l.converter';
import {OuncesGConverter} from './ounce-g.converter';

export var convertersList = [
    FahrenheitCelsiusConverter,
    MilesKmConverter,
    FeetMConverter,
    InchesCmConverter,
    YardsMConverter,
    PoundsKgConverter,
    GallonsLConverter,
    OuncesGConverter
];
