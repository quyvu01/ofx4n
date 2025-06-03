export class ItemsResponse<T> {
  items: T[];
  constructor(items: T[]) {
    this.items = items;
    return this;
  }
}
