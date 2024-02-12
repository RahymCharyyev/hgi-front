export interface ContentResponse {
  success: boolean;
  data: Content[];
}

export interface Content {
  imagePath: string;
  id: number;
  key: string;
  image?: string;
  langs: Lang[];
}

export interface Lang {
  title: string;
  text: string;
}
