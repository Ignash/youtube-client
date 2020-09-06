import { PageInfoResponseModel } from './page-info-response.model';
import { StatisticRensponseItemModel } from './statistic-response-item.model';

export class StatisticsResponsModel {

    public etag: string;
    public items: StatisticRensponseItemModel[];
    public kind: string;
    public pageInfo: PageInfoResponseModel;
}
