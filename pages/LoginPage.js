export class LoginPage{
   
    constructor(page){
        this.page = page;
        this.usernameTextBox = "#user-name";
        this.passwordTextBox = "#password";
        this.loginButton = "#login-button";
    }

    async openApplication(){
        await this.page.goto("https://www.saucedemo.com");
    }

    async loginToSauceDemo(username,password){
        await this.page.locator(this.usernameTextBox).fill(username);
        await this.page.locator(this.passwordTextBox).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    
}