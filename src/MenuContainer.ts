import { ElementItem } from "./ElementItem";
import { Collection } from "./Collection";
import { ItemOptions } from "./types";

export class MenuContainer{

  protected element: HTMLDivElement;
  protected id: string;
  protected collection: Collection;
  protected options: ItemOptions = { sortableClassname: 'nested-sortable' };

  constructor(id: string) {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element == null) {
      throw Error(`Error: Element with id="${id}" does not exists.`);
    }
    this.id = id;
    this.element = element;
    this.collection = new Collection();
  }

  public setOptions(options: ItemOptions): void {
    this.options = options;
  }
  
  public add(item: ElementItem, index: number = -1) {
    this.collection.add(item, index);
  }
  
  public empty(): void {
    this.collection.empty();
    let element = this.element
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  public mount(): void {
    this.element.classList.add("list-group", this.options.sortableClassname);
    this.collection.getItems().forEach((item) => {
      item.setOptions(this.options);
      item.mount();
      this.element.append(item.getElement());
    });
  }
  public getElement(): HTMLDivElement  {
    return this.element;
  }
}
