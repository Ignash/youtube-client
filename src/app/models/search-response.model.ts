import { PageInfoResponseModel } from "./page-info-response.model"
import { SearchItemModel } from "./search-item.model"

export class SearchResponseModel {
    kind: string;
    etag: string;
    pageInfo: PageInfoResponseModel;
    items: SearchItemModel[];
}
