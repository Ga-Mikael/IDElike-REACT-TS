import {useAppSelector} from "../hook.ts";


export default function Preview() {
    const tabs = useAppSelector(state => state.tabs)

    function getCode(lang:string) {
        return tabs.find(obj => obj.lang === lang).code
    }

    const srcDoc =
        `
    <!DOCTYPE html>
    <html>
        <head>
            <style>${getCode("css")}</style>
        </head>
        <body>
        ${getCode("html")}
            <script>${getCode("javascript")}</script>
        </body>
    </html>
    `
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <iframe className="block w-full h-full" srcDoc={srcDoc} sandbox="allow-scripts"></iframe>
        </div>
    )
}