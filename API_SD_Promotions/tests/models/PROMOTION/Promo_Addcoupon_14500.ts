
  export interface promoHours
  {
    dayOfWeek: number;
    openTime: string;
    closeTime: string;
    isOpen: boolean;
    isBreak: boolean;
  }
  export interface selectedProducts{
    [index:number] :number
 }
 export interface selectedGroups{
    [index:number]:number
 }

 export interface promoStatusInfo{
    promoStatus: number;
    prizeStatus: number;
    criteriaStatus: number;
    textStatus: number;    
 }
export interface addCoupon{
    promotionNumber: string;
    promotionName: string;
    promoEnabled: boolean;
    currentFuture: number;
    promoCommit: string;
    promoActive: boolean;
    promoDelete: boolean;
    promoType: number;
    prizeType: number;
    startDate: string;
    endDate: string;
    promoHours: promoHours[];   
    selectedGroups: selectedGroups;
    selectedProducts: selectedProducts; 
    promoStatusInfo:promoStatusInfo;
    tuneNumber: number;
    checksum: number;
  }

export interface serialCoupon{
  couponBarCode: boolean;
  couponSerial: boolean;
  firstCoupon:number;
  lastCoupon: number;
  type: string;
}

export interface selectedPlayTypes {
    [index:number]:number
}

export interface AddpriType{
    minPrice: number;
    maxPrice: number;
    gameFeature : number;
    minBoards: number;
    maxBoards: number;
    minDuration: number;
    maxDuration: number;
    betId: number;
    selectedPlayTypes:selectedPlayTypes,
    extraPlay: number;
    priority: number;
  }
  export interface AddprizeList{
    minPrice: number;
    maxPrice: number;
    gameFeature : Number;
    minBoards: number;
    maxBoards: number;
    minDuration: number;
    maxDuration: number;
    betId: number;
    selectedPlayTypes:selectedPlayTypes,
    extraPlay: number;
    priority: number;
  }

  export interface Addprize {
    type: string;
    maxPrizeCount: number;
    maxPrizeAmount: number;
    productId: number;
    boards: number;
    duration: number;
    betType: number;
    spots: number;
    multiplier: boolean;
    amount:number;
    drawNumber: number;
    dayDrawOption: number;
    buyXGetY: boolean;
  }
  export interface AddprizeDiscount {
    type: string;
    maxPrizeCount: number;
    maxPrizeAmount: number;
    discountType: number;
    discountAmount: number;
    discountPercentage: number;
    commission: boolean;
  }
  export interface addVoucher {
  maxPrizeAmount: number;
  maxPrizeCount: number;
  printVoucherNumber: boolean;
  printSerialNumber: boolean;
  upcBarcode1: number;
  upcBarcode2: number;
  type: string;
} 

export interface addCash {
bonusAmount: number;
bonusType: number;
discountAmount: number;
maxPrizeAmount: number;
maxPrizeCount: number;
type: string;
}
export interface disPrize{
  type: string;
  maxPrizeCount: number;
  maxPrizeAmount: number;
  spots: number;
  multiplier: boolean;
  drawNumber: number;
  dayDrawOption: number;
  buyXGetY: boolean;
}
export interface secondChance{
  type: string;
  maxPrizeCount:  number;
  beginRaffleNumber:  number;
  displaySerial: boolean;
  maxPrizeAmount: number;
}


export interface addChance 
{
  maxPrizeAmount: number;
  maxPrizeCount: number;
  displaySerial: boolean;
  beginRaffleNumber: number;
  type: string;
}
  export interface promoTextMessageLines{
    [index:number]:string
 }
 export interface promoTextMessageLinesdata{
    [index:number]:string
 }

 export interface textDetails{
    wagerText: {
      promoTextMessageLines: promoTextMessageLines,
      textLocation: number;
      textNumber: number;
    },
    promoText: {
      promoTextMessageLines: promoTextMessageLinesdata,
      textLocation: number;
      textNumber: number;
    },
    tuneNumber: number;
  }

  export interface textDetailsDiscount{
    wagerText: {
      promoTextMessageLines: promoTextMessageLines,
      textLocation: number;
      textNumber: number;
    },
    tuneNumber: number;
  }


    



