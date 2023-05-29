# Menu Editor
Vanilla Javascript Menu Editor Library (made with Typescript). 

## [>>> Demo <<<](https://davidticona.com/demos/javascript-menu-editor/)

## Install

```
npm install @davicotico/menu-editor
```

## How to use

### Imports
```js
import '@davicotico/menu-editor/css/styles.css';
import { MenuEditor } from '@davicotico/menu-editor';
```

### Creating the object

HTML
```html
<div id="element-id"></div>
```
Javascript

```js
const menuEditor = new MenuEditor('element-id');
```
### Setting the data
```js
menuEditor.setArray(jsonArray);
```
### Events
```js
menuEditor.onClickDelete((event) => {
	if (confirm('Do you want to delete the item ' + event.item.getDataset().text)) {
		event.item.remove(); // remove the item
	}
});

menuEditor.onClickEdit((event) => {
	let itemData = event.item.getDataset();
	console.log(itemData);
	menuEditor.edit(event.item); // set the item in edit mode
});
```
### Mount the menu edior
```js
menuEditor.mount();
```

### Add a new item
```js
let newItem = {
    text: txtText.value, // required
    href: txtHref.value, // required
    icon: txtIcon.value, // required
    tooltip: txtTooltip.value, // required
    something: "Something" // custom attributes are optional
};
menuEditor.add(newItem);
```

### Update an item
The menu editor must have an item in edit mode. See `onClickEdit` event in **Events** section
```js
let data = {
	text: txtText.value,
	href: txtHref.value,
	icon: txtIcon.value,
	tooltip: txtTooltip.value,
};
menuEditor.update(data);
```
### Output
```js
let output = menuEditor.getString();
console.log(output);
```

### Remove all items
```js
menuEditor.empty();
```

## Changelog
#### v1.0.0 
* First release
