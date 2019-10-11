import * as chai from 'chai';
import { assert, expect } from 'chai';
import { envSettings } from '../../../server.config';
import { commonheaders } from '../../../utils/auth';
import { chanceCouponData, AddpriTypeData, secondChanceData, serialCouponData, textDetailData, commitData } from '../../data/PROMOTION/Promo_AddCoupon.data';
import { Add_coupon } from '../../data/PROMOTION/Promotions_Urls';
import { addCouponPromoList, AddpriTypeDataList, textDetailDataList, secondUrlSec, addCashDataListSec } from "../../schema/PROMOTION/Promo_Addcoupon_14500.schema";
import { create_Coupon, create_CouponCriteria, create_CouponPrizeType, create_CouponText, update_CouponCommit, delete_CouponPromo } from '../../../lib/PROMOTION/Coupon';
chai.use(require("chai-json-schema"));

let promoid = null;
let prizetype = null;
let promotype = null;
let a: any = global;

describe('·Navigator (Promotions Manager =>  Coupon Promotion => Add a Coupon Promotion of Prize Type Second Chance Prize)', () => {
    beforeEach(() => {
        assert.property(commonheaders, 'Authorization', 'Must Conatin authoriation token');
        assert.isNotNull(commonheaders.Authorization, 'Must Conatin authoriation token');
    })
    it(a.getname(191, envSettings.envname, true), async () => {
        const NewPrm: any = await create_Coupon(envSettings.serverUrl, Add_coupon.create_Coupon(), commonheaders, chanceCouponData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrm, addCouponPromoList);
        promoid = NewPrm.promotionNumber;
        prizetype = NewPrm.prizeType;
        promotype = NewPrm.promoType;
        if (promoid == undefined || promoid == null) {
            pending("Not able to add criteria Information");
        }
        const NewPrmpromtype: any = await create_Coupon(envSettings.serverUrl, Add_coupon.create_CouponData(promoid, promotype), commonheaders, serialCouponData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrmpromtype, secondUrlSec);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add criteria Information");
        }
        const NewPrmCriteria: any = await create_CouponCriteria(envSettings.serverUrl, Add_coupon.create_CouponCriteria(promoid), commonheaders, AddpriTypeData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrmCriteria, AddpriTypeDataList);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Prize Information");
        }
        const Addprize: any = await create_CouponPrizeType(envSettings.serverUrl, Add_coupon.create_CouponPrizeType(promoid, prizetype), commonheaders, secondChanceData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(Addprize, addCashDataListSec);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Text Information");
        }
        const AddText: any = await create_CouponText(envSettings.serverUrl, Add_coupon.create_CouponText(promoid), commonheaders, textDetailData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(AddText, textDetailDataList);
        if (promoid == undefined || promoid == null) {
            pending("Not able to Delete Coupon");
        }
        const commitpromo: any = await update_CouponCommit(envSettings.serverUrl, Add_coupon.update_CouponCommit(promoid), commonheaders, commitData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        if (promoid == undefined || promoid == null) {
            pending("Not able to Delete Coupon");
        }
        await delete_CouponPromo(envSettings.serverUrl, Add_coupon.delete_CouponPromo(promoid), commonheaders).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            promoid = null;
            prizetype = null;
            promotype = null;
            return res.body;
        });
    });
})
