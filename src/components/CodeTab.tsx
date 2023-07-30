import {updateCode} from "../features/tabs.ts";
import {useAppDispatch} from "../hook.ts";

export default function CodeTab({code, id}) {
const dispatch = useAppDispatch()

    return (
            <textarea
                onChange={e => dispatch(updateCode({id, value: e.target.value}))}
                value={code}
                spellCheck="false"
                className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none">
            </textarea>

    )
}
