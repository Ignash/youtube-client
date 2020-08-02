import { SnippedItemModel } from './snipped-item.model';
import { StatisticsItemModel } from './statistics-item.model';

export class SearchItemModel {
    kind: string;
    etag: string;
    id: string;
    snippet: SnippedItemModel;
    statistics: StatisticsItemModel
}
