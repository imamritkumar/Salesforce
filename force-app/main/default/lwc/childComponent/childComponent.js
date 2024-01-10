import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api tempVariable;
    handleInputChange(event) {
        console.log('child component key presskey press');
        this.tempVariable = event.detail.value;
    }
    selectedNavHandler(event) {
        this.tempVariable = event.detail;
        console.log('child component key presskey selectedNavHandler',this.tempVariable);
    }
}