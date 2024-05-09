import React, { Component } from 'react';

class NVHProductlist extends Component {
    render() {
        let {renderproducts} = this.props;
        console.log("products:",renderproducts);
        let fnstasus = (param)=>{
            if(param===1){
                return'active';
            }
            return 'nonactive';
        }
        let elementproduct = renderproducts.map((item,index)=>{
        return(
            <>
            <tr key = {index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            {/*<td>{item.status===1?'active':'nonactive'}</td>*/}
                            <td>{fnstasus(item.status)}</td>
                        </tr>
            </>
        )
        })
        return (
            <div>
                <h2>danh sach san pham</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementproduct}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NVHProductlist;
