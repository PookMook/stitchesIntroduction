import { theme } from "ui/stitches.config"
import {Text, PageTitle} from 'ui/text'

export default function IndexPage(){
    return <h1 className={PageTitle({Color:"blue", Gradient: false})}>Introduction to Stitches</h1>
}