import { SnippedItemModel } from './snipped-item.model';
import { StatisticsItemModel } from './statistics-item.model';

export class SearchItemModel {
    public kind: string;
    public etag: string;
    public id: string;
    public snippet: SnippedItemModel;
    public statistics: StatisticsItemModel;
}
