import {useAppDispatch} from "../hook.ts";
import {hidePreview} from "../features/preview.ts";

export default function ButtonTab({id, toggleTab, buttonContent, imgURL}) {

    const dispatch = useAppDispatch()

    return (
        <button
            onClick={() =>{
                toggleTab(id)
                dispatch(hidePreview())
            }}
            className="flex items-center px-5 py-3 hover:bg-slate-600">
            <img src={imgURL} className="w-5" alt="" />
            <span className="ml-3 text-slate-100 text-md">{buttonContent}</span>
        </button>
    )
}