import { LightningElement } from 'lwc';

export default class GrandParentComponent extends LightningElement {
    tempVariable;
    handleInputChange(event) {
        this.tempVariable = event.detail.value;
        console.log('grand parent key press', this.tempVariable);
    }
    selectedNavHandler(event) {
        this.tempVariable = event.detail;
        console.log('grand parent component key presskey selectedNavHandler',this.tempVariable);
    }
}