import { LightningElement,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioFooter extends LightningElement {
    currentYear = new Date().getFullYear();
    @api linkedinUrl 
    @api githubUrl 
    @api trailheadUrl 
    @api blogUrl 
    @api youtubeUrl
    @api twitterUrl


    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    youtube = `${PortfolioAssets}/PortfolioAssets/Social/youtube.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
    trailhead1 = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blog.svg`

}