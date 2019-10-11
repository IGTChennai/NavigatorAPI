
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

 export interface promoStatusInfo{
    promoStatus: number;
    prizeStatus: number;
    criteriaStatus: number;
    textStatus: number;
 }
export interface nPack{    
promotionNumber: string;
promotionName: string;
promoEnabled: boolean;
promoActive: boolean;
promoCommit: string;
selectedGroups: selectedGroups;
selectedProducts: selectedProducts;
promoType: number;
promoHours: promoHours[];
tuneNumber: number;
startDate: string;
endDate: string;
prizeType: number;    
}

export interface nPacksave{    
    promotionNumber: string;
    promotionName: string;
    promoEnabled: boolean;
    promoActive: boolean;
    promoCommit: string;
    selectedGroups: selectedGroups;
    selectedProducts: selectedProducts;
    promoType: number;
    promoHours: promoHours[];
    tuneNumber: number;
    startDate: string;
    endDate: string;
    prizeType: number;    
    submitted: boolean;
    }



export interface ticket {
    type: string;
    productId: number;
    multiplier: boolean;
    betType: number;
    amount: number;
    boards: number;
    duration: number;
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
  discountAmount: number;
  discountPercentage: number;
  discountType: number;
  maxPrizeAmount: number;
  maxPrizeCount: number;
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
  export interface textDetailsValue{
    wagerText: {
      promoTextMessageLines: promoTextMessageLines,
      promoTitleLines: [];
      textLocation: number;
      textNumber: number;
    },  
    tuneNumber: number;
  }