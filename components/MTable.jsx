import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { FacIdContext } from './context/FacIdContext';

const MTable = ({ title, data, columns }) => {
  const [FacId, storeFacId] = useContext(FacIdContext);

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    overrides: {
      MuiPaper: {
        root: {
          backgroundColor: '#0C0C0C',
        },
      },
      MuiTable: {
        root: {
          width: 'calc(100% - 4px)',
        },
      },
      MuiTableFooter: {
        root: {
          backgroundColor: '#14518A',
          color: '#FFF',
        },
      },
      MUIDataTableBodyRow: {
        responsiveStacked: {
          border: '1px solid #14518A !important',
          display: 'flex',
          flexWrap: 'wrap',
          margin: '3px 0',
        },
      },
      MUIDataTableBodyCell: {
        root: {
          color: '#FFF',
        },
        cellStackedSmall: {
          borderBottom: 'none',
          flex: '0 0 20%',
          fontWeight: 'bold',
          padding: '8px 16px',
        },
        responsiveStackedSmall: {
          borderBottom: 'none',
          flex: '1 1 auto',
          padding: '8px 16px',
        },
      },
      MuiTableCell: {
        head: {
          backgroundColor: '#000',
          color: '#FFF',
          fontWeight: 'bold',
          padding: '8px 16px',
        },
      },
      MUIDataTableHeadCell: {
        fixedHeaderCommon: {
          backgroundColor: '#14518A',
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

  const options = {
    filterType: 'checkbox',
    responsive: 'stacked',
    rowsPerPageOptions: [10, 25, 50],
    rowHover: true,
    fixedHeader: true,
    fixedHeaderOptions: { xAxis: true, yAxis: true },
    searchPlaceholder: 'Search...',
    selectableRows: 'none',
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
  title: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
};
