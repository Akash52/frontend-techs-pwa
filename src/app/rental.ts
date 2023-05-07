export interface Rental {
  id?: number;
  property_type?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string | number;
  rental_price?: number;
  available_date?: string;
  square_feet?: number;
  bedrooms?: number;
  bathrooms?: number;
  pets_allowed?: boolean;
  is_furnished?: boolean;
  contact_name?: string;
  contact_email?: string;
  contact_phone?: number;
  image?: string;
}
