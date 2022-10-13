import { useContext } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import MUIDataTable from 'mui-datatables';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FacIdContext } from './context/FacIdContext';

const MTable = ({ title, data, columns, defaultSortColumn }) => {
  const [, storeFacId] = useContext(FacIdContext);

  //Creating a default instance so the conditionals/media queries in the actual theme have something to reference for the breakpoint values
  const defaultTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 0,
        md: 1279,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#14518a',
      },
    },
    breakpoints: {
      values: {
        xs: 0, //default 0
        sm: 0, //default 600
        md: 1279, //default 960
        lg: 1280, //default 1280
        xl: 1920,
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: '#0C0C0C',
        },
      },
      MuiTableFooter: {
        root: {
          backgroundColor: 'var(--palette-color-primary)',
          color: 'var(--text-color)',
        },
      },
      MUIDataTableBodyRow: {
        responsiveStacked: {
          border: '1px solid var(--palette-color-primary) !important',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          color: 'var(--text-color)',
        },
        responsiveStackedSmallParent: {
          '&:first-of-type': {
            backgroundColor: 'var(--palette-color-primary-faded)',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      },
      MuiTableCell: {
        head: {
          backgroundColor: '#000',
          color: 'var(--text-color)',
          fontWeight: 'bold',
          padding: '8px 16px',
        },
        root: {
          padding: '8px 16px',
          [defaultTheme.breakpoints.down('sm')]: {
            padding: '1px 2px',
          },
        },
      },
      MUIDataTableHeadCell: {
        fixedHeader: {
          backgroundColor: 'var(--palette-color-primary)',
          '&:last-of-type': {
            'border-right': '1px solid var(--palette-color-primary)',
          },
        },
        data: {
          fontSize: '.8rem',
        },
      },
      MuiTableSortLabel: {
        icon: {
          fontSize: '.75rem',
          margin: '0',
          padding: '0',
          position: 'relative',
          top: '5px',
        },
      },
      MuiMenu: {
        list: {
          border: '1px solid var(--palette-color-highlight)',
        },
      },
      MuiToolbar: {
        gutters: {
          [defaultTheme.breakpoints.down(350)]: {
            padding: 0,
          },
        },
      },
      MUIDataTableToolbar: {
        iconActive: {
          color: 'var(--palette-color-highlight)',
        },
      },
      MUIDataTableFilter: {
        root: {
          backgroundColor: 'var(--alt-bg-color)',
        },
      },
      MUIDataTableFilterList: {
        root: {
          margin: '0px 16px 4px 16px',
        },
        chip: {
          margin: '0 2px',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          '&$checked': {
            color: 'var(--palette-color-highlight)',
          },
        },
      },
    },
  });

  const options = {
    filterType: 'dropdown',
    responsive: 'vertical',
    rowsPerPageOptions: [10, 25, 50, data.length],
    rowHover: true,
    fixedHeader: true,
    fixedSelectColumn: true,
    searchPlaceholder: 'Search...',
    selectableRows: 'none',
    sortOrder: defaultSortColumn,
    textLabels: { pagination: { rowsPerPage: 'Rows' } },
    print: true,
    download: true,
    onCellClick: (colData, { colIndex }) => {
      if (colIndex === 0) {
        if (colData === 'National') return;

        Router.push('/');
        storeFacId(colData);
      }
    },
  };

  return (
    <ThemeProvider theme={theme}>
      {/* The conditional for the window object is required until an update of the package is released.
      It will fail to render with an error without the conditional, as window is undefined at build time
      https://github.com/gregnb/mui-datatables/issues/1806
      */}
      {typeof window !== 'undefined' && <MUIDataTable title={title} data={data} columns={columns} options={options} />}
    </ThemeProvider>
  );
};

export default MTable;

MTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  defaultSortColumn: PropTypes.object.isRequired,
  title: PropTypes.string,
};
