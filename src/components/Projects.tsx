import { Icon } from '@iconify/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
export function Project(){
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)

    if(data===null){
        axios('https://api.github.com/users/Mahmoudgalalz/repos?per_page=1000')
        .then(res =>{
            setData(res.data);
        })
        .catch(error=>{
            console.error("Error Fetchin Data",error);
        })
        .finally(()=>{
            setLoading(false);
        })
    }
        
    
    if(loading) return "Loading..."

    return (
        <div className='grid md:grid-cols-3 gap-3'>
            {data.map(repo=>{
                if(!repo.fork && repo.homepage){
                    return (
                        <a target='_blank' href={repo.html_url} className='flex flex-col text-prime bg-accent rounded-xl p-2 shadow-lg border-2 border-prime hover:skew-y-1 hover:border-r-8 hover:border-b-8 duration-150 cursor-pointer'>
                            <h1 className='font-bold text-xl my-2 pr-2'>{repo.name}</h1>
                            {repo.description && <p className='text-main'>{repo.description}</p>}
                            <div className='flex justify-between'>
                            <div className='my-auto'>Icons</div>
                            {repo.homepage && <a target='_blank' href={repo.homepage}><div className='p-2 px-3 hover:bg-main duration-150 border-2 rounded-lg hover:'><Icon icon="ic:round-web-asset"/></div></a>}
                            </div>
                        </a>
                    )    
                }
            })}
            
        </div>
    )
}