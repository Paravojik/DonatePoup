import './ClosePage.css'
function ClosePage(props){
    return(
        <div className="ClosePage" style={props.isVisiblePoup? {display:'flex'}:{display:'none'}} onClick={props.closePoup}>
            
        </div>
    )
}
export default ClosePage