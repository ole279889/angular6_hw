export class dtUTC {
  public id: number;
  public currentDateTime: string;
  public utcOffset: string;
  public isDayLightSavingsTime: boolean;
  public dayOfTheWeek: string;
  public timeZoneName: string;
  public currentFileTime: string;
  public ordinalDate: string;
  public serviceResponse: string;

  constructor(id: number, currentDateTime: string, utcOffset: string = "00:00:00", isDayLightSavingsTime: boolean = false, 
              dayOfTheWeek: string = "", timeZoneName: string = "UTC", currentFileTime: string = "", ordinalDate: string = "", serviceResponse: string = null) {
    this.id = id;
    this.currentDateTime = currentDateTime;    
  }
  
}