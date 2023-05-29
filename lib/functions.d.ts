import { ItemData, ItemDataset } from "./types";
declare function itemDataToDataset(data: ItemData): ItemDataset;
declare function datasetToItemData(dataset: DOMStringMap): ItemData;
declare function setDatasetToElement(el: HTMLElement, data: ItemDataset): void;
export { setDatasetToElement, itemDataToDataset, datasetToItemData };
