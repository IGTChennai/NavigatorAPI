import * as chai from 'chai';
import { assert, expect } from 'chai';
import { envSettings } from '../../../server.config';
import { commonheaders } from '../../../utils/auth';
import { buygetData, AddpriTypeData, AddprizeData, textDetailData, commitData } from '../../data/PROMOTION/Promo_buyGet.data';
import { Add_Buyget } from '../../data/PROMOTION/Promotions_Urls';
import { addNbuyPromo, addCriteria, addPrize, addText } from "../../schema/PROMOTION/Promo_buyGet.schema";
import { create_BuyXgetY, create_Criteria, create_PrizeType, create_Text, update_Commit, delete_BuyXgetY } from '../../../lib/PROMOTION/BuyXgetY';
chai.use(require("chai-json-schema"));

let promoid = null;
let prizetype = null;
let a: any = global;

describe('·Navigator (Promotions Manager => Buy X Get Y Promotion => Verify Creates A Buy X Get Y Promotion - Promotion Status Is Enabled)', () => {
    beforeEach(() => {
        assert.property(commonheaders, 'Authorization', 'Must Conatin authoriation token');
        assert.isNotNull(commonheaders.Authorization, 'Must Conatin authoriation token');
    })
    it(a.getname(184, envSettings.envname, true), async () => {
        const NewPrm: any = await create_BuyXgetY(envSettings.serverUrl, Add_Buyget.create_BuyXgetY(), commonheaders, buygetData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrm, addNbuyPromo);
        promoid = NewPrm.promotionNumber;
        prizetype = NewPrm.prizeType;
        if (promoid == undefined || promoid == null) {
            pending("Not able to add criteria Information");
        }
        const NewPrmCriteria: any = await create_Criteria(envSettings.serverUrl, Add_Buyget.create_Criteria(promoid), commonheaders, AddpriTypeData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrmCriteria, addCriteria);

        if (promoid == undefined || promoid == null) {
            pending("Not able to add Prize Information");
        }

        const Addprize: any = await create_PrizeType(envSettings.serverUrl, Add_Buyget.create_PrizeType(promoid, prizetype), commonheaders, AddprizeData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(Addprize, addPrize);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Text Information");
        }
        const AddText: any = await create_Text(envSettings.serverUrl, Add_Buyget.create_Text(promoid), commonheaders, textDetailData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(AddText, addText);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add criteria Information");
        }
        const commitpromo: any = await update_Commit(envSettings.serverUrl, Add_Buyget.update_Commit(promoid), commonheaders, commitData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        if (promoid == undefined || promoid == null) {
            pending("Not able to Delete Coupon");
        }
        await delete_BuyXgetY(envSettings.serverUrl, Add_Buyget.delete_BuyXgetY(promoid), commonheaders).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            promoid = null;
            prizetype = null;
            return res.body;
        });
    });

})
