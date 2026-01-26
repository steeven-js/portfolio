import { PortfolioView } from 'src/sections/portfolio/view/portfolio-view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Steeven Jacques | Developpeur Full Stack',
  description:
    'Portfolio de Steeven Jacques - Developpeur Full Stack specialise en Laravel, React, Swift et automatisation. Decouvrez mes projets et competences.',
  keywords: 'developpeur,full stack,laravel,react,swift,portfolio,web,mobile,automatisation,steeven jacques',
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />

      <PortfolioView />
    </>
  );
}
