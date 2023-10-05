import React from 'react'
import "./Table.css"

export default function Table() {
    const data = [{
        id:1,
        item:2,
        cost:2,
        discount:2,
        total_paid:4,
        payment_method:"cash",
        staff:'staff',
        order_type:"type",
        client:"client",
        transaction_date:"date",
        actions:"actions"

    },
    {
        id:2,
        item:2,
        cost:2,
        discount:2,
        total_paid:4,
        payment_method:"cash",
        staff:'staff',
        order_type:"type",
        client:"client",
        transaction_date:"date",
        actions:"actions"

    }]
  return (
    <div>
        <table className='tablecontainer'>
                <tr>
                    <th>ID NO</th>
                    <th>ITEM(S)</th>
                    <th>COST</th>
                    <th>DISCOUNT</th>
                    <th>TOTAL PAID</th>
                    <th>PAYMENT METHOD(S)</th>
                    <th>STAFF</th>
                    <th>ORDER TYPE</th>
                    <th>TABLE/CLIENT</th>
                    <th>TRANSACTION DATE</th>
                    <th>ACTIONS</th>
                </tr>
                

            <tbody>
                {data.map((item,key)=>{
                    return(
                        <tr key={item.id}>

                    <td>{item.id}</td>
                    <td>{item.item}</td>
                    <td>{item.cost}</td>
                    <td>{item.id}</td>
                    <td>{item.total_paid}</td>
                    <td>{item.payment_method}</td>
                    <td>{item.staff}</td>
                    <td>{item.order_type}</td>
                    <td>{item.client}</td>
                    <td>{item.transaction_date}</td>
                    <td>{item.actions}</td>
                </tr>
                    )
                })}
                
            </tbody>
        </table>
    </div>
  )
}
