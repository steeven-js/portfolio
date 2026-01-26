export type MapLocationProps = {
  id: string;
  email?: string;
  photoUrl?: string;
  address: string;
  country?: string;
  phoneNumber?: string;
  position: { lat: number; lng: number };
};
