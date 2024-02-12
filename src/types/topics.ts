export interface TopicsResponse {
  success: boolean;
  data: Topic;
}

export interface Topic {
  imagePath: string;
  id: number;
  title: string;
  subTitle: any;
  image: string;
  description: any;
  gallery: Gallery[];
  langs: Lang[];
  media: Media[];
}

export interface Gallery {
  filePath: string;
  id: number;
  filename: string;
  type: string;
}

export interface Lang {
  id: number;
  lang: string;
  title: string;
  subTitle: string;
  description: string;
  topicId: number;
}

export interface Media {
  filePath: string;
  posterPath: string;
  filename: string;
  type: string;
}
