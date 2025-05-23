import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperience extends LightningElement {
    @api recordId;
    @api objectApiName
    workExperienceList = [];

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'WorkExperiences__r',
        fields: [
            'Work_Experience__c.Job_Start_Date__c',
            'Work_Experience__c.Job_End_Date__c',
            'Work_Experience__c.Role__c',
            'Work_Experience__c.Work_Location__c',
            'Work_Experience__c.Description__c',
            'Work_Experience__c.Company_Name__c',
            'Work_Experience__c.IsCurrent__c'
        ]
    })
    handleWorkExperience({ data, error }) {
        if (data) {
            this.workExperienceList = [...data.records].reverse().map(({ id, fields }) => ({
                id,
                JobStartDate: this.getValue(fields.Job_Start_Date__c),
                JobEndDate: this.getValue(fields.Job_End_Date__c),
                Role: this.getValue(fields.Role__c),
                CompanyName: this.getValue(fields.Company_Name__c),
                WorkLocation: this.getValue(fields.Work_Location__c),
                Description: this.getValue(fields.Description__c),
                IsCurrent: this.getValue(fields.IsCurrent__c)
            }));
        } else if (error) {
            console.error('WorkExperience Error:', error);
        }
    }

    getValue(data) {
        return data?.displayValue ?? data?.value ?? '';
    }

   renderedCallback() {
    const descriptionElems = this.template.querySelectorAll('.description');
    this.workExperienceList.forEach((work, index) => {
        if (descriptionElems[index]) {
            let html = work.Description || '';

            // Convert dash bullets to <ul><li> if needed
            if (!html.includes('<ul>')) {
                const lines = html.split('\n').filter(line => line.trim() !== '');
                html = '<ul>' + lines.map(line => `<li>${line.replace(/^[-*]\s*/, '')}</li>`).join('') + '</ul>';
            }

            descriptionElems[index].innerHTML = html;
        }
    });
}

}