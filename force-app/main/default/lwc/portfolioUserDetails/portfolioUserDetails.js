import { LightningElement,api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId
    @api objectApiName
    @api resumeUrl


    downloadResume(){
        //window.open("https://drive.google.com/file/d/1VJxWnHS-VcW5IhARQj6u9RB5c8KRf12C/view?usp=sharing", "_blank")
        window.open(this.resumeUrl,"_blank")
    }
}