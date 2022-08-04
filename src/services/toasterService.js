import toast from 'react-hot-toast';

const showToast = (type,message) => {
    switch (type) {
      case 'success':
        toast.success(message, {
          position: 'bottom-right',
          duration: 4000,
          icon: '✅',
          style: {font:'20px', padding: '10px', borderBottom:'4px solid #2C8171'},
        })
            break;
      case 'error':
        toast.error(message, {
          position: 'bottom-right',
          duration: 4000,
          icon: '❌',
          style: {font:'20px', padding: '10px', borderBottom:'4px solid #DC3545'},
        })
            break;
      case 'warning':
        toast.warning(message, {
          position: 'bottom-right',
          duration: 4000,
          icon: '⚠️',
          style: {font:'20px', padding: '10px',},
        })
        break;
         default:
            toast(message, {
              position: 'bottom-right',
              duration: 4000,
              icon: '✅',
              style: {font:'20px', padding: '10px',},
              })
    }

    console.log('message')
  }

  

  export default showToast