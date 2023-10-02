import React from 'react'
import "./Table.css"

export default function Table() {
  return (
    <div>
        <table>
            <div className='thcontainer'>
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
                </div>

            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
