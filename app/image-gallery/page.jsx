import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <>
    <br />
    <br />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-8 justify-center  px-9 py-9">
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300} height={300} src="/enfuse-pics/ENFUSE_1.jpg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_2.jpg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_3.jpg" alt=""></Image>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_4.jpg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_5.jpg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_6.jpg" alt=""></Image>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_7.jpeg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_8.jpeg" alt="">
                </Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_9.jpeg" alt=""></Image>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_10.jpeg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_11.jpeg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_12.jpeg" alt=""></Image>
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" width={300}  height={300} src="/enfuse-pics/ENFUSE_13.jpeg" alt=""></Image>
        </div>
    </div>
    <br />
    <br />
</div>

 <br />
  <br />
  </>)
}

export default page

