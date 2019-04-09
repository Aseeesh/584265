export class PagingResponse<T extends any> {
  public pagedData: Array<T>;
  totalPages: number;
  totalResults: number;
  pagingRequest: number;
  pageSize: number;
  searchTerm: string;
  constructor(values: Object = {}) {
      this.pagedData = [];
      Object.assign(this, values);
  }
}
