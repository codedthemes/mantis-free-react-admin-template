import React from 'react'
import './Popup.css'
// import { MinusCircleOutlined,PlusCircleOutlined  } from '@ant-design/icons';
import {  useState } from 'react';
import instance from './instance';

function Popup(props){
    const {name , product,productId} = props;
    const [newStock, setNewStock] = useState('');

    // const increaseAmount = async (e, id) => {
    //     e.preventDefault();

    //     // Find the product in the productsList array based on its id
    //     const productToUpdate = {...product, stock: product.stock+1};

    //     // console.log(productToUpdate);
    //     // if (productToUpdate) {
    //     // // Increase the stock amount of the product
    //     // productToUpdate.stock += 1;

    //     // const payload = { ...productToUpdate, stock: productToUpdate.stock };

    //     await instance.put(`ourproducts/${id}.json`, productToUpdate)
    //         .then((res) => {
    //         console.log(res);
    //         })
    //         .catch((error) => {
    //         console.error(error);
    //         });

    // };

    // const decreaseAmount = async (e, id) => {
    //     e.preventDefault();

    //     if (product.stock <= 0) {
    //         alert(`Can't have negative stock.`);
    //     } else {

    //         const productToUpdate = { ...product, stock: product.stock -1};

    //         await instance.put(`ourproducts/${id}.json`, productToUpdate)
    //         .then((res) => {
    //            console.log(res);
    //         })
    //         .catch((error) => {
    //            console.error(error);
    //         });
    //     }
        
    // };

    const updateAmount = async () => {
        const updatedStock = parseInt(newStock);

        if (isNaN(updatedStock) || updatedStock < 0) {
            alert('Please enter a valid stock amount.');
            return;
        }

        const payload = { ...product, stock: updatedStock };

        await instance.put(`ourproducts/${productId}.json`, payload)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (props.trigger) ? (
        <div className="popup">
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
                <p>{name}</p>
                
                <p>
                    {/* <button style={{ margin: '10px' }} value={stock} onClick={(e) => decreaseAmount(e, product.key)} onChange={(e) => setStock(e.target.value)}><MinusCircleOutlined></MinusCircleOutlined></button> */}
                    Amount in stock: {props.stock}
                    {/* <button style={{ margin: '10px' }} value={stock} onClick={(e) => increaseAmount(e, product.key)} onChange={(e) => setStock(e.target.value)}><PlusCircleOutlined></PlusCircleOutlined></button> */}
                </p>
                <p>Set the amount in stock:
                {/* <button style={{ margin: '10px' }} onClick={() => setNewStock(product.stock - 1)}><MinusCircleOutlined /></button> */}
                <input
                    type="number"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}
                    style={{ margin: '10px' }}
                />
                {/* <button style={{ margin: '10px' }} onClick={() => setNewStock(product.stock + 1)}><PlusCircleOutlined /></button> */}
                <button style={{ margin: '10px' }} onClick={updateAmount}>Update Stock</button>
                </p>
            </div>
        </div>
    ): "";
}

export default Popup;