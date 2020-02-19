import React from 'react';
import { getApiPrefix } from '../config'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prodcutList: []
        }
    }
    componentDidMount() {
        this.loadProdcutDetails();
    }

    render() {
        console.log(this.state.prodcutList) 
        return (
            <div>
                <h1 id='title'>Product List</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Model</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* <TableBody>
          {[...this.state.prodcutList].forEach(row => (              
            <TableRow key={row.id}>
                 <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
             
            </TableRow>
          ))}
          </TableBody>*/}

                        <TableBody>
                            <TableRow>
                                <TableCell align="right">1</TableCell>
                                <TableCell align="right">Iphone X </TableCell>
                                <TableCell align="right">Apple</TableCell>
                                <TableCell align="right">60000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">2</TableCell>
                                <TableCell align="right">Iphone XS</TableCell>
                                <TableCell align="right">Apple</TableCell>
                                <TableCell align="right">70000</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">3</TableCell>
                                <TableCell align="right">Iphone S10</TableCell>
                                <TableCell align="right">Samsung</TableCell>
                                <TableCell align="right">65000</TableCell>

                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

    loadProdcutDetails() {        
        const requestUrl = `${getApiPrefix()}/product`;
        console.log(`Loading Product Details: url prefix: ${requestUrl}`);
        fetch(`${requestUrl}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        }).then(response => response.text()
        ).then(
            jsonData => {
                this.setState({
                    prodcutList: jsonData
                })
                
            }
        ).
            catch((err) => {
                console.log("chart json fetch err...");
            });            

    }


}
export default ProductComponent;
