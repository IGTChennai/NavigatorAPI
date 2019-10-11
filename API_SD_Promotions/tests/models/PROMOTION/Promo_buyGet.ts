
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
export interface buyget{
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
  export interface selectedPlayTypes{
    [index:number]:number
 }


export interface AddpriType{
    minPrice: number;
    maxPrice: number;
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
    bonusType:number;
    bonusAmount: number;
    bonusPercentage:number;
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
    