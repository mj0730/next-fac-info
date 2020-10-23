import { useContext } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { FacIdContext } from './context/FacIdContext';

const MTable = ({ title, data, columns, themeName, defaultSortColumn }) => {
  const [, storeFacId] = useContext(FacIdContext);

  //Creating a default instance so the conditionals/media queries in the actual theme have something to reference for the breakpoint values
  const defaultTheme = createMuiTheme({
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

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
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
      MuiTable: {
        root: {
          width: '100%',
        },
      },
      MuiTableFooter: {
        root: {
          backgroundColor: 'var(--palette-color-primary)',
          color: '#FFF',
        },
      },
      // MuiTablePagination: {
      //   root: {
      //     '&:last-child': { padding: '0 !important' },
      //   },
      // },
      MUIDataTableBodyRow: {
        responsiveStacked: {
          border: '1px solid var(--palette-color-primary) !important',
          // display: 'flex',
          // flexWrap: 'wrap',
          // margin: '3px 0',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          color: '#FFF',
          // '&:first-of-type': {
          //   backgroundColor: 'var(--palette-color-primary-faded)',
          // },
        },
        // cellStackedSmall: {
        //   borderBottom: 'none',
        //   flex: '0 0 18%',
        //   fontWeight: 'bold',
        //   padding: '8px 16px',
        //   height: 'unset',
        //   backgroundColor: '#2222224f',
        //   '&:first-of-type': {
        //     backgroundColor: 'var(--palette-color-primary-faded)',
        //   },
        // },
        responsiveStackedSmallParent: {
          // borderBottom: 'none',
          // flex: '1 1 60%',
          // padding: '8px 16px',
          // height: 'unset',
          '&:first-of-type': {
            backgroundColor: 'var(--palette-color-primary-faded)',
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
      },
      MuiMenu: {
        list: {
          border: '1px solid #FFF',
        },
      },
      MUIDataTableFilter: {
        root: {
          backgroundColor: '#1C1C1C',
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
    },
  });

  // switch (themeName) {
  //   case 'information':
  //     theme.overrides.MUIDataTableBodyCell.cellStackedSmall.flex = '0 0 18%';
  //     theme.overrides.MUIDataTableBodyCell.responsiveStackedSmall.flex = '1 1 60%';
  //     break;

  //   case 'staffing':
  //   case 'pay':
  //     theme.overrides.MUIDataTableBodyCell.cellStackedSmall.flex = '0 0 50%';
  //     theme.overrides.MUIDataTableBodyCell.responsiveStackedSmall.flex = '1 1 0%';
  //     break;

  //   default:
  //     break;
  // }

  const options = {
    filterType: 'checkbox',
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
        Router.push('/');
        storeFacId(colData);
      }
    },
  };

  return (
    <MuiThemeProvider theme={theme}>
      <MUIDataTable title={title} data={data} columns={columns} options={options} />
    </MuiThemeProvider>
  );
};

export default MTable;

MTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  defaultSortColumn: PropTypes.object.isRequired,
  title: PropTypes.string,
  themeName: PropTypes.string.isRequired,
};
