import React from 'react'
import styled from 'styled-components'

const DailyTable = ({ addName, addPeople }) => {
    console.log(addPeople)
    let input=''
    return (
        <div>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                </thead>
                <tbody>
                {addPeople.map((people,index)=>(
                    <tr key={index}>
                        <td>{people}</td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                ))}

                </tbody>
            </Table>
            <AddNameForm onSubmit={(event) => {
                event.preventDefault()
                addName(input.value)
                input.value=''
            }}>
                <label>Add new member</label>
                <input type="text" ref={node=>{input=node}} />
                <button type="submit">Add</button>
            </AddNameForm>
        </div>
    )
}

const Table = styled.table`
    margin: auto;
    border: 1px solid black;
    
    td, th {
        border:1px solid black;
    }
    
`
const Input = styled.input`
    margin-left: 10px;
`
const AddNameForm = styled.form`
    margin-top: 15px;
`


export default DailyTable