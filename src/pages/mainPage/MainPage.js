import {useDispatch, useSelector} from "react-redux";
import {changeTitle, changeTitleWithParams, changeInputValue} from "../../store/titleSlice";


function MainPage() {

    const dispatch = useDispatch();
    const {title, inputValue} = useSelector(state => state.titleReducer)

    const changeTitleFn = () => {
        dispatch(changeTitle())
    }

    const changeWithParamsFn = () => {
        dispatch(changeTitleWithParams("hello geeks"))
    }

    const changeFromInput = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    return (
        <>
            <h1>{title}</h1>
            <input
                type="text"
                onChange={(e) => dispatch(changeInputValue(e.target.value))}
                value={inputValue}
            />
            <button onClick={changeFromInput}>from input</button>

            <button onClick={changeTitleFn}>change title</button>
            <button onClick={changeWithParamsFn}>with params</button>
        </>
    )
}

export default MainPage;



