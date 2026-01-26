import { m } from 'framer-motion';

import SvgIcon from '@mui/material/SvgIcon';

import { varPath } from 'src/components/animate';

// ----------------------------------------------------------------------

export function SvgPath() {
  return (
    <SvgIcon
      component={m.svg}
      viewBox="0 0 512 512"
      sx={[
        (theme) => ({
          '--primary-light': theme.vars.palette.primary.light,
          '--primary-main': theme.vars.palette.primary.main,
          '--primary-dark': theme.vars.palette.primary.dark,
          width: 240,
          height: 240,
          strokeWidth: 4,
          stroke: 'var(--primary-main)',
        }),
      ]}
    >
      <m.ellipse
        {...varPath()}
        cx="405.143"
        cy="338.571"
        rx="82.857"
        ry="82.857"
        fill="var(--primary-main)"
      />
      <m.path
        {...varPath()}
        fill="currentColor"
        d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
      />
    </SvgIcon>
  );
}
