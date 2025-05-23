import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {
    // recordId = 'a1Z2w000001DNn2EAG'
    // objectApiName = 'Portfolio__c'

     @api recordId
    @api objectApiName
    @api rank
    @api badges
    @api points
    @api trails
    @api resumeUrl


       // currentYear = new Date().getFullYear();
}