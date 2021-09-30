import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';

import UpdateProduct from '../UpdateProduct/UpdateProduct';

import { StyledButton, StyledSecondaryButton } from './ProductTable.style';

export default function ProductsTable(props) {
    const [order, setOrder] = React.useState('desc');
    const [orderBy, setOrderBy] = React.useState('');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [productId, setProductId] = React.useState('');

    const [modal, setModal] = React.useState(false);

    const openUpdateModal = (rowProductId) => {
      setModal(true);
      setProductId(rowProductId);
    };

    const hideModal = () => {
      setModal(false);
      setProductId('');
    };

    const rows = [];
    const {productsData, archiveToggle, deleteProduct, toggler, setToggler} = props;

    productsData.map((product, index) => 

        rows.push({
            id: index,
            productId: product._id,
            name: product.name,
            price: product.price,
            artist: product.artist,
            image: product.image,
            description: product.description,
            inventory: product.inventory,
            isActive: product.isActive,
            status: product.isActive 
              ? 'Archive'
              : 'Restore',
            buttonVariant: product.isActive 
              ? 'danger' 
              : 'restore'
        })
    );
  
    const headCells = [
        {
        id: 'artist',
        numeric: false,
        disablePadding: false,
        label: 'Artist',
        },
        {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Product Name',
        },
        {
        id: 'price',
        numeric: true,
        disablePadding: false,
        label: 'Price',
        },
        {
        id: 'inventory',
        numeric: true,
        disablePadding: false,
        label: 'Inventory',
        },
        {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
        },
        {
        id: 'update',
        numeric: false,
        disablePadding: false,
        label: 'Update',
        },
        {
        id: 'delete',
        numeric: false,
        disablePadding: false,
        label: 'Delete',
        }
    ];
    
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
        return -1;
        }
        if (b[orderBy] > a[orderBy]) {
        return 1;
        }
        return 0;
    }
  
    function getComparator(order, orderBy) {
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }
  
    function stableSort(array, comparator) {

        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }
  
    function EnhancedTableHead(props) {
        const { order, orderBy, onRequestSort } = props;
        const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
  
        return (
            <TableHead>
                <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    >
                    <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'desc'}
                        onClick={createSortHandler(headCell.id)}
                    >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                        <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted ascending' : 'sorted descending'}
                        </Box>
                        ) : null}
                    </TableSortLabel>
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
        );
    }
  
    EnhancedTableHead.propTypes = {
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['desc', 'asc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
    };

  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Products
        </Typography>
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  const handleRequestSort = (event, property) => {

    const isAsc = orderBy === property && order === 'desc';
    setOrder(isAsc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                      >
                        {row.artist}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="right">{row.price.toFixed(2)}</TableCell>
                      <TableCell align="right">{row.inventory}</TableCell>
                      <TableCell align="left">
                        <StyledButton 
                          status={row.buttonVariant} 
                          onClick={() => archiveToggle(row.productId, row.isActive)}>
                          {row.status}
                        </StyledButton>
                      </TableCell>
                      <TableCell align="left">
                          <StyledSecondaryButton 
                            onClick={() => openUpdateModal(row.productId)}
                          >
                            Update
                          </StyledSecondaryButton>
                      </TableCell>
                      <TableCell align="left">
                        <StyledButton 
                          status='danger'
                          onClick={() => deleteProduct(row.productId)}>
                          Delete
                        </StyledButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <UpdateProduct 
              isModalOpen={modal}
              hideModal={hideModal}
              productId={productId}
              toggler={toggler}
              setToggler={setToggler}
          />
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
