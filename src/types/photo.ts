export interface Photo {
  id: string;
  alt_description: string;
  description?: string;
  urls: {
    full: string;
    regular: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}
