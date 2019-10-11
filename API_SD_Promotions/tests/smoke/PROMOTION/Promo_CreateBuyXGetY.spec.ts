import * as chai from 'chai';
import { assert, expect } from 'chai';
import { envSettings } from '../../../server.config';
import { commonheaders } from '../../../utils/auth';
import { RandomSource } from '../../../utils/DataUtils';
import { buygetData, AddpriTypeData, AddprizeData, textDetailData, commitData } from '../../data/PROMOTION/Promo_buyGet.data';
import { Add_Buyget } from '../../data/PROMOTION/Promotions_Urls'
import { addNbuyPromo, addCriteria, addPrize, addText } from "../../schema/PROMOTION/Promo_buyGet.schema";
import * as _ from 'underscore';
import { read_AllPromotions, create_BuyXgetY, create_Criteria, create_PrizeType, create_Text, update_Commit, delete_BuyXgetY, update_Promotions, delete_Promotions } from '../../../lib/PROMOTION/BuyXgetY';
chai.use(require("chai-json-schema"));

let promoid = null;
let prizetype = null;
let getAllPromoData: any = null;
let a: any = global;

describe('·Navigator (Promotions Manager => Buy X, Get Y-PromoTion => Add a Every Buy X, Get Y-Promo status commited)', () => {
    beforeEach(() => {
        assert.property(commonheaders, 'Authorization', 'Must Conatin authoriation token');
        assert.isNotNull(commonheaders.Authorization, 'Must Conatin authoriation token');
    })
    xit(a.getname(185, envSettings.envname, true), async () => {
        getAllPromoData = await read_AllPromotions(envSettings.serverUrl, Add_Buyget.read_AllPromotions(), commonheaders).then((res) => {
            //  console.log(JSON.stringify(res));
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        // console.log(getAllPromoData);
        if (getAllPromoData !== null) {
            while (_.findWhere(getAllPromoData, { promotionNumber: buygetData.promotionNumber })) {
                buygetData.promotionNumber = RandomSource.getRandomNumber(4, true);
                buygetData.promotionName = "test" + " " + buygetData.promotionNumber;
            }
        } else {
            console.log('================');
        }
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
            // console.log(JSON.stringify(res));
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        assert.jsonSchema(NewPrmCriteria, addCriteria);

        if (promoid == undefined || promoid == null) {
            pending("Not able to add Prize Information");
        }
        const Addprize: any = await create_PrizeType(envSettings.serverUrl, Add_Buyget.create_PrizeType(promoid, prizetype), commonheaders, AddprizeData).then((res) => {
            //console.log(JSON.stringify(res));
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
    })
    xit(a.getname(185, envSettings.envname, true), async () => {

        getAllPromoData = await read_AllPromotions(envSettings.serverUrl, Add_Buyget.read_AllPromotionsList(), commonheaders).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        console.log(getAllPromoData.length);

        for (let index = 0; index < 100; index++) {
            const element = getAllPromoData[index];
            console.log(element.promotionNumber)
            let promoId = element.promotionNumber;
            let readPromoData = await read_AllPromotions(envSettings.serverUrl, Add_Buyget.read_Promotion(promoId), commonheaders).then((res) => {
                //  console.log(JSON.stringify(res));
                assert.equal(res.status, 200, `${res.text}`);
                return res.body;
            });
            console.log(readPromoData);
            //endDate: "2020-08-27"
            //startDate: "2020-08-27"
            readPromoData.startDate = "2020-08-27"
            readPromoData.endDate = "2020-08-27"
            let updatePromoData = await update_Promotions(envSettings.serverUrl, Add_Buyget.update_Promotion(promoId), commonheaders, readPromoData).then((res) => {
                //  console.log(JSON.stringify(res));
                assert.equal(res.status, 200, `${res.text}`);
                return res.body;
            });
            console.log('updatePromoData:  ' + updatePromoData);
        }
    })
    it(a.getname(185, envSettings.envname, true), async () => {
        getAllPromoData = await read_AllPromotions(envSettings.serverUrl, Add_Buyget.read_AllPromotionsList(), commonheaders).then((res) => {
            assert.equal(res.status, 200, `${res.text}`);
            return res.body;
        });
        console.log(getAllPromoData.length);
        for (let index = 0; index < 10; index++) {
            const element = getAllPromoData[index];
            console.log(element.promotionNumber)
            let promoId = element.promotionNumber;
            await delete_Promotions(envSettings.serverUrl, Add_Buyget.delete_Promotion(promoId), commonheaders).then((res) => {
                assert.equal(res.status, 200, `${res.text}`);
                return res.body;
            });
        }

    })
});