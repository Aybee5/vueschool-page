export interface IndexSectionType {
  _updatedAt: string;
  indexPageSections: IndexPageSection[];
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
}

export interface IndexPageSection {
  compositeHeading?: CompositeHeading;
  _type: string;
  description?: string;
  _key: string;
  cta?: string;
  lessons?: string;
  courses?: string;
  hours?: string;
  features?: Feature[];
  title?: string;
}

export interface CompositeHeading {
  emphasizedText: string;
  _type: string;
  headingEnd: string;
  headingStart: string;
}

export interface Feature {
  featureTitle: string;
  isExclusive: boolean;
  _type: Type;
  isDisabled: boolean;
  _key: string;
}

export enum Type {
  Feature = "feature",
}
