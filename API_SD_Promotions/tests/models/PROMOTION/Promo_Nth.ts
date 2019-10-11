
  export interface promoHours
  {
    dayOfWeek: number;
    openTime: string;
    breakStart: string;
    breakEnd: string;
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


export interface addNth{
    promotionNumber: string;
    promotionName: string;
    promoEnabled: boolean;    
    promoCommit: string;
    promoActive: boolean;    
    promoType: number;
    prizeType: number;
    startDate: string;
    endDate: string;
    promoHours: promoHours[];   
    selectedGroups: selectedGroups;
    selectedProducts: selectedProducts;     
    tuneNumber: number;   
  }
  export interface NthPromo {
    nthTypeId: number;
    nthValue: number;
    type: string;
  }

export interface selectedPlayTypes {
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

export interface addPrizeInfor {
  maxPrizeAmount: number;
  maxPrizeCount: number;
  bonusType: number;
  bonusAmount: number;
  type: string;
  bonusPercentage:  number;
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


    



