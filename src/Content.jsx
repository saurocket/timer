import {memo} from "react";


const Content = ({content}) => {
    console.log('re-render')
    return <div>
        {content < 60 ? 'Прошло секунд' : 'Прошло минут'}
    </div>
}
export default memo(Content, (prevP, nextP) => {
    if (nextP.content < 30 || !(nextP.content % 60)) {
        return false
    }
    else {
        return true
    }
})
