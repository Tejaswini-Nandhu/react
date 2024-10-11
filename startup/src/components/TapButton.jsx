export const TapButton = ({label, onSelect, isSelected}) => {
    function handleIsSelected(){
        if(isSelected){
            return "active";
        }
    }
    return(
        <li>
            <button className={handleIsSelected()} onClick={onSelect}>{label}</button>
        </li>
    );
}