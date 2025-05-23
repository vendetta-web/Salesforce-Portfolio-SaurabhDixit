import { LightningElement, wire, api } from 'lwc';
//import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'
import USER_PROFILE_PIC from '@salesforce/schema/Portfolio__c.userProfilePic__c'

export default class PortfolioBanner extends LightningElement {
    @api recordId 
    @api linkedinUrl 
    @api githubUrl 
    @api trailheadUrl 
    @api blogUrl 
    @api youtubeUrl
    @api twitterUrl


    //userPic = `${PortfolioAssets}/PortfolioAssets/userPic.png`
    // linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    // github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    // youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    // twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    // trailhead1 = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    // blog = `${PortfolioAssets}/PortfolioAssets/Social/blog.svg`

    
    @wire(getRecord, {
        recordId: '$recordId', fields: [
            FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION, USER_PROFILE_PIC
        ]
    })portfolioData;


    get fullName(){
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }
    get designation(){
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }
    get userPic() {
        let richTextValue = getFieldValue(this.portfolioData.data, USER_PROFILE_PIC);
        if (richTextValue) {
            // Extract the image URL from the Rich Text
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = richTextValue;
            let imgTag = tempDiv.querySelector('img');
            return imgTag ? imgTag.src : null;
        }
        return null;
    }


}