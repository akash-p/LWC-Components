import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateToast extends LightningElement {

    generateInfoToast(){
        const infoToast = new ShowToastEvent({
            title: 'Generated info variant Toast Successfully',
            message: 'Succesfully implemented Toast Functionality'
        });
        this.dispatchEvent(infoToast);
    }

    generateSuccessToast(){
                    const successToast = new ShowToastEvent({
                        title: 'Generated success variant Toast Successfully',
                        message: 'Succesfully implemented Toast Functionality',
                        variant: 'success'
                    });
                    this.dispatchEvent(successToast);
    }

    generateWarningToast(){
                    const warningToast = new ShowToastEvent({
                        title: 'Generated warning variant Toast Successfully',
                        message: 'Succesfully implemented Toast Functionality',
                        variant: 'warning'
                    });
                    this.dispatchEvent(warningToast);
    }

    generateErrorToast(){
                    const errorToast = new ShowToastEvent({
                        title: 'Generated error variant Toast Successfully',
                        message: 'Succesfully implemented Toast Functionality',
                        variant: 'error'
                    });
                    this.dispatchEvent(errorToast);
    }


}