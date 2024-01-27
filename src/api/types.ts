export interface Root {
  success: boolean;
  data: Data;
}

export interface Data {
  data: {
    count: number;
    rows: Row[];
  };
}

export interface Row {
  imagePath: string;
  id: number;
  image: string;
  langs: Lang[];
  media: Media[];
}

export interface Lang {
  title: string;
  subTitle: string;
  id?: number;
  lang?: string;
  description?: string;
  topicId?: number;
}

export interface Media {
  filePath: string;
  filename: string;
  type: string;
}

export interface Details {
  data: {
    imagePath: string;
    id: number;
    title: string;
    subTitle: string;
    image: string;
    description: string;
    langs: Lang[];
    media: Media[];
  };
}
