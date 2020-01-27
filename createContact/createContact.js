/* eslint-disable no-alert */
import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FNAME_FIELD from '@salesforce/schema/Contact.FirstName'; 
import LNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DOB_FIELD from '@salesforce/schema/Contact.Date_of_Birth__c';
import COLLEGE_FIELD from '@salesforce/schema/Contact.Institution_Organization__c';

export default class Form extends LightningElement {
    @track fName='';
    @track mName='';
    @track lName='';
    @track email='';
    @track dob='';
    @track collegeName='';

    inputData(event){
        const fieldName = event.target.name;
        if(fieldName === 'firstName')
            this.fName = event.target.value;
        else if(fieldName === 'middleName')
            this.mName = event.target.value;
        else if(fieldName === 'lastName')
            this.lName = event.target.value;
        else if(fieldName === 'email')
            this.email = event.target.value;
        else if(fieldName === 'dob')
            this.dob = event.target.value;
        else if(fieldName === 'collegeName')
            this.collegeName = event.target.value;
    }

    createContact(){
        if(this.fName === '' || this.lName === '' || this.email === '' || this.dob === '')
            alert('Required field is missing');
        else{
            const fields = {};
            fields[FNAME_FIELD.fieldApiName] = this.fName+' '+this.mName;
            fields[LNAME_FIELD.fieldApiName] = this.lName;
            fields[EMAIL_FIELD.fieldApiName] = this.email;
            fields[DOB_FIELD.fieldApiName]   = this.dob;
            fields[COLLEGE_FIELD.fieldApiName] = this.collegeName;
            const contactInput = {apiName : CONTACT_OBJECT.objectApiName , fields};
            createRecord(contactInput)
                .then(contact => {
                    alert('Contact created -> '+ contact.id);
                })
                .catch(error => {
                    alert('Error -> '+error.body.message);
                });
        }
    }
}