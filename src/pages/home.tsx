import { HomeView } from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'Zone UI: The starting point for your next project',
  description:
    'The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.',
  keywords: 'react,material,kit,application,dashboard,admin,template',
};

export default function Page() {
  return (
    <>
      <title> {metadata.title}</title>

      <HomeView />
    </>
  );
}
