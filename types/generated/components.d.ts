import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAgencies extends Schema.Component {
  collectionName: 'components_components_agencies';
  info: {
    displayName: 'Agencies';
    icon: 'book';
    description: '';
  };
  attributes: {
    agencyName: Attribute.String;
  };
}

export interface ComponentsFinalmember extends Schema.Component {
  collectionName: 'components_components_finalMembers';
  info: {
    displayName: 'ImageCard';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    imageUrl: Attribute.String;
    Title: Attribute.String;
    Year: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ComponentsHeadingAndParagraph extends Schema.Component {
  collectionName: 'components_components_heading_and_paragraphs';
  info: {
    displayName: 'HeadingAndParagraph';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    paragraph: Attribute.Text;
    buttonTitle: Attribute.String;
    buttonLink: Attribute.String;
    mediaLink: Attribute.String;
  };
}

export interface ComponentsJobsTable extends Schema.Component {
  collectionName: 'components_components_jobs_tables';
  info: {
    displayName: 'JobsTable';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    jobTitle: Attribute.String;
    city: Attribute.String;
    employmentLevel: Attribute.String;
    JobLink: Attribute.String;
    jobId: Attribute.String;
  };
}

export interface ComponentsLanding extends Schema.Component {
  collectionName: 'components_components_landings';
  info: {
    displayName: 'Landing';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    imageUrl: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface ComponentsLineCards extends Schema.Component {
  collectionName: 'components_components_line_cards';
  info: {
    displayName: 'LineCards';
    icon: 'exit';
  };
  attributes: {
    ImageUrl: Attribute.String;
    pdfLink: Attribute.String;
    Title: Attribute.String;
    button1Text: Attribute.String;
    button1Link: Attribute.String;
    button2Text: Attribute.String;
    button2Link: Attribute.String;
  };
}

export interface ComponentsListTest extends Schema.Component {
  collectionName: 'components_components_list_tests';
  info: {
    displayName: 'ListTest';
    icon: 'landscape';
  };
  attributes: {
    Listexample: Attribute.Component<'components.paragraph', true>;
  };
}

export interface ComponentsMainTitle extends Schema.Component {
  collectionName: 'components_components_main_titles';
  info: {
    displayName: 'MainTitle';
    icon: 'cloud';
  };
  attributes: {
    Title: Attribute.String;
    TitleUrl: Attribute.String;
  };
}

export interface ComponentsMedia extends Schema.Component {
  collectionName: 'components_components_media';
  info: {
    displayName: 'Media';
    icon: 'filter';
  };
  attributes: {
    videoLink: Attribute.String;
    imageLink: Attribute.String;
  };
}

export interface ComponentsMember extends Schema.Component {
  collectionName: 'components_components_members';
  info: {
    displayName: 'membersList';
    icon: 'crown';
    description: '';
  };
  attributes: {
    singleMember: Attribute.Component<'components.single-member', true>;
  };
}

export interface ComponentsPLink extends Schema.Component {
  collectionName: 'components_components_p_links';
  info: {
    displayName: 'PLink';
    icon: 'discuss';
  };
  attributes: {
    linkTitle: Attribute.String;
    linkUrl: Attribute.String;
  };
}

export interface ComponentsParagraph extends Schema.Component {
  collectionName: 'components_components_paragraphs';
  info: {
    displayName: 'paragraph';
    icon: 'cup';
    description: '';
  };
  attributes: {
    Ptext: Attribute.Text;
    optionalLink: Attribute.String;
  };
}

export interface ComponentsRecognitionComp extends Schema.Component {
  collectionName: 'components_components_recognition_comps';
  info: {
    displayName: 'Card';
    icon: 'database';
    description: '';
  };
  attributes: {
    year: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    optionalImageUrl: Attribute.String;
  };
}

export interface ComponentsResourcesCategories extends Schema.Component {
  collectionName: 'components_components_resources_categories';
  info: {
    displayName: 'resources-categories';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
  };
}

export interface ComponentsSingleMember extends Schema.Component {
  collectionName: 'components_components_single_members';
  info: {
    displayName: 'SingleMember';
    icon: 'crown';
    description: '';
  };
  attributes: {
    imageUrl: Attribute.String;
    title: Attribute.String;
    year: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentsSingleTitle extends Schema.Component {
  collectionName: 'components_components_single_titles';
  info: {
    displayName: 'SubTitle';
    icon: 'check';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    linkUrl: Attribute.String;
    LinkText: Attribute.String;
  };
}

export interface ComponentsTrainings extends Schema.Component {
  collectionName: 'components_components_trainings';
  info: {
    displayName: 'trainings';
    icon: 'code';
  };
  attributes: {
    trainingName: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.agencies': ComponentsAgencies;
      'components.finalmember': ComponentsFinalmember;
      'components.heading-and-paragraph': ComponentsHeadingAndParagraph;
      'components.jobs-table': ComponentsJobsTable;
      'components.landing': ComponentsLanding;
      'components.line-cards': ComponentsLineCards;
      'components.list-test': ComponentsListTest;
      'components.main-title': ComponentsMainTitle;
      'components.media': ComponentsMedia;
      'components.member': ComponentsMember;
      'components.p-link': ComponentsPLink;
      'components.paragraph': ComponentsParagraph;
      'components.recognition-comp': ComponentsRecognitionComp;
      'components.resources-categories': ComponentsResourcesCategories;
      'components.single-member': ComponentsSingleMember;
      'components.single-title': ComponentsSingleTitle;
      'components.trainings': ComponentsTrainings;
    }
  }
}
