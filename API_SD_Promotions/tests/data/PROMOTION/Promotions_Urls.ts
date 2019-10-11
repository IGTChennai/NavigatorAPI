export class urls {
    protected static appbase: string = "api/v1/";
}
export class Add_Buyget extends urls {
    private static Add_buyGetbase: string = "promos";

    static read_AllPromotions(): string {
        return this.appbase.concat(`promos?status=ALL`);
    }
    static read_AllPromotionsList(): string {
        //return this.appbase.concat(`promos?end-date=2019-08-27&search-method=0&start-date=2019-08-27&status=ALL&type=2`);
        return this.appbase.concat(`promos?end-date=2020-08-27&start-date=2020-08-27&status=ALL&type=2`);
    }
    static read_Promotion(promotionNumber: number): string {
        return this.appbase.concat(`promos/${promotionNumber}`);
    }
    static delete_Promotion(promotionNumber: number): string {
        return this.appbase.concat(`promos/${promotionNumber}`);
    }
    static update_Promotion(promotionNumber: number): string {
        return this.appbase.concat(`promos/${promotionNumber}`);
    }
    static create_BuyXgetY(): string {
        return this.appbase.concat(`${this.Add_buyGetbase}`);
    }
    static create_Criteria(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/criteria`);
    }
    static create_PrizeType(promoid: number, prizetype: number): string {
        return this.appbase.concat(`promo/${promoid}/prize-type/${prizetype}/`);
    }
    static create_Text(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/text`);
    }
    static update_Commit(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}/commit`);
    }
    static delete_BuyXgetY(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}`);
    }

}
export class Add_coupon extends urls {
    private static Add_couponbase: string = "promos";

    static create_Coupon(): string {
        return this.appbase.concat(`${this.Add_couponbase}`);
    }
    static create_CouponCriteria(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/criteria`);
    }
    static create_CouponData(promoid: number, promotype: number): string {
        return this.appbase.concat(`promo/${promoid}/promo-type/${promotype}`);
    }
    static create_CouponPrizeType(promoid: number, prizetype: number): string {
        return this.appbase.concat(`promo/${promoid}/prize-type/${prizetype}/`);
    }
    static create_CouponText(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/text`);
    }
    static update_CouponCommit(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}/commit`);
    }
    static delete_CouponPromo(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}`);
    }

}

export class Add_nPack extends urls {
    private static Add_nPackbase: string = "promos";

    static create_NPack(): string {
        return this.appbase.concat(`${this.Add_nPackbase}`);
    }
    static create_NPackCriteria(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/promo-type/npack-ticket`);
    }
    static create_NPackPrizeType(promoid: number, prizetype: number): string {
        return this.appbase.concat(`promo/${promoid}/prize-type/${prizetype}/`);
    }
    static create_NPackText(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/text`);
    }
    static update_NPackCommit(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}/commit`);
    }
    static delete_NPackPromo(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}`);
    }
}

export class Add_Nth extends urls {
    private static Add_nPackbase: string = "promos";

    static create_EveryNth(): string {
        return this.appbase.concat(`${this.Add_nPackbase}`);
    }
    static create_EveryNthCriteria(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/criteria`);
    }
    static create_EveryNthPrizeType(promoid: number, prizetype: number): string {
        return this.appbase.concat(`promo/${promoid}/prize-type/${prizetype}/`);
    }
    static create_NthType(promoid: number, prizetype: number, promotype: number): string {
        return this.appbase.concat(`promo/${promoid}/promo-type/${promotype}`);
    }
    static create_EveryNthText(promoid: number): string {
        return this.appbase.concat(`promo/${promoid}/text`);
    }
    static update_EveryNthCommit(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}/commit`);
    }
    static delete_EveryNthPromo(promoid: number): string {
        return this.appbase.concat(`promos/${promoid}`);
    }

}
export class addThres extends urls {
    private static addThrespbase: string = "instants/threshold-classes";

    static Create_addThres(): string {
        return this.appbase.concat(`${this.addThrespbase}`);
    }
    static verify_addThres(thresid: number): string {
        return this.appbase.concat(`${this.addThrespbase}/${thresid}`);
    }
}
export class formaddTemp extends urls {
    private static addTempbase: string = "form-templates";

    static Create_addFormTemp(): string {
        return this.appbase.concat(`${this.addTempbase}`);
    }
}