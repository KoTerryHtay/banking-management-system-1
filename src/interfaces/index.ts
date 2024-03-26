export interface RegionInterface {
  Region_Id: string;
  Region_Eng_Name: string;
  Region_MMR_Name: string;
}

export interface DistrictInterface {
  Region_Id: string;
  District_Id: string;
  District_Eng_Name: string;
  District_MMR_Name: string;
}

export interface TownShipInterface {
  Region_Id: string;
  District_Id: string;
  Township_Id: string;
  Township_Eng_Name: string;
  Township_MMR_Name: string;
}

export interface TownInterface {
  Region_Id: string;
  District_Id: string;
  Township_Id: string;
  Town_Id: string;
  Town_Eng_Name: string;
  Town_MMR_Name: string;
}
