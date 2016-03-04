import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {ListItems} from "./listModel";
import {ShoppingAddItem} from "./shopping.addItem.component";
import {ShoppingListEditComponent} from "./shopping.edit.component";
import {ShoppingListService} from "./services/shopping-list.service";

@Component({
    selector: 'shopping-list',
    directives:[MATERIAL_DIRECTIVES, ShoppingAddItem, ShoppingListEditComponent],
    styleUrls:['src/css/list_item.css'],
    providers:[ShoppingListService],
    template: `
    <section class="examples">
        <div layout="column" class="md-inline-form">
            <md-content layout-padding>
                <div class="section1">
                      <shopping-add-item (itemAdded)="onItemAdded($event)"></shopping-add-item>
                </div>
            </md-content>
        </div>
    </section>
    <section class="examples top">
        <div layout="column" class="md-inline-form">
            <md-toolbar class="demo-toolbar md-primary">
                <div class="md-toolbar-tools">
                  <h3>My Shopping List</h3>
                  <span flex=""></span>
                </div>
            </md-toolbar>
            <md-content layout-padding>

                <md-subheader class="md-no-sticky">Output</md-subheader>

                  <md-list-item class="md-2-line" *ngFor="#i = index; #item of listItems" (click)="onSelect(item, i)">
                    <div class="md-list-item-text">
                        <h3>{{item.name}}, ({{item.amount}})</h3>
                    </div>
                  </md-list-item>

                    <div *ngIf="isEditing != false">

                    <md-divider></md-divider>

                  <shopping-list-edit [item]="selectedItem" (savedItem)="onItemEdited($event)" (deleteItem)="onItemDeleted($event)"></shopping-list-edit>

                    </div>


            </md-content>
        </div>
    </section>
    `
})

export class ShoppingListComponent{

    listItems: ListItems[];

    selectedItem:Object;

    isEditing:boolean;

    constructor(
        private _shoppingListService: ShoppingListService
    ){
        this.listItems = [
            {
                name:'item 1',
                amount:2
            }
        ];

        //hide
        this.isEditing=false;

    }
    onItemAdded(item:ListItems):void {
        this.listItems.push(item);
    }
    onSelect(item:ListItems, i:number){
        //local variable copy
        this.selectedItem = {
            todo: item,
            index: i
        };

        //show
        this.isEditing=true;

    }
    onItemEdited(item):void {
        //updateItem
        this.listItems[item.index] = item.todo;

        //hide
        this.isEditing = false;
    }
    onItemDeleted(item):void {
        //remove item
        this.listItems.splice(item.index, 1);

        //hide
        this.isEditing = false;
    }

}