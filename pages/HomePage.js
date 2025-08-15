//@ts-check

export class HomePage{
    constructor(page){
        this.page=page;
        this.addToCartBtn = "#add-to-cart-sauce-labs-backpack";
        this.removeBtn = "#remove-sauce-labs-backpack";
        this.cartIcon = ".shopping_cart_link";
    }

    async addToCart(){
        await this.page.locator(this.addToCartBtn).click();
    }

    async goToCart(){
        await this.page.locator(this.cartIcon).click();
    }

    async removeItem(){
        await this.page.locator(this.removeBtn).click();
    }
}