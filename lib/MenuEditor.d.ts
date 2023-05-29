import { Item } from "./Item";
import { NestedItemData, Itemlistener, ItemDataset, ItemData } from "./types";
import { ElementItem } from "./ElementItem";
export default class MenuEditor {
    private menuContainer;
    private currentItem;
    protected listenerDeleteButton: Itemlistener;
    protected listenerEditButton: Itemlistener;
    protected sortableClassname: string;
    constructor(id: string);
    add(data: ItemDataset): void;
    edit(item: ElementItem): void;
    update(data: ItemDataset): void;
    setArray(arr: Array<NestedItemData>): void;
    getString(): string;
    protected htmlToJson(element: HTMLElement): ItemData[];
    onClickEdit(listener: Itemlistener): void;
    onClickDelete(listener: Itemlistener): void;
    empty(): void;
    mount(): void;
    protected makeItSortable(): void;
    protected makeItemSortable(item: Item): void;
}
