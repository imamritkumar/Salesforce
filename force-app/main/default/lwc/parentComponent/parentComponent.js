import { LightningElement, api } from 'lwc';

export default class ParentComponent extends LightningElement {
    @api tempVariable;
    
    handleInputChange(event) {
        this.tempVariable = event.detail.value;
        console.log('parent key press', this.tempVariable);
    }
    selectedNavHandler(event) {
        this.tempVariable = event.detail;
        console.log('parent component key presskey selectedNavHandler',this.tempVariable);
    }
}