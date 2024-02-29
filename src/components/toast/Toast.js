import React, { useCallback, useEffect } from 'react'

const Toast = ({toastList, setList}) => {


    const deleteToast = useCallback(id => {
        const toastListItem = toastList.filter(e => e.id !== id);
        setList(toastListItem)
    },[setList, toastList])

    useEffect(() => {
        const interval = setInterval(() => {
            if(toastList.length){
                deleteToast(toastList[0].id);
            }
        },3000)

        return () => {
            clearInterval(interval)
        }
    },[toastList, deleteToast])

  return (
    <div>
        {
            toastList.map((toast, i) => (
                <div key={i} style={{backgroundColor: toast.backgroundColor}} className='mr-6 mb-4 w-[400px] h-[90px] rounded-full hover:shadow-white shadow-black shadow-xl float-right'>
                    <button className='p-1 float-right mr-4 mt-6' onClick={() => deleteToast(toast.id)} >X</button>
                    <div className='ml-5 mt-3'>
                        <p className='text-center'>{toast.title}</p>
                        <p className='text-center'>{toast.description}</p>
                    </div>
                </div>                
            ))
        }
    </div>
  )
}

export default Toast