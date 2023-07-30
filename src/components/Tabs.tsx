import CodeTab from "./CodeTab.tsx";
import ButtonTab from "./ButtonTab.tsx";
import {useState} from "react";
import Preview from "./Preview.tsx";
import {useAppSelector} from "../hook.ts";

export default function Tabs () {

    const tabsState = useAppSelector(state => state.tabs)
    const previewData = useAppSelector(state => state.preview)

    const [tabIndex, setTabIndex] = useState(tabsState[0].id)

    return (
        <div className="flex grow">
            <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
                {tabsState.map(tab =>
                <ButtonTab
                key={tab.id}
                id={tab.id}
                toggleTab={id => setTabIndex(id)}
                imgURL={tab.imgURL}
                buttonContent={tab.buttonContent}
                />
                )}
            </div>
            <div className="w-full grow relative">
                <CodeTab
                id={tabIndex}
                code={tabsState.find(obj => obj.id === tabIndex).code}
                />
                {previewData.preview && <Preview />}
            </div>
        </div>
    )
}