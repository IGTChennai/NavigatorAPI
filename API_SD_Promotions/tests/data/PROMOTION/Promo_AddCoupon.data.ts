
import { addCoupon, AddprizeDiscount, disPrize, secondChance, addCash, serialCoupon, addVoucher, addChance, AddprizeList, textDetailsDiscount, selectedProducts, promoHours, selectedGroups, promoStatusInfo, selectedPlayTypes, AddpriType, Addprize, promoTextMessageLines, promoTextMessageLinesdata, textDetails } from '../../models/PROMOTION/Promo_Addcoupon_14500';
import { RandomSource } from '../../../utils/DataUtils'

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
export const promoStatusInfoData: promoStatusInfo = {
  promoStatus: 1,
  prizeStatus: 1,
  criteriaStatus: 1,
  textStatus: 1
}

export enum product {
  MegaMillions = 11
}
export enum groups {
  All = 0
}

export const selectedProductsData: selectedProducts = [product.MegaMillions];
export const selectedGroupsData: selectedGroups = [groups.All];


var currentValue = new Date();
var result = currentValue.getFullYear() + "-" + ("0" + (currentValue.getMonth() + 1)).slice(-2) + "-" + ("0" + currentValue.getDate()).slice(-2);

export const addCouponData: addCoupon = {
  promotionNumber: RandomSource.getRandomNumber(4,true),
  promotionName: RandomSource.getRandomString(8,true,false,false),
  promoEnabled: true,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 1,
  prizeType: 2,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 47242
}

export const disabledCouponData: addCoupon = {
  promotionNumber: RandomSource.getRandomNumber(4,true),
  promotionName: RandomSource.getRandomString(8,true,false,false),
  promoEnabled: false,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 1,
  prizeType: 2,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 47242
}


export const discountCouponData: addCoupon = {
  promotionNumber: RandomSource.getRandomNumber(4,true),
  promotionName: RandomSource.getRandomString(8,true,false,false),
  promoEnabled: true,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 1,
  prizeType: 1,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 47242
}

export const VoucherCouponData: addCoupon = {
  promotionNumber: RandomSource.getRandomNumber(4,true),
  promotionName: RandomSource.getRandomString(8,true,false,false),
  promoEnabled: true,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 1,
  prizeType: 4,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 47242
}

export const chanceCouponData: addCoupon = {
  promotionNumber: RandomSource.getRandomNumber(4,true),
  promotionName: RandomSource.getRandomString(8,true,false,false),
  promoEnabled: true,
  currentFuture: 1,
  promoCommit: 'COMMITTED',
  promoActive: false,
  promoDelete: false,
  promoType: 1,
  prizeType: 5,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 47242
}
export const cashCouponData: addCoupon = {
  promotionNumber: RandomSource.getRandomNumber(3,true),
  promotionName: RandomSource.getRandomString(6,true,false,false),
  promoEnabled: true,
  currentFuture: 1,
  //promoCommit: 'COMMITTED',
  promoCommit: 'NOT_COMMITTED',  
  promoActive: false,
  promoDelete: false,
  promoType: 1,
  prizeType: 6,
  startDate: result,
  endDate: result,
  promoHours: promoHoursData,
  selectedGroups: selectedGroupsData,
  selectedProducts: selectedProductsData,
  promoStatusInfo: promoStatusInfoData,
  tuneNumber: 1,
  checksum: 47242
}
export const serialCouponData: serialCoupon = {
  couponBarCode: true,
  couponSerial: true,
  firstCoupon: 1,
  lastCoupon: 10,
  type: "promo.type.coupon"
}

export const selectedPlayTypesData: selectedPlayTypes = [1]

export const AddpriTypeData: AddpriType = {
  "minPrice": 0,
  "maxPrice": 0,
  "gameFeature": 0,
  "minBoards": 1,
  "maxBoards": 1,
  "minDuration": 0,
  "maxDuration": 0,
  "betId": 0,
  "selectedPlayTypes": selectedPlayTypesData,
  "extraPlay": 0,
  "priority": 1
}

export const AddcriteriaDiscount: AddprizeList = {
  "minPrice": 0,
  "maxPrice": 0,
  "gameFeature": 0,
  "minBoards": 1,
  "maxBoards": 1,
  "minDuration": 0,
  "maxDuration": 0,
  "betId": 1,
  "selectedPlayTypes": selectedPlayTypesData,
  "extraPlay": 2,
  "priority": 1
}

export const addCashData: addCash = {
  bonusAmount: 100,
  bonusType: 1,
  discountAmount: 0,
  maxPrizeAmount: 100,
  maxPrizeCount: 1,
  type: "promo.prize.type.cash"
}



export const disPrizeData: disPrize = {
  type: 'promo.prize.type.free',
  maxPrizeCount: 1,
  maxPrizeAmount: 1000,
  spots: 0,
  multiplier: false,
  drawNumber: 0,
  dayDrawOption: 0,
  buyXGetY: true
}


export const AddprizeData: Addprize =
{
  type: 'promo.prize.type.free',
  maxPrizeCount: 1,
  maxPrizeAmount: 100,
  productId: 0,
  boards: 0,
  duration: 0,
  betType: 0,
  spots: 0,
  multiplier: false,
  amount: 0,
  drawNumber: 0,
  dayDrawOption: 0,
  buyXGetY: true,
}
export const secondChanceData: secondChance =
{
  type: 'promo.prize.type.raffle',
  maxPrizeCount: 1,
  beginRaffleNumber: 1,
  displaySerial: false,
  maxPrizeAmount: 1000
}
export const AddprizeDiscountData: AddprizeDiscount =
{
  type: 'promo.prize.type.discount',
  maxPrizeCount: 1,
  maxPrizeAmount: 100,
  discountType: 3,
  discountAmount: 0,
  discountPercentage: 0.01,
  commission: false
}
export const addVoucherData: addVoucher =
{
  maxPrizeAmount: 100,
  maxPrizeCount: 1,
  printVoucherNumber: true,
  printSerialNumber: true,
  upcBarcode1: 1,
  upcBarcode2: 1,
  type: 'promo.prize.type.voucher',
}
export const addChanceData: addChance =
{
  maxPrizeAmount: 100,
  maxPrizeCount: 1,
  displaySerial: true,
  beginRaffleNumber: 1,
  type: 'promo.prize.type.raffle',
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
export const textDetailDataDiscount: textDetailsDiscount = {
  wagerText: {
    promoTextMessageLines: promoTextMessageLinesData,
    textLocation: 1,
    textNumber: 1
  },
  tuneNumber: 1
}
export const commitData = {};