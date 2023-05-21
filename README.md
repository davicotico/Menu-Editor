# Menu Editor
Vanilla Javascript Menu Editor (made with Typescript). 

**This is a release candidate RC**

## How to use

### Creating the object
```
const menuEditor = new MenuEditor('element-id');
```
### Setting the data
```
menuEditor.setArray(jsonArray);
```
### Events
```
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
### Add a new item
```
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
```
let data = {
	text: txtText.value,
	href: txtHref.value,
	icon: txtIcon.value,
	tooltip: txtTooltip.value,
};
menuEditor.update(data);
```
### Output
```
let output = menuEditor.getString();
console.log(output);
```