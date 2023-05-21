import { MenuEditor } from './MenuEditor';
import { NestedItemData } from './types';

const json: NestedItemData[] = [
	{
	"text": "Home",
	"href": "/home",
	"tooltip": "Go to home page",
	"icon": "fa-solid fa-house",
	"children": []
	},
	{
	"text": "About Us",
	"href": "/about",
	"tooltip": "Learn more about our company",
	"icon": "fa-solid fa-address-card",
	"children": []
	},
	{
		"text": "Services",
		"href": "/services",
		"tooltip": "Discover the services we offer",
		"icon": "fa-solid fa-gear",
		"children": [
		  {
			"text": "Service 1",
			"href": "/services/1",
			"tooltip": "Details for Service 1",
			"icon": "cog",
			"children": []
		  },
		  {
			"text": "Service 2",
			"href": "/services/2",
			"tooltip": "Details for Service 2",
			"icon": "cog",
			"children": []
		  }
		]
	},
	{
		"text": "Products",
		"href": "/products",
		"tooltip": "View our available products",
		"icon": "fa-solid fa-cart-shopping",
		"children": [
		  {
			"text": "Product 1",
			"href": "/products/1",
			"tooltip": "Details for Product 1",
			"icon": "shopping-cart",
			"children": []
		  },
		  {
			"text": "Product 2",
			"href": "/products/2",
			"tooltip": "Details for Product 2",
			"icon": "shopping-cart",
			"children": []
		  }
		]
	},
];

const txtText = document.getElementById('txtText') as HTMLInputElement;
const txtHref = document.getElementById('txtHref') as HTMLInputElement;
const txtIcon = document.getElementById('txtIcon') as HTMLInputElement;
const txtTooltip = document.getElementById('txtTooltip') as HTMLInputElement;
const txtOutput = document.getElementById('txtOutput') as HTMLTextAreaElement;

const btnUpdate= document.getElementById('btnUpdate');

function cleanForm() {
	txtHref.value = '';
	txtText.value = '';
	txtIcon.value = '';
	txtTooltip.value = '';
}

var me = new MenuEditor('my-menu-editor');

me.onClickDelete((event) => {
	if (confirm('Do you want to delete the item ' + event.item.getDataset().text)) {
		event.item.remove();
	}
});
me.onClickEdit((event) => {
	let a = event.item.getDataset();
	txtText.value = a.text;
	txtHref.value = a.href;
	txtIcon.value = a.icon;
	txtTooltip.value = a.tooltip;
	me.edit(event.item);
	btnUpdate?.removeAttribute('disabled');
});

document.getElementById('btnAdd')?.addEventListener('click', () => {
	let newItem = {
		text: txtText.value,
		href: txtHref.value,
		icon: txtIcon.value,
		tooltip: txtTooltip.value,
		something: "Something"
	};
	me.add(newItem);
	btnUpdate?.setAttribute('disabled', "true");
	cleanForm();
});
btnUpdate?.addEventListener('click', () => {
	let data = {
		text: txtText.value,
		href: txtHref.value,
		icon: txtIcon.value,
		tooltip: txtTooltip.value,
	};
	me.update(data);
	btnUpdate.setAttribute('disabled', "true");
	cleanForm();
});
document.getElementById('btnOutput')?.addEventListener('click', () => {
	txtOutput.value = me.getString();
});

me.addArray(json);
me.mount();
