import { PageInfoResponseModel } from './page-info-response.model';
import { SearchItemModel } from './search-item.model';

export class SearchResponseModel {
    public etag: string;
    public items: SearchItemModel[];
    public kind: string;
    public nextPageToken?: string;
    public pageInfo: PageInfoResponseModel;
    public regionCode?: string;
}
