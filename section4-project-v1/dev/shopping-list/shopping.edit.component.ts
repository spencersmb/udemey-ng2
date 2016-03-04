import {Component, Input, EventEmitter, Output} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ListItems} from "./listModel";

@Component({
    selector: 'shopping-list-edit',
    directives:[MATERIAL_DIRECTIVES],
    template:`
    <md-subheader class="md-no-sticky">Edit Item</md-subheader>
    <br>
    <div class="editForm" >
        <div layout-gt-sm="row">
            <md-input-container class="md-block"  flex-gt-sm>
                <label>Add New Item</label>
                <input md-input [value]="item.todo.name" #editName>
            </md-input-container>
            <md-input-container class="md-block" flex-gt-sm>
                <label>Amount</label>
                <input md-input type="number" step="any" [value]="item.todo.amount" #editAmount/>
            </md-input-container>
        </div>
        <button md-raised-button class="md-accent md-hue-1" (click)="saveItem(editName, editAmount, item.index)">Save Item</button>
        <button md-raised-button class="md-accent md-hue-1" (click)="onDelete()">Delete Item</button>
    </div>
    `
})

export class ShoppingListEditComponent{

    //bind input item to this.item
    @Input() item: Object;

    //out save and delete change events
    @Output() savedItem = new EventEmitter();
    @Output() deleteItem = new EventEmitter();

    constructor(){
        this.item = {
            todo: {
                name:'',
                amount:0
            },
            index: ''
        };
    }
    saveItem(name, amount, index):void {
        this.item = {
            todo: {
                name:name.value,
                amount:amount.value
            },
            index: index
        };
        //emit item to save
        this.savedItem.emit(this.item);
    }
    onDelete(): void{
        //emit item to delete
        this.deleteItem.emit(this.item);
    }
}