import { RandomSource } from '../../../utils/DataUtils';
import { buyget, promoHours, selectedProducts, selectedGroups, promoStatusInfo, AddpriType, selectedPlayTypes } from '../../models/PROMOTION/Promo_buyGet';
import { Addprize, textDetails, promoTextMessageLines, promoTextMessageLinesdata } from '../../models/PROMOTION/Promo_buyGet';

export const promoHoursData: promoHours[] = [
  {
    dayOfWeek: 0,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: true,
    isBreak: false
  },
  {
    dayOfWeek: 1,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 2,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 3,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 4,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 5,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: false,
    isBreak: false
  },
  {
    dayOfWeek: 6,
    openTime: '00:00',
    closeTime: '00:00',
    isOpen: false,
    isBreak: false
  }
]

export const selectedProductsData: selectedProducts = [11];
export const selectedGroupsData: selectedGroups = [0];

export const promoStatusInfoData: promoStatusInfo = {
  promoStatus: 1,
  prizeStatus: 1,
  criteriaStatus: 1,
  textStatus: 1
}
var currentValue = new Date();
var result = currentValue.getFullYear() + "-" + ("0" + (currentValue.getMonth() + 1)).slice(-2) + "-" + ("0" + currentValue.getDate()).slice(-2);
console.log('Current Date:' + result);
export const buygetData: buyget =
{
  promotionNumber: RandomSource.getRandomNumber(4, true),
  promotionName: RandomSource.getRandomString(8,true,false,false),
  promoEnabled: true,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 2,
  prizeType: 6,
  startDate: result,
  endDate: result,
  //startDate: "2019-08-27",
  //endDate: "2019-08-27",
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 33440
}

export const buygetdataDisable: buyget =
{
  promotionNumber: RandomSource.getRandomNumber(3,true),
  promotionName: RandomSource.getRandomString(6,true,false,false),
  promoEnabled: false,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 2,
  prizeType: 6,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 33440
}

export const selectedPlayTypesData: selectedPlayTypes = [
  1,
  2
]

export const AddpriTypeData: AddpriType = {
  minPrice: 0,
  maxPrice: 0,
  minBoards: 1,
  maxBoards: 1,
  minDuration: 0,
  maxDuration: 0,
  betId: 0,
  selectedPlayTypes: selectedPlayTypesData,
  extraPlay: 2,
  priority: 1
}

export const AddprizeData: Addprize =
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