export interface IListResponse<DataType> {
  count: number;
  data: DataType;
  page: number;
  pageCount: number;
  total: number;
}
