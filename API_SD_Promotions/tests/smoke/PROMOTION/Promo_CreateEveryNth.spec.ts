import * as chai from 'chai';
import { assert, expect } from 'chai';
import { envSettings } from '../../../server.config';
import { commonheaders } from '../../../utils/auth';
import { addNthData, AddpriTypeData, addPrizeInforData, textDetailData, commitData, NthPromoData } from '../../data/PROMOTION/Promo_Nth.data';
import { Add_Nth } from '../../data/PROMOTION/Promotions_Urls';
import { addNthDataList, promoNthDat, addCriteria, addPrize, addText } from "../../schema/PROMOTION/Promo_Nth.schema";
import { create_EveryNth, create_EveryNthCriteria, create_EveryNthPrizeType, create_EveryNthText, update_EveryNthCommit, delete_EveryNthPromo } from '../../../lib/PROMOTION/EveryNth';
chai.use(require("chai-json-schema"));

let a: any = global;
let promoid = null;
let prizetype = null;
let promotype = null;

describe('·Navigator (Promotions Manager => Nth Promotion => Add a Every Nth Promo-Promo status commit)', () => {
    beforeEach(() => {
        assert.property(commonheaders, 'Authorization', 'Must Conatin authoriation token');
        assert.isNotNull(commonheaders.Authorization, 'Must Conatin authoriation token');
    })
    it(a.getname(196, envSettings.envname, true), async () => {
        const NewPrm: any = await create_EveryNth(envSettings.serverUrl, Add_Nth.create_EveryNth(), commonheaders, addNthData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrm, addNthDataList);
        promoid = NewPrm.promotionNumber;
        prizetype = NewPrm.prizeType;
        promotype = NewPrm.promoType
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Information");
        }
        const NewPrmpromtype: any = await create_EveryNth(envSettings.serverUrl, Add_Nth.create_NthType(promoid, prizetype, promotype), commonheaders, NthPromoData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrmpromtype, promoNthDat);
        const NewPrmCriteria: any = await create_EveryNthCriteria(envSettings.serverUrl, Add_Nth.create_EveryNthCriteria(promoid), commonheaders, AddpriTypeData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrmCriteria, addCriteria);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Prize Information");
        }
        const Addprize: any = await create_EveryNthPrizeType(envSettings.serverUrl, Add_Nth.create_EveryNthPrizeType(promoid, prizetype), commonheaders, addPrizeInforData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(Addprize, addPrize);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Text Information");
        }
        const AddText: any = await create_EveryNthText(envSettings.serverUrl, Add_Nth.create_EveryNthText(promoid), commonheaders, textDetailData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(AddText, addText);
        const commitpromo: any = await update_EveryNthCommit(envSettings.serverUrl, Add_Nth.update_EveryNthCommit(promoid), commonheaders, commitData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });

        if (promoid == undefined || promoid == null) {
            pending("Not able to Delete Coupon");
        }
        await delete_EveryNthPromo(envSettings.serverUrl, Add_Nth.delete_EveryNthPromo(promoid), commonheaders).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            promoid = null;
            prizetype = null;
            promotype = null;
            return res.body;
        });

    })
});