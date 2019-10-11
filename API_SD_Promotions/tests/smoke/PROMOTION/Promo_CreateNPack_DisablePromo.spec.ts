import * as chai from 'chai';
import { assert, expect } from 'chai';
import { envSettings } from '../../../server.config';
import { commonheaders } from '../../../utils/auth';
import { nPackdisableData, ticketData, AddprizeData, textDetailData, commitData } from '../../data/PROMOTION/Promo_Npack.data';
import { Add_nPack } from '../../data/PROMOTION/Promotions_Urls';
import { addNpackList, prizeInfoData, TextDetailsData } from "../../schema/PROMOTION/Promo_Npack.schema";
import { create_NPack, create_NPackCriteria, create_NPackPrizeType, create_NPackText, update_NPackCommit, delete_NPackPromo } from '../../../lib/PROMOTION/NPack';
chai.use(require("chai-json-schema"));

let promoid = null;
let prizetype = null;
let a: any = global;

describe('·Navigator (Promotions Manager => Npack Promotion => Create a NPACK promotion in disabled status)', () => {
    beforeEach(() => {
        assert.property(commonheaders, 'Authorization', 'Must Conatin authoriation token');
        assert.isNotNull(commonheaders.Authorization, 'Must Conatin authoriation token');
    })
    it(a.getname(197, envSettings.envname, true), async () => {
        const NewPrm: any = await create_NPack(envSettings.serverUrl, Add_nPack.create_NPack(), commonheaders, nPackdisableData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrm, addNpackList);
        promoid = NewPrm.promotionNumber;
        prizetype = NewPrm.prizeType;
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Prize Information");
        }
        const NewPrmTicket: any = await create_NPackCriteria(envSettings.serverUrl, Add_nPack.create_NPackCriteria(promoid), commonheaders, ticketData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Prize Information");
        }
        const Addprize: any = await create_NPackPrizeType(envSettings.serverUrl, Add_nPack.create_NPackPrizeType(promoid, prizetype), commonheaders, AddprizeData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(Addprize, prizeInfoData);
        if (promoid == undefined || promoid == null) {
            pending("Not able to add Text Information");
        }
        const AddText: any = await create_NPackText(envSettings.serverUrl, Add_nPack.create_NPackText(promoid), commonheaders, textDetailData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(AddText, TextDetailsData);
        const commitpromo: any = await update_NPackCommit(envSettings.serverUrl, Add_nPack.update_NPackCommit(promoid), commonheaders, commitData).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        if (promoid == undefined || promoid == null) {
            pending("Not able to Delete Coupon");
        }
        await delete_NPackPromo(envSettings.serverUrl, Add_nPack.delete_NPackPromo(promoid), commonheaders).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            promoid = null;
            prizetype = null;
            return res.body;
        });
    });

})