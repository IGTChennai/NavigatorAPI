import { RandomSource } from '../../../utils/DataUtils';
import { promoHours, ticket, nPacksave, Addprize, textDetailsValue, promoTextMessageLines, textDetails, promoTextMessageLinesdata, selectedProducts, selectedGroups, promoStatusInfo, selectedPlayTypes, nPack } from '../../models/PROMOTION/Promo_Npack';

export const promoHoursData: promoHours[] = [
  {
    dayOfWeek: 0,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: true,
    isBreak: false,
  },
  {
    dayOfWeek: 1,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false,
  },
  {
    dayOfWeek: 2,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false,
  },
  {
    dayOfWeek: 3,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false,
  },
  {
    dayOfWeek: 4,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false,
  },
  {
    dayOfWeek: 5,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false,
  },
  {
    dayOfWeek: 6,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false,
  },
]

var currentValue = new Date();
var result = currentValue.getFullYear() + "-" + ("0" + (currentValue.getMonth() + 1)).slice(-2) + "-" + ("0" + currentValue.getDate()).slice(-2);

export const selectedProductsData: selectedProducts = [];
export const selectedGroupsData: selectedGroups = [0];
export const selectedProductsDatanPack: selectedProducts = [];

export const promoStatusInfoData: promoStatusInfo = {
  promoStatus: 1,
  prizeStatus: 1,
  criteriaStatus: 1,
  textStatus: 1
}

var currentValue = new Date();
var result = currentValue.getFullYear() + "-" + ("0" + (currentValue.getMonth() + 1)).slice(-2) + "-" + ("0" + currentValue.getDate()).slice(-2);

export const nPackData: nPack =
{
  promotionNumber: RandomSource.getRandomNumber(4, true),
  promotionName: RandomSource.getRandomString(8, true, false, false),
  promoEnabled: true,
  promoActive: false,
  promoCommit: 'NOT_COMMITTED',
  selectedProducts: selectedProductsDatanPack,
  selectedGroups: selectedGroupsData,
  promoType: 5,
  promoHours: promoHoursData,
  tuneNumber: 0,
  startDate: result,
  endDate: result,
  prizeType: 1,
}

export const nPackdisableData: nPack =
{
  promotionNumber: RandomSource.getRandomNumber(4, true),
  promotionName: RandomSource.getRandomString(8, true, false, false),
  promoEnabled: false,
  promoActive: false,
  promoCommit: 'NOT_COMMITTED',
  selectedProducts: selectedProductsDatanPack,
  selectedGroups: selectedGroupsData,
  promoType: 5,
  promoHours: promoHoursData,
  tuneNumber: 0,
  startDate: result,
  endDate: result,
  prizeType: 1,
}

export const nPacksaveData: nPacksave =
{
  promotionNumber: RandomSource.getRandomNumber(4, true),
  promotionName: RandomSource.getRandomString(8, true, false, false),
  promoEnabled: true,
  promoActive: false,
  promoCommit: 'NOT_COMMITTED',
  selectedProducts: selectedProductsDatanPack,
  selectedGroups: selectedGroupsData,
  promoType: 5,
  promoHours: promoHoursData,
  tuneNumber: 0,
  startDate: result,
  endDate: result,
  prizeType: 2,
  submitted: true
}


export const ticketData: ticket = {
  amount: 200,
  betType: 0,
  boards: 1,
  duration: 1,
  multiplier: false,
  productId: 11,
  type: "NpackTicketDTO"
}

export const selectedPlayTypesData: selectedPlayTypes = [
  1,
  2
]

export const AddprizeData: Addprize =
{
  discountAmount: 0,
  discountPercentage: 1,
  discountType: 3,
  maxPrizeAmount: 100,
  maxPrizeCount: 1,
  type: "promo.prize.type.discount"
}

export const promoTextMessageLinesData: promoTextMessageLines = [
  'Test',
  ' ',
  ' ',
  ' '
]
export const promoTextMessageLinesdataValue: promoTextMessageLinesdata = [
  'Test',
  ' ',
  ' ',
  ' ',
  ' ',
  ' '
]
export const textDetailData: textDetailsValue = {
  wagerText: {
    promoTextMessageLines: [
      'Test',
      ' ',
      ' ',
      ' ',
      ' ',
      ' '
    ],
    promoTitleLines: [],
    textNumber: 1,
    textLocation: 1
  },
  tuneNumber: 1
}
export const commitData = {};