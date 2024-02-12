export interface CategoriesResponse {
  success: boolean;
  data: Categories[];
}

export interface Categories {
  id: number;
  key: string;
  langs: Lang[];
  topics: Topic[];
}

export interface Lang {
  name: string;
}

export interface Topic {
  imagePath: string;
  id: number;
  title: string;
  subTitle: any;
  image: string;
  langs: topicLang[];
}

export interface topicLang {
  title: string;
  subTitle: string;
}
