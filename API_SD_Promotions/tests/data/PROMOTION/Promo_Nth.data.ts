
import { addNth, addPrizeInfor, textDetailsDiscount, NthPromo, selectedProducts, promoHours, selectedGroups, selectedPlayTypes, AddpriType, promoTextMessageLines, promoTextMessageLinesdata, textDetails } from '../../models/PROMOTION/Promo_Nth';
import { RandomSource } from '../../../utils/DataUtils';

export const promoHoursData: promoHours[] = [
  {
    dayOfWeek: 0,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: true,
    isBreak: false
  },
  {
    dayOfWeek: 1,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 2,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 3,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 4,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 5,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 6,
    openTime: '00:00:00',
    breakStart: '00:00:00',
    breakEnd: '00:00:00',
    closeTime: '00:00:00',
    isOpen: false,
    isBreak: false
  }
]

export const selectedProductsData: selectedProducts = [11];
export const selectedGroupsData: selectedGroups = [0];

var currentValue = new Date();
var result = currentValue.getFullYear() + "-" + ("0" + (currentValue.getMonth() + 1)).slice(-2) + "-" + ("0" + currentValue.getDate()).slice(-2);

export const addNthData: addNth = {
  promotionNumber: RandomSource.getRandomNumber(4, true),
  promotionName: RandomSource.getRandomString(8, true, false, false),
  promoEnabled: true,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoType: 3,
  prizeType: 6,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  tuneNumber: 1
}

export const addNthDisableData: addNth = {
  promotionNumber: RandomSource.getRandomNumber(4, true),
  promotionName: RandomSource.getRandomString(8, true, false, false),
  promoEnabled: false,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoType: 3,
  prizeType: 6,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  tuneNumber: 1
}


export const NthPromoData: NthPromo = {
  nthTypeId: 1,
  nthValue: 1,
  type: 'promo.type.nth'
}

export const selectedPlayTypesData: selectedPlayTypes = [1]

export const AddpriTypeData: AddpriType = {
  minPrice: 0,
  maxPrice: 0,
  minBoards: 0,
  maxBoards: 0,
  minDuration: 0,
  maxDuration: 0,
  betId: 0,
  selectedPlayTypes: selectedPlayTypesData,
  extraPlay: 0,
  priority: 1
}
export const addPrizeInforData: addPrizeInfor =
{
  type: 'promo.prize.type.cash',
  maxPrizeCount: 1,
  maxPrizeAmount: 100,
  bonusType: 1,
  bonusAmount: 100,
  bonusPercentage: 0

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
export const textDetailData: textDetails = {
  wagerText: {
    promoTextMessageLines: promoTextMessageLinesData,
    textLocation: 1,
    textNumber: 1
  },
  promoText: {
    promoTextMessageLines: promoTextMessageLinesdataValue,
    textLocation: 5,
    textNumber: 2
  },
  tuneNumber: 1
}

export const commitData = {};