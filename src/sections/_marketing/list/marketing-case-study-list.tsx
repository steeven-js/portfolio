import type { BoxProps } from '@mui/material/Box';
import type { ICaseStudyProps } from 'src/types/case-study';

import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { MarketingCaseStudyItem } from './marketing-case-study-item';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  caseStudies: ICaseStudyProps[];
};

export function MarketingCaseStudyList({ caseStudies, sx, ...other }: Props) {
  const [currentTab, setCurrentTab] = useState('All');

  const getCategories = caseStudies.map((project) => project.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const dataFiltered = applyFilter({ inputData: caseStudies, query: currentTab });

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <>
      <Tabs
        value={currentTab}
        scrollButtons="auto"
        variant="scrollable"
        allowScrollButtonsMobile
        onChange={handleChangeTab}
        sx={{ mb: 5 }}
      >
        {categories.map((category) => (
          <Tab key={category} value={category} label={category} />
        ))}
      </Tabs>

      <Box
        sx={[
          {
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        {dataFiltered.map((project) => (
          <MarketingCaseStudyItem key={project.id} project={project} />
        ))}
      </Box>

      <Pagination
        count={10}
        sx={{
          mb: 10,
          mt: { xs: 5, md: 10 },
          [`& .${paginationClasses.ul}`]: { justifyContent: 'center' },
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  query: string;
  inputData: ICaseStudyProps[];
};

function applyFilter({ inputData, query }: ApplyFilterProps) {
  if (query !== 'All') {
    inputData = inputData.filter((project) => project.category === query);
  }

  return inputData;
}
