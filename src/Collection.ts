import { ElementItem } from "./ElementItem";

export class Collection {
  protected items: Array<ElementItem> = [];

  constructor() {}

  protected insertAt(item: ElementItem, index: number): void {
    this.items.splice(index, 0, item);
  }

  public add(item: ElementItem, index: number = -1): void {
    let i = Math.trunc(index);
    if (i >= 0 && i < this.items.length) {
      this.insertAt(item, i);
      return;
    }
    this.items.push(item);
  }
  public getItems() {
    return this.items;
  }
  public empty(): void {
    this.items = [];
  }
  public getLength(): number {
    return this.items.length;
  }
}
