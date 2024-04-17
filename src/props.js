function Pro(props){
    return(
<>
<h1>
    all data
</h1>
<table>
    <tr>
        <td>name</td>
        <td>mobile.no</td>
        <td>study</td>
    </tr>
    <tr>
        <td>{props.name}</td>
        <td>{props.mobile}</td>
        <td>{props.study}</td>
    </tr>
</table>
</>
    );
}
export default Pro;