import showView from "../assets/view.svg"
import hideView from "../assets/hide.svg"

import {togglePreview} from "../features/preview.ts";
import {useAppDispatch, useAppSelector} from "../hook.ts";
export default function PreviewButton() {

    const previewData = useAppSelector(state => state.preview)
    const dispatch = useAppDispatch()

    return (
        <button
            onClick={() => dispatch(togglePreview())}
            className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center text-slate-50">
            <img className="w-5 mr-3" src={previewData.preview ? hideView : showView} alt="" />
                <span>{previewData.preview ? "Hide" : "Show"} Preview</span>
        </button>
    )
}