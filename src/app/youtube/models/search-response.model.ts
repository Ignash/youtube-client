import { PageInfoResponseModel } from './page-info-response.model';
import { SearchItemModel } from './search-item.model';

export class SearchResponseModel {
    public kind: string;
    public etag: string;
    public pageInfo: PageInfoResponseModel;
    public items: SearchItemModel[];
}
