import { _offices } from 'src/_mock';

import { TravelNewsletter } from '../travel-newsletter';
import { TravelContactForm } from '../contact/travel-contact-form';
import { TravelContactInfo } from '../contact/travel-contact-info';

// ----------------------------------------------------------------------

export function TravelContactView() {
  return (
    <>
      <TravelContactInfo locations={_offices} />

      <TravelContactForm />

      <TravelNewsletter />
    </>
  );
}
