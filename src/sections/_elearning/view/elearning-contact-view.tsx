import { ElearningNewsletter } from '../elearning-newsletter';
import { ElearningContactInfo } from '../contact/elearning-contact-info';
import { ElearningContactForm } from '../contact/elearning-contact-form';

// ----------------------------------------------------------------------

export function ElearningContactView() {
  return (
    <>
      <ElearningContactInfo />

      <ElearningContactForm />

      <ElearningNewsletter />
    </>
  );
}
