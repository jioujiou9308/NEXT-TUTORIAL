import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const CatchAllRoute = () => {
const route = useRouter()
const {params = []} = route.query
console.log(params);

if(params.length === 2){
    return <h1>viewing {params[0]} and {params[1]}</h1>
}else if(params.length === 1){
    return <h1>viewing {params[0]}</h1>
}

  return (
    <div>CatchAllRoute {params.join(",")}
    <Link href={'/'}><a>asdfwefasdf</a></Link>
    </div>
  )
}

export default CatchAllRoute