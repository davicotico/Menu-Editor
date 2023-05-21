import { ItemData, ItemDataset } from "./types";

function itemDataToDataset(data: ItemData): ItemDataset {
  let plainObject: ItemDataset = { text: '', href: '', icon: '', tooltip: '' };
  for (let k in data) { 
    if (typeof data[k] == 'string') {
      plainObject[k] = data[k] as string;
    }
  }
  return plainObject;
}

function datasetToItemData(dataset: DOMStringMap): ItemData {
  let itemData: ItemData = { text: '', href: '', icon: '', tooltip: '' };
  for (let k in dataset) { 
    if (typeof dataset[k] == 'string') {
      itemData[k] = dataset[k] as string;
    }
  }
  return itemData;
}

function setDatasetToElement(el: HTMLElement, data: ItemDataset): void {
  for (let k in data) {
    el.dataset[k] = data[k];
  }
}

export { setDatasetToElement, itemDataToDataset, datasetToItemData };
