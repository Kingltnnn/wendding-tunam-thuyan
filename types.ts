import React from 'react';

export interface GalleryImage {
  id: number;
  url: string;
  category: 'Ceremony' | 'Pre-wedding' | 'Moments';
}

export interface EventDetail {
  title: string;
  time: string;
  date: string;
  location: string;
  address: string;
  mapLink: string;
  icon: React.ReactNode;
}