import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useContext } from 'react';
import Router from 'next/router';
import {FACILITIES} from '../scripts/facility_info';
import {FacIdContext} from '../components/FacIdContext';

const MTable = ({title}) => {
  const [FacId, storeFacId] = useContext(FacIdContext);

  const facilityData = Object.values(FACILITIES);

  const theme = createMuiTheme({
    overrides: {
      MuiPaper: {
        root: {
          color: "#FFF",
          backgroundColor: "#080808"
        }
      },
      MuiTable: {
        root: {
          width: "calc(100% - 4px)",
        }
      },
      MuiTableFooter: {
        root: {
          backgroundColor: "#14518A",
          color: "#FFF",
        }
      },
      MuiIconButton: {
        root: {
          color: "rgba(255, 255, 255, .75)",
        }
      },
      MUIDataTableBodyRow: {
        responsiveStacked: {
          border: "1px solid #14518A !important",
          display: "flex",
          flexWrap: "wrap",
          margin: "3px 0",
        }
      },
      MUIDataTableBodyCell: {
        root: {
          color: "#FFF",
          cursor: "pointer",
        },
        cellStackedSmall: {
          borderBottom: "none",
          flex: "0 0 20%",
          fontWeight: "bold",
          padding: "8px 16px",
        },
        responsiveStackedSmall: {
          borderBottom: "none",
          flex: "1 1 auto",
          padding: "8px 16px",
        }
      },
      MuiTableCell: {
        head: {
          fontWeight: "bold",
          backgroundColor: "#000",
          color: "#FFF",
        },
      },
      MUIDataTableHeadCell: {
        fixedHeaderCommon: {
          backgroundColor: "#14518A"
        }
      },
      MuiTablePagination: {
        root: {
          color: "#FFF",
        }
      },
      MuiSelect: {
        icon: {
          color: "rgba(0, 0, 0, .75)",
        }
      },
      MuiMenu: {
        list: {
          border: "1px solid #FFF",
        }
      }
    }
  })

  const options = {
    filterType: 'checkbox',
    selectableRows: 'multiple',
    responsive: 'stacked',
    rowsPerPageOptions: [10, 25, 50],
    rowHover: true,
    fixedHeaderOptions: {xAxis: true, yAxis: true},
    searchPlaceholder: 'Search...',
    selectableRows: 'none',
    print: true,
    download: true,
    //onRowClick: handleRowClick,
    onCellClick: (colData, {colIndex}) => { 
      if (colIndex === 0) {
        Router.push('/');
        storeFacId(colData);
      }
    }
  };

  const columns = [
    {label: 'ID', name: 'id', options: {filter: true, sort: true, searchable: true,}}, 
    {label: 'Name', name: 'name', options: {filter: true, sort: true, searchable: true,}}, 
    {label: 'Level', name: 'level', options: {filter: true, sort: true, searchable: false,}}, 
    {label: 'Type', name: 'type', options: {filter: true, sort: true, searchable: false,}}
  ]

  return (
    <MuiThemeProvider theme={theme}>
      <MUIDataTable
        title={title}
        data={facilityData}
        columns={columns}
        options={options}
      />
    </MuiThemeProvider>
  )
}

export default MTable;