import { LightningElement, api } from 'lwc';

export default class GrandChildComponent extends LightningElement {
    @api tempVariable;
    handleInputChange(event) {
        console.log('grand child component key press');
        this.tempVariable = event.detail.value;
        console.log('this.tempVarible :-'+this.tempVariable);
        event.preventDefault();
        const selectEvent = new CustomEvent('selection', { detail: this.tempVariable, bubbles:true, composed:true });
        // Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}