import React from 'react'
import Image from 'next/image'
import image1 from '../../public/1.jpg'
const Pets = () => {
    return (
        <div>
            <div>
            {/* 如果要使用placeholder就必須要使用引入的檔案，稱之為靜態檔案照片 */}
                <Image src={image1} alt='pet' placeholder='blur' width={700} height={600} />
            </div>{
                ['1', '2', '3'].map(path => {
                    return <div key={path}>
                        <img src={`/${path}.jpg`} alt='pets' width='280' height='420' />
                    </div>
                })
            }

        </div>
    )
}

export default Pets