export type CustomListItem = {
    id: string;
    name: string;
    size: number;
  };
  
export type CompanyListItem = {
    id: string;
    name: string;
    size: number;
  };
  
export type ListItem = CustomListItem | CompanyListItem;
  
export type SectionData = {
    id: number;
    title: string;
    data: ListItem[];
  };