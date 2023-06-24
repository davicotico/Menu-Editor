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

function updateLevels(elemento: HTMLElement, nivel: number = -1) {
  elemento.ariaLevel = `${nivel}`;
  let hijos = elemento.children;
  for (let i = 0; i < hijos.length; i++) {
    let nuevoNivel = nivel;
    if (hijos[i].matches('.list-group-item')) {
      nuevoNivel = nuevoNivel + 1;
    }
    updateLevels(hijos[i] as HTMLElement, nuevoNivel);
  }
}

function encontrarNivelMaximo(elemento: HTMLElement, nivelActual: number) {
  let elementosDiv = elemento.querySelectorAll<HTMLElement>('.list-group-item');
  let nivelMaximo = nivelActual;
  for (let i = 0; i < elementosDiv.length; i++) {
    let nivelHijo = encontrarNivelMaximo(elementosDiv[i], nivelActual + 1);
    nivelMaximo = Math.max(nivelMaximo, nivelHijo);
  }
  return nivelMaximo;
}

export { setDatasetToElement, itemDataToDataset, datasetToItemData, getParents, updateLevels, encontrarNivelMaximo };
