import { PageInfoResponseModel } from '../../core/models/page-info-response.model';
import { DetailedItemModel } from './detailed-item.model';

export class DetailedResponseModel {
    public etag: string;
    public items: DetailedItemModel[];
    public kind: string;
    public pageInfo: PageInfoResponseModel;
}
