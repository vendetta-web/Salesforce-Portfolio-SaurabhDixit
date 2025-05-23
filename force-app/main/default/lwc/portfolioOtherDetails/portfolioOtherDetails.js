import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SUPERBADGE_FIELD from '@salesforce/schema/Portfolio__c.Superbadges__c';
import AWARDS_FIELD from '@salesforce/schema/Portfolio__c.Awards__c';
import LANGUAGES_FIELD from '@salesforce/schema/Portfolio__c.Languages__c';

export default class PortfolioOtherDetails extends LightningElement {
    @api recordId;

    superbadges = [];
    awards = [];
    languages = [];

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SUPERBADGE_FIELD, AWARDS_FIELD, LANGUAGES_FIELD]
    })
    otherFieldsHandler({ data, error }) {
        if (data) {
            console.log("otherFieldsHandler data", JSON.stringify(data));
            const { Superbadges__c, Awards__c, Languages__c } = data.fields;

            this.superbadges = Superbadges__c?.value ? Superbadges__c.value.split(';') : [];
            this.awards = Awards__c?.value ? Awards__c.value.split(',') : [];
            this.languages = Languages__c?.value ? Languages__c.value.split(',') : [];
        }
        if (error) {
            console.error("otherFieldsHandler error", error);
        }
    }
}