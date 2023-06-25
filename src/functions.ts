import { ItemData, ItemDataset } from "./types";

function itemDataToDataset(data: ItemData): ItemDataset {
  let plainObject: ItemDataset = { text: "", href: "", icon: "", tooltip: "" };
  for (let k in data) {
    if (typeof data[k] == "string") {
      plainObject[k] = data[k] as string;
    }
  }
  return plainObject;
}

function datasetToItemData(dataset: DOMStringMap): ItemData {
  let itemData: ItemData = { text: "", href: "", icon: "", tooltip: "" };
  for (let k in dataset) {
    if (typeof dataset[k] == "string") {
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

function getParents(elem: HTMLElement, root: HTMLElement, callback: Function) {
  let parents: HTMLElement[] = [];
  let parent = elem.parentNode as HTMLElement;
  let index = 0;
  while (parent && parent !== root) {
    if (callback) {
      if (callback(parent, index, elem)) {
        parents.push(parent);
      }
    } else {
      parents.push(parent);
    }
    index++;
    parent = parent.parentNode as HTMLElement;
  }
  return parents;
}

function updateLevels(element: HTMLElement, level: number = -1) {
  element.ariaLevel = `${level}`;
  let children = element.children;
  for (let i = 0; i < children.length; i++) {
    let updatedLevel = level;
    if (children[i].matches(".list-group-item")) {
      updatedLevel = updatedLevel + 1;
    }
    updateLevels(children[i] as HTMLElement, updatedLevel);
  }
}

function getMaxNestedLevel(element: HTMLElement, currentLevel: number) {
  let divElements = element.querySelectorAll<HTMLElement>(".list-group-item");
  let maxLevel = currentLevel;
  for (let i = 0; i < divElements.length; i++) {
    let nestedLevel = getMaxNestedLevel(divElements[i], currentLevel + 1);
    maxLevel = Math.max(maxLevel, nestedLevel);
  }
  return maxLevel;
}

export {
  setDatasetToElement,
  itemDataToDataset,
  datasetToItemData,
  getParents,
  updateLevels,
  getMaxNestedLevel,
};
