import { SnippedDetailedItemModel } from './snipped-detailed-item.model';
import { StatisticsItemModel } from '../../core/models/statistics-item.model';
export class DetailedItemModel {
        public etag: string;
        public id: string;
        public kind: string;
        public snippet: SnippedDetailedItemModel;
        public statistics: StatisticsItemModel;
    }
